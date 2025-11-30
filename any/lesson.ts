const sentence = 'table cat table dog dog apple table'

const words = sentence.split(' ')
const initial: any = {}
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1
  return acc
}, initial)
// { table: 3, cat: 1, dog: 2, apple: 1 }

function getParams(query: string) {
  const parts = query.split('&')
  const init: any = {}
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=')
    acc[key] = value
    return acc
  }, init)

  return result
}