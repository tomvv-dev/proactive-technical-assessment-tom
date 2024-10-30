<script setup lang="ts">
const props = defineProps<{
  modelValue: CharacterOverviewViewMode
  viewMode: CharacterOverviewViewMode
  icon: string
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: CharacterOverviewViewMode): void
}>()

const color = computed(() => {
  return props.modelValue === props.viewMode ? 'green' : 'white'
})
</script>

<template>
  <UButton :icon="props.icon" :label="props.label" :color="color" @click="emit('update:modelValue', props.viewMode)" />
</template>
