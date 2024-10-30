<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string
  title: string
  items?: any[] | null
  status: string
  error?: Error
}>(), {
  items: () => [],
})

const { isGrid, isList } = useOverviewStoreModule(props.id)

const items = computed(() => {
  return (props.items ?? []).map((item) => {
    return {
      ...item,
      uniqueId: useId(),
    }
  })
})
</script>

<template>
  <UContainer>
    <div class="border border-slate-200 rounded-lg bg-slate-950">
      <header class="flex items-center justify-between p-4 border-b border-b-slate-200">
        <h1 class="text-2xl font-bold">
          {{ props.title }}
        </h1>
        <CharacterOverviewControls :id="props.id" />
      </header>
      <main>
        <template v-if="props.status === 'success'">
          <CharacterOverviewGrid v-if="isGrid" :items="items">
            <template #default="{ item }">
              <slot name="item-grid" :item="item" />
            </template>
          </CharacterOverviewGrid>
          <CharacterOverviewList v-if="isList" :items="items">
            <template #default="{ item }">
              <slot name="item-list" :item="item" />
            </template>
          </CharacterOverviewList>
        </template>
        <LazyCharacterOverviewError v-if="props.status === 'error' && props.error" :error="props.error" />
      </main>
    </div>
  </UContainer>
</template>
