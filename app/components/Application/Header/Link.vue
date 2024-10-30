<script setup lang="ts">
const props = defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <ULink :to="props.to" active-class="text-slate-50 bg-stone-800 outline-offset-2 outline-slate-500 outline-weight-2" class="rounded-sm flex items-center justify-center py-1 px-4 outline outline-offset-2 outline-1" inactive-class="text-slate-200 hover:text-white outline-transparent hover:outline-blue-300">
    {{ props.label }}
  </ULink>
</template>
