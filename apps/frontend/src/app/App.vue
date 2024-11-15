<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="max-w-xl m-auto">
    <nav class="navbar bg-primary text-primary-content">
      <div class="btn btn-ghost text-xl">
        <RouterLink to="/">The pet app</RouterLink>
      </div>
      <div class="btn btn-ghost">
        <RouterLink to="/dog">Dogs</RouterLink>
      </div>
      <div class="btn btn-ghost">
        <RouterLink to="/owner">Owners</RouterLink>
      </div>
    </nav>
    <main class="p-2">
      <RouterView />
    </main>
  </div>
</template>
