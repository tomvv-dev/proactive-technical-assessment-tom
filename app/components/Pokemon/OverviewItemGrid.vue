<script setup lang="ts">
import type { components } from '#nuxt-api-party/pokemon'

const props = defineProps<{
  item: components['schemas']['PokemonSummary']
}>()

const id = getIdFromUrl(props.item.url)

const { data: pokemon } = usePokemonData('/api/v2/pokemon/{id}/', { path: { id: String(id) } })
</script>

<template>
  <CharacterOverviewItemGrid :title="pokemon?.name" :to="`/pokemon/${id}`">
    <PokemonImage v-if="pokemon" :pokemon="pokemon" class="w-full" />
    <div class="flex flex-col gap-1">
      <CharacterOverviewMetaData label="Height" :value="pokemon?.height" />
      <CharacterOverviewMetaData label="Weight" :value="pokemon?.weight" />
      <CharacterOverviewMetaData label="Base Experience" :value="pokemon?.base_experience" />
    </div>
  </CharacterOverviewItemGrid>
</template>
