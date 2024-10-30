<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <router-link :to="props.to" class="flex items-center justify-center w-60 h-60 rounded border border-slate-100 bg-slate-600 hover:bg-slate-500">
    {{ props.label }}
  </router-link>
</template>
