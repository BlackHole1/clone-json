let cloneJson = require('./')
const assert = require('assert')
const mocha = require('mocha')
const {describe, it} = mocha

describe('Multidimensional judge', () => {
  let json = {
    a: 123,
    b: 'str',
    c: true,
    d: [1, '2', false, {
      e: 3
    }],
    f: {
      g: 789,
      h: 'str',
      i: true,
      j: [2]
    }
  }

  let newJson = cloneJson(json)

  newJson.a = 456
  newJson.b = 'string',
  newJson.c = false,
  newJson.d[0] = 2
  newJson.d[1] = '3'
  newJson.d[2] = true
  newJson.d[3].e = 4
  newJson.f.g = 987
  newJson.f.h = 'string'
  newJson.f.i = false,
  newJson.f.j[0] = 3

  it('Check Number', () => {
    assert.equal(json.a, 123)
  })
  it('Check String', () => {
    assert.equal(json.b, 'str')
  })
  it('Check Boolean', () => {
    assert.equal(json.c, true)
  })
  it('Check Array', () => {
    assert.equal(json.d[0], 1)
    assert.equal(json.d[1], '2')
    assert.equal(json.d[2], false)
    assert.equal(json.d[3].e, 3)
  })
  it('Check Object', () => {
    assert.equal(json.f.g, 789)
    assert.equal(json.f.h, 'str')
    assert.equal(json.f.i, true)
    assert.equal(json.f.j[0], 2)
  })
})