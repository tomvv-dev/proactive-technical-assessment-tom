<script setup lang="ts">
const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2">
    <div v-for="item in props.items" :key="item.uniqueId">
      <slot :item="item">
        <CharacterOverviewItemGridDefault :item="item" />
      </slot>
    </div>
  </div>
</template>
