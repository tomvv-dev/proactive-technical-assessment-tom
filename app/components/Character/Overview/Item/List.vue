<script setup lang="ts">
const props = withDefaults(defineProps<{
  image?: string
  title?: string
  to?: string
}>(), {
  image: '',
  title: '',
  to: '',
})

const title = useUpperFirst(props.title)
</script>

<template>
  <NuxtLink :to="to" class="flex p-2 gap-2 items-center">
    <div class="flex size-12 bg-slate-700 border border-slate-500 rounded-full justify-center items-center mr-4 overflow-hidden">
      <NuxtImg v-if="props.image" :src="image" :alt="title" class="size-12" />
    </div>
    <h2 class="font-bold text-rose-100 text-xl">
      {{ title }}
    </h2>
    <div class="ml-auto">
      <slot />
    </div>
  </NuxtLink>
</template>
