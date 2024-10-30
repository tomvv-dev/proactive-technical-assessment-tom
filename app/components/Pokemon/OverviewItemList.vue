<script setup lang="ts">
import type { components } from '#nuxt-api-party/pokemon'

const props = defineProps<{
  item: components['schemas']['PokemonSummary']
}>()

const id = getIdFromUrl(props.item.url)

const { data: pokemon } = usePokemonData('/api/v2/pokemon/{id}/', { path: { id: String(id) } })

const image = computed<string>(() => {
  return pokemon.value?.sprites.front_default ?? ''
})
</script>

<template>
  <CharacterOverviewItemList :title="pokemon?.name" :to="`/pokemon/${id}`" :image="image">
    <div class="flex gap-4">
      <CharacterOverviewMetaData label="Height" :value="pokemon?.height" />
      <CharacterOverviewMetaData label="Weight" :value="pokemon?.weight" />
      <CharacterOverviewMetaData label="Base Experience" :value="pokemon?.base_experience" />
    </div>
  </CharacterOverviewItemList>
</template>
