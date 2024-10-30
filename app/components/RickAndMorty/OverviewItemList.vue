<script setup lang="ts">
const props = defineProps<{
  item: any
}>()

const id = getIdFromUrl(props.item.url)

const { data: character } = useRickAndMortyData('/character/{id}', { path: { id } })
const image = computed(() => character.value?.image ?? '')
</script>

<template>
  <CharacterOverviewItemList :title="character?.name" :to="`/rick-and-morty/${id}`" :image="image">
    <div class="flex gap-2">
      <CharacterOverviewMetaData label="Status" :value="character?.status" />
      <CharacterOverviewMetaData label="Species" :value="character?.species" />
    </div>
  </CharacterOverviewItemList>
</template>
