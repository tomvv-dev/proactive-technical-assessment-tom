<script setup lang="ts">
const id = useRoute('pokemon-id').params.id

const { data: character } = usePokemonData('/api/v2/pokemon/{id}/', { path: { id } })

const image = computed(() => character.value?.sprites?.front_default ?? '')
</script>

<template>
  <CharacterDetail :image="image" :title="character?.name">
    <div class="prose dark:prose-invert">
      <p>
        <strong>Height:</strong> {{ character?.height }}
      </p>
      <p>
        <strong>Weight:</strong> {{ character?.weight }}
      </p>
      <p>
        <strong>Abilities:</strong>
      </p>
      <ul>
        <li v-for="ability in character?.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
        </li>
      </ul>
    </div>
  </CharacterDetail>
</template>
