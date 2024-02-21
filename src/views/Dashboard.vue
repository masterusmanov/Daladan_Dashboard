<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
</script>

<template>
    <main class="min-h-screen flex">
        <Sidebar />
        <section id="main" class="w-full">
          <div class="">
            <div class="">
              <router-view></router-view>
            </div>
          </div>
        </section>
      </main>
</template>
