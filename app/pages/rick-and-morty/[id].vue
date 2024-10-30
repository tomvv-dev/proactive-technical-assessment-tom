<script setup lang="ts">
const id = useRoute('rick-and-morty-id').params.id

const { data: character } = useRickAndMortyData('/character/{id}', { path: { id: Number.parseInt(id) } })

const image = computed(() => character.value?.image ?? '')
</script>

<template>
  <CharacterDetail :image="image" :title="character?.name">
    <div class="prose dark:prose-invert">
      <p>
        <strong>Status:</strong> {{ character?.status }}
      </p>
      <p>
        <strong>Species:</strong> {{ character?.species }}
      </p>
      <p>
        <strong>Created:</strong> {{ character?.created }}
      </p>
      <p>
        <strong>Location:</strong> {{ character?.location?.name }}
      </p>
      <p>
        <strong>Origin:</strong> {{ character?.origin?.name }}
      </p>
    </div>
  </CharacterDetail>
</template>
