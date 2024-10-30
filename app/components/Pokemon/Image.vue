<script setup lang="ts">
import type { components } from '#nuxt-api-party/pokemon'

const props = defineProps<{
  pokemon: components['schemas']['PokemonDetail']
}>()

const image = computed(() => props.pokemon.sprites.front_default)
</script>

<template>
  <NuxtImg :src="image" />
</template>

<style scoped>
img {
  image-rendering: pixelated;
}
</style>
