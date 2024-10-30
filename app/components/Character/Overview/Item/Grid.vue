<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  to?: string
}>(), {
  title: '',
  to: '',
})

const title = useUpperFirst(props.title)
</script>

<template>
  <section class="border border-slate-200 rounded-sm bg-slate-900">
    <header class="p-2 border-b border-b-slate-200 text-nowrap overflow-hidden">
      <h1 class="text-2xl">
        {{ title }}
      </h1>
    </header>
    <div class="p-2">
      <slot />
    </div>
    <footer class="flex border-t border-t-slate-200 p-3">
      <div class="ml-auto">
        <UButton icon="mdi:eye" :to="props.to">
          Details
        </UButton>
      </div>
    </footer>
  </section>
</template>
