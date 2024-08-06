<script setup lang="ts">
import { auth_info } from './stores/auth';

</script>

<template>
  <div>
    <div class="navbar">
      <div v-if="auth_info">
        {{ auth_info.email }}
      </div>
    </div>
    <RouterView />
  </div>
 
</template>

<style scoped>
</style>
