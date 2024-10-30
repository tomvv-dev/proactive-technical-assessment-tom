<script setup lang="ts">
const props = defineProps<{
  error: Error
}>()
</script>

<template>
  <div class="bg-red-200 text-red-600 border-red-600 rounded p-8 m-20 ">
    <div class="text-2xl flex items-center justify-center mb-20">
      Error loading data...
    </div>
    <pre class="border border-red-300 bg-red-100 rounded-md">
      {{ props.error }}
    </pre>
  </div>
</template>
