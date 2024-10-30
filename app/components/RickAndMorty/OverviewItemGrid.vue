<script setup lang="ts">
const props = defineProps<{
  item: any
}>()

const id = props.item.url.split('/').pop()

const to = `/rick-and-morty/${id}`
const { data: character } = useRickAndMortyData('/character/{id}', { path: { id } })

const image = computed(() => character.value?.image ?? '')
</script>

<template>
  <CharacterOverviewItemGrid :title="character?.name" :to="to">
    <NuxtImg :src="image" :alt="character?.name" class="w-full" />
  </CharacterOverviewItemGrid>
</template>
