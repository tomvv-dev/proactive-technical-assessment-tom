<script setup lang="ts">
const { data, status } = useRickAndMortyData('/character')
</script>

<template>
  <CharacterOverview id="rick-and-morty" title="Rick and Morty" :items="data?.results" :status="status">
    <template #item-grid="{ item }">
      <RickAndMortyOverviewItemGrid :item="item" />
    </template>
    <template #item-list="{ item }">
      <RickAndMortyOverviewItemList :item="item" />
    </template>
  </CharacterOverview>
</template>
