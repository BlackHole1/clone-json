function ToString (arr) {
  return ({}).toString.call(arr)
}

function isArray (arr) {
  return ToString(arr) === '[object Array]'
}

function isObject (obj) {
  return obj != null && typeof obj === 'object' && !isArray (obj) && ToString(obj) === '[object Object]'
}

function isNumber (num) {
  return typeof num === 'number'
}

function isString (str) {
  return typeof str === 'string'
}

function isBoolean (bool) {
  return typeof bool === 'boolean'
}

function cloneCore (value) {
  if (isArray(value)) {
    return cloneArray(value)
  }
  if (isObject(value)) {
    return cloneJson(value)
  }
  if (isNumber(value)) {
    return value * 1
  }
  if (isString(value)) {
    return value.toString()
  }
  if (isBoolean(value)) {
    return !!value
  }
}

function cloneArray (arr) {
  var newArr = arr.map(function (value) {
    return cloneCore(value)
  })
  return newArr
}

function cloneJson (json) {
  if (!json) {
    return false
  }
  var newJson = {}
  Object.keys(json).map(function (key, index) {
    newJson[key] = cloneCore(json[key])
  })
  return newJson
}

module.exports = cloneJson
