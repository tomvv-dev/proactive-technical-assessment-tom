export const useOverviewStore = defineStore('overview', () => {
  const overviewSettings = reactive<{
    [key: string]: {
      viewMode: CharacterOverviewViewMode
    }
  }>({})

  return { overviewSettings }
})
