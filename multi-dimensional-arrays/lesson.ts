// @ts-check
// BEGIN (write your solution here)
const getField = (size: number): (('x' | 'o') | null)[][] => {
  const field: null[][] = Array(size).fill(null).map(() => Array(size).fill(null))
  return field
}
// END

export default getField
