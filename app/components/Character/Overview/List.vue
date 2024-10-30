<script setup lang="ts">
const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <div class="divide-y divide-slate-200">
    <div v-for="item in props.items" :key="item.uniqueId">
      <slot :item="item">
        <CharacterOverviewItemListDefault :item="item" />
      </slot>
    </div>
  </div>
</template>
