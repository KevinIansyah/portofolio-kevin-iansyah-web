<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import { type BreadcrumbItem } from "@/types";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { computed, onMounted, ref } from "vue";

const breadcrumbs: BreadcrumbItem[] = [{ title: "Dashboard", href: "/dashboard" }];

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const weeks = ref<any[]>([]);
const selectedYear = ref<number | null>(null);
const availableYears = ref<number[]>([]);
const isLoading = ref(false);
const totalContributions = ref(0);

const generateAvailableYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 4; i++) {
    years.push(currentYear - i);
  }
  availableYears.value = years;
};

const fetchContributions = async (year: number | null = null) => {
  isLoading.value = true;

  try {
    let query = "";

    if (year === null) {
      query = `
        {
          viewer {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;
    } else {
      const fromDate = `${year}-01-01T00:00:00Z`;
      const toDate = `${year}-12-31T23:59:59Z`;

      query = `
        {
          viewer {
            contributionsCollection(from: "${fromDate}", to: "${toDate}") {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;
    }

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return;
    }

    if (!json.data || !json.data.viewer) {
      console.error("Invalid response structure:", json);
      return;
    }

    const contributionsCollection = json.data.viewer.contributionsCollection;
    weeks.value = contributionsCollection.contributionCalendar.weeks;
    totalContributions.value = contributionsCollection.contributionCalendar.totalContributions;
  } catch (error) {
    console.error("Error fetching contributions:", error);
  } finally {
    isLoading.value = false;
  }
};

const onYearChange = (year: string) => {
  const yearValue = year === "default" ? null : parseInt(year);
  selectedYear.value = yearValue;
  fetchContributions(yearValue);
};

onMounted(async () => {
  generateAvailableYears();
  await fetchContributions();
});

const getContributionColor = (count: number): string => {
  if (count === 0) return "var(--contribution)";
  if (count < 2) return "var(--chart-1)";
  if (count < 3) return "var(--chart-2)";
  if (count < 4) return "var(--chart-3)";
  if (count < 5) return "var(--chart-4)";
  return "var(--chart-5)";
};

const monthLabels = computed(() => {
  const labels: string[] = [];
  let lastMonth = "";

  weeks.value.forEach((week) => {
    const firstDay = week.contributionDays[0];
    const month = format(new Date(firstDay.date), "MMM", { locale: id });

    if (month !== lastMonth) {
      labels.push(month);
      lastMonth = month;
    } else {
      labels.push("");
    }
  });

  return labels;
});

const dayLabels = ["Sen", "Rab", "Jum"];

const formatDate = (date: string) => {
  return format(new Date(date), "eeee, dd MMMM yyyy", { locale: id });
};

const displayYear = computed(() => {
  return selectedYear.value === null ? "12 bulan terakhir" : selectedYear.value.toString();
});
</script>

<template>
  <DashboardLayout :breadcrumbs="breadcrumbs">
    <div class="m-4 lg:m-6">
      <div class="mx-auto w-full max-w-[1054px] flex gap-4 lg:gap-6 justify-between overflow-auto">
        <div class="flex-1">
          <div v-if="isLoading" class="mb-4">
            <Skeleton class="w-full md:w-[50%] h-[25px] rounded-sm" />
          </div>
          <h2 v-if="!isLoading" class="text-md font-semibold mb-4">{{ totalContributions }} kontribusi dalam {{ displayYear }}</h2>
          <!-- Contribution Calendar -->
          <div v-if="weeks.length > 0" class="flex items-start gap-1">
            <div class="flex flex-col justify-between gap-[16px] pt-[34px] pr-2 text-xs text-gray-500">
              <span v-for="(day, i) in dayLabels" :key="i">{{ day }}</span>
            </div>

            <div class="flex flex-col">
              <div class="flex text-xs text-gray-500 mb-1">
                <span v-for="(label, index) in monthLabels" :key="index" class="text-center w-4">
                  {{ label }}
                </span>
              </div>

              <TooltipProvider>
                <div v-if="!isLoading">
                  <div class="grid grid-flow-col auto-cols-fr gap-[4px] w-full">
                    <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="flex flex-col gap-[4px]">
                      <div v-for="day in week.contributionDays" :key="day.date">
                        <Tooltip>
                          <TooltipTrigger as-child>
                            <div
                              class="w-full aspect-square rounded-[2px] cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400"
                              :style="{ backgroundColor: getContributionColor(day.contributionCount) }"
                            />
                          </TooltipTrigger>
                          <TooltipContent> {{ day.contributionCount }} kontribusi pada {{ formatDate(day.date) }} </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="isLoading">
                  <Skeleton class="w-full h-[108px] rounded-sm" />
                </div>
              </TooltipProvider>
            </div>
          </div>

          <!-- Error/Empty State -->
          <div v-else-if="!isLoading" class="flex flex-col items-center justify-center py-12 text-gray-500">
            <div class="text-lg mb-2">😔</div>
            <div class="text-sm">Tidak ada data kontribusi</div>
            <div class="text-xs mt-1">Coba periksa token GitHub atau pilih periode lain</div>
          </div>

          <!-- Loading State -->
          <div v-else class="flex items-center justify-center">
            <Skeleton class="w-full h-[128px] rounded-sm" />
          </div>

          <!-- Legend -->
          <div class="flex items-center justify-between mt-4 text-xs text-gray-500 mr-1">
            <span>Lebih sedikit</span>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(0) }"></div>
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(1) }"></div>
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(2) }"></div>
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(3) }"></div>
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(4) }"></div>
              <div class="w-3 h-3 rounded-[2px]" :style="{ backgroundColor: getContributionColor(5) }"></div>
            </div>
            <span>Lebih banyak</span>
          </div>
        </div>

        <!-- Tombol filter tahun -->
        <div class="flex flex-col items-center gap-2">
          <Button
            class="w-full"
            v-for="year in availableYears"
            :key="year"
            :variant="selectedYear === year ? 'default' : 'outline'"
            @click="onYearChange(year.toString())"
            :disabled="isLoading"
          >
            {{ year }}
          </Button>

          <Button class="w-full" :variant="selectedYear === null ? 'default' : 'outline'" @click="onYearChange('default')" :disabled="isLoading">
            12 Bulan Terakhir
          </Button>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
