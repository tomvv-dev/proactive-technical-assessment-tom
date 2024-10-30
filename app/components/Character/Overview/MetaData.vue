<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  value?: string | number | null
}>(), {
  label: '',
  value: '',
})
</script>

<template>
  <div class="flex gap-2">
    <strong class="font-bold text-slate-300">
      {{ props.label }}:
    </strong>
    <span class="text-slate-200">
      {{ props.value }}
    </span>
  </div>
</template>
