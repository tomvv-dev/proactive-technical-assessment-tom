<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const { viewMode } = useOverviewStoreModule(props.id)
</script>

<template>
  <div>
    <div class="flex items-center gap-2">
      <div>View mode:</div>
      <UButtonGroup orientation="horizontal">
        <CharacterOverviewControlsViewModeButton v-model="viewMode" icon="mdi:grid" label="Grid" view-mode="grid" />
        <CharacterOverviewControlsViewModeButton v-model="viewMode" icon="mdi:list-box" label="List" view-mode="list" />
      </UButtonGroup>
    </div>
  </div>
</template>
