<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  image?: string
}>(), {
  title: '',
  image: '',
})

const title = useUpperFirst(props.title)
</script>

<template>
  <UContainer>
    <header class="py-4 border-b border-b-slate-200">
      <h1 class="text-2xl">
        {{ title }}
      </h1>
    </header>
    <main class="py-4 grid grid-cols-3">
      <div>
        <NuxtImg v-if="props.image" :src="props.image" :alt="props.title" class="size-80 rounded overflow-hidden" />
      </div>
      <div>
        <slot />
      </div>
    </main>
  </UContainer>
</template>
