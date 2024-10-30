export function getIdFromUrl(url: string = ''): number {
  return Number.parseInt(url.split('/').filter(Boolean).pop() ?? '')
}
