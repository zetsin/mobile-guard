import path from 'path'

const context = require.context(".", true)
const object = {}
context.keys().forEach(function (key) {
  const keys = key.split(path.sep).slice(1)
  let obj = object
  for(let i = 0; i < keys.length; i++) {
    const k = path.basename(keys[i], path.extname(keys[i]))
    if(i === keys.length - 1) {
      if(k.length) {
        obj[k] = context(key)
      }
    }
    else {
      obj = obj[k] = obj[k] || {}
    }
  }
})
console.log(object)
export default object
