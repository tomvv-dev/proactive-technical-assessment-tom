<script setup lang="ts">
const { data: pokemon, status } = usePokemonData('/api/v2/pokemon/')
</script>

<template>
  <CharacterOverview id="pokemon" title="Pokemon" :items="pokemon?.results" :status="status">
    <template #item-grid="{ item }">
      <PokemonOverviewItemGrid :item="item" />
    </template>
    <template #item-list="{ item }">
      <PokemonOverviewItemList :item="item" />
    </template>
  </CharacterOverview>
</template>
