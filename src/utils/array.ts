// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shuffle(data: any[]): any[] {
  return data
    .map((value) => ({ value: value, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.value)
}
