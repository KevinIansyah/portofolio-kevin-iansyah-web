<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  ExpandedState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table';
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table';
import {
  ArchiveIcon,
  CheckCircle2Icon,
  ChevronDown,
  ColumnsIcon,
  MoreVertical,
} from 'lucide-vue-next';
import { h, ref } from 'vue';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { valueUpdater } from '../ui/table/utils';

export interface Blog {
  id: string;
  title: string;
  author: string;
  status: 'published' | 'archived';
  createdAt: string;
  readTime: number;
  views: number;
  tags: string[];
  thumbnailUrl?: string;
}

const data: Blog[] = [
  {
    id: '1',
    title: 'Introduction to Vue 3',
    author: 'John Doe',
    status: 'published',
    createdAt: '2025-06-01',
    readTime: 5,
    views: 1200,
    tags: ['vue', 'javascript', 'frontend'],
    thumbnailUrl: 'https://example.com/thumb/vue3.png',
  },
  {
    id: '2',
    title: 'Understanding Composition API',
    author: 'Jane Smith',
    status: 'archived',
    createdAt: '2025-06-15',
    readTime: 8,
    views: 300,
    tags: ['vue', 'composition-api'],
  },
  {
    id: '3',
    title: 'State Management with Pinia',
    author: 'Albert Tan',
    status: 'archived',
    createdAt: '2025-05-20',
    readTime: 6,
    views: 850,
    tags: ['pinia', 'state', 'vue'],
    thumbnailUrl: 'https://example.com/thumb/pinia.png',
  },
  {
    id: '4',
    title: 'Building SPAs with Vue Router',
    author: 'Dina Kurnia',
    status: 'published',
    createdAt: '2025-06-25',
    readTime: 7,
    views: 1120,
    tags: ['vue-router', 'spa', 'routing'],
  },
];

const columns: ColumnDef<Blog>[] = [
  {
    id: 'number',
    header: () => h('div', { class: 'pl-2' }, 'No'),
    cell: ({ row }) => h('div', { class: 'pl-2' }, row.index + 1),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('title')),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) =>
      h(
        Badge,
        {
          variant: 'outline',
          class: 'flex gap-2 px-1.5 [&_svg]:size-3 font-normal',
        },
        {
          default: () => [
            row.original.status === 'published' &&
              h(CheckCircle2Icon, {
                class: 'text-green-500 dark:text-green-400',
              }),
            row.original.status === 'archived' &&
              h(ArchiveIcon, {
                class: 'text-gray-500 dark:text-gray-400',
              }),
            {
              published: 'Published',
              archived: 'Archived',
            }[row.original.status],
          ],
        }
      ),
  },
  {
    accessorKey: 'views',
    header: 'Views',
    cell: ({ row }) => h('div', row.getValue('views')),
  },
  {
    accessorKey: 'readTime',
    header: 'Read Time',
    cell: ({ row }) => h('div', row.getValue('readTime')),
  },
  {
    accessorKey: 'author',
    header: 'Author',
    cell: ({ row }) =>
      h('div', { class: 'capitalize' }, row.getValue('author')),
  },
  // {
  //   accessorKey: 'email',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //       },
  //       () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  // },
  // {
  //   accessorKey: 'amount',
  //   header: () => h('div', { class: 'text-right' }, 'Amount'),
  //   cell: ({ row }) => {
  //     const amount = Number.parseFloat(row.getValue('amount'));

  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount);

  //     return h('div', { class: 'text-right' }, formatted);
  //   },
  // },
  {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: () =>
      h(
        DropdownMenu,
        {},
        {
          default: () => [
            h(
              DropdownMenuTrigger,
              { asChild: true },
              {
                default: () =>
                  h(
                    Button,
                    {
                      variant: 'ghost',
                      class:
                        'text-muted-foreground data-[state=open]:bg-muted flex size-8',
                      size: 'icon',
                    },
                    {
                      default: () => [
                        h(MoreVertical, { class: 'w-4 h-4' }),
                        h('span', { class: 'sr-only' }, 'Open menu'),
                      ],
                    }
                  ),
              }
            ),
            h(
              DropdownMenuContent,
              { align: 'end', class: 'w-32' },
              {
                default: () => [
                  h(DropdownMenuItem, {}, { default: () => 'Edit' }),
                  h(DropdownMenuItem, {}, { default: () => 'Hapus' }),
                ],
              }
            ),
          ],
        }
      ),
  },
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, rowSelection),
  onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded),
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
    get expanded() {
      return expanded.value;
    },
  },
});
</script>

<template>
  <div class="w-full">
    <div class="flex items-center py-4">
      <Input
        class="max-w-sm shadow-none leading-none"
        placeholder="Filter title..."
        :model-value="table.getColumn('title')?.getFilterValue() as string"
        @update:model-value="table.getColumn('title')?.setFilterValue($event)"
      />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <!-- <Button variant="outline" class="ml-auto shadow-none font-medium">
            Columns <ChevronDown class="ml-2 h-4 w-4" />
          </Button> -->
          <Button variant="outline" class="ml-auto shadow-none">
            <ColumnsIcon />
            <span class="hidden lg:inline">Customize Columns</span>
            <span class="lg:hidden">Columns</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            v-for="column in table
              .getAllColumns()
              .filter((column) => column.getCanHide())"
            :key="column.id"
            class="capitalize"
            :model-value="column.getIsVisible()"
            @update:model-value="
              (value) => {
                column.toggleVisibility(!!value);
              }
            "
          >
            {{ column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div class="rounded-md border">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow :data-state="row.getIsSelected() && 'selected'">
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell>
              </TableRow>
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ JSON.stringify(row.original) }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="flex items-center justify-end space-x-2 py-4">
      <div class="flex-1 text-sm text-muted-foreground">
        {{ table.getFilteredSelectedRowModel().rows.length }} of
        {{ table.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
      <div class="space-x-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
</template>
