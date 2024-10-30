import { useOverviewStore } from '~/store/overview'

export default function (id: string) {
  const { overviewSettings } = useOverviewStore()

  function createComputedAttribute(attributeName: keyof typeof overviewSettings[keyof typeof overviewSettings]) {
    return computed<CharacterOverviewViewMode>({
      get() {
        return overviewSettings[id]?.[attributeName] || 'list'
      },
      set(value) {
        overviewSettings[id] = {
          ...overviewSettings[id],
          [attributeName]: value,
        }
      },
    })
  }

  const viewMode = createComputedAttribute('viewMode')

  const isList = computed(() => viewMode.value === 'list')
  const isGrid = computed(() => viewMode.value === 'grid')

  return { viewMode, isList, isGrid }
}
