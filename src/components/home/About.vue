<script setup lang="ts">
import Heading from '@/components/home/Heading.vue';
</script>

<template>
  <section class="mx-auto px-4 md:max-w-7xl lg:max-w-6xl">
    <div class="py-15 space-y-10">
      <Heading
        title="TENTANG SAYA"
        description="Perkenalan singkat mengenai latar belakang dan minat saya dalam pengembangan web"
      />

      <div
        class="prose prose-invert space-y-6 text-sm md:text-base leading-relaxed max-w-3xl mx-auto p-4 md:p-8 rounded-md border shadow-sm"
      >
        <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          👋 Haii, Saya Kevin Iansyah
        </h3>
        <p>
          Saya adalah mahasiswa semester akhir jurusan
          <strong>Informatika</strong> di
          <strong>Universitas Pembangunan Nasional Veteran Jawa Timur</strong>,
          dengan minat kuat dalam pengembangan aplikasi web yang efisien,
          modern, dan mudah digunakan. Selama kuliah, saya aktif mengerjakan
          berbagai proyek baik secara individu maupun tim.
        </p>

        <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          📚 Latar Belakang
        </h3>
        <p>
          Selama perjalanan saya sebagai developer, saya banyak belajar secara
          mandiri melalui dokumentasi, komunitas, dan proyek nyata — mulai dari
          landing page, dashboard admin, sistem informasi, hingga aplikasi
          berbasis REST API.
        </p>

        <!-- <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          🧰 Keahlian Saya
        </h3>
        <p>
          Saya terbiasa menggunakan teknologi seperti <strong>Vue.js</strong>,
          <strong>React</strong>, <strong>Tailwind CSS</strong>,
          <strong>Laravel</strong>, dan <strong>NestJS</strong>. Saya juga
          memahami manajemen database dengan <strong>MySQL</strong> dan
          <strong>PostgreSQL</strong>, serta pengembangan API <em>RESTful</em>.
        </p> -->

        <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          🎯 Nilai yang Saya Pegang
        </h3>
        <p>
          Bagi saya, kode yang baik tidak hanya harus jalan, tapi juga mudah
          dipelihara dan dimengerti oleh orang lain. Saya percaya pada
          <em>clean code</em>, komunikasi yang jelas, dan kolaborasi tim yang
          sehat.
        </p>

        <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          🚀 Apa yang Saya Cari?
        </h3>
        <p>
          Saya selalu terbuka untuk tantangan baru, baik itu proyek freelance,
          part-time, maupun full-time. Tujuan saya adalah terus berkembang, baik
          secara teknis maupun sebagai problem solver.
        </p>

        <h3 class="text-lg font-semibold mb-1 text-muted-foreground">
          🎮 Fun Fact
        </h3>
        <ul class="list-disc list-inside">
          <li>Sering ngoding sambil dengerin lo-fi beats 🎧</li>
          <li>Bisa fokus ngoding 8 jam nonstop kalau udah nemu flow-nya 😄</li>
        </ul>
      </div>
    </div>
  </section>
</template>
