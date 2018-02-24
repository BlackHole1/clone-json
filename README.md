# clone-json

[![npm](https://img.shields.io/npm/dy/clone-json.svg)](https://www.npmjs.com/package/clone-json) [![npm](https://img.shields.io/github/issues/BlackHole1/clone-json.svg)](https://github.com/BlackHole1/clone-json) [![npm](https://img.shields.io/github/forks/BlackHole1/clone-json.svg)](https://github.com/BlackHole1/clone-json) [![npm](https://img.shields.io/github/stars/BlackHole1/clone-json.svg)](https://github.com/BlackHole1/clone-json) [![npm](https://img.shields.io/badge/license-MIT-blue.svg)]

## install

``` bash
# Install with npm
$ npm install clone-json --save

# Install with yarn
$ yarn add clone-json
```

## Usage

Two arrays are equal
```javascript
let cloneJson = require('clone-json')

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

console.log(json) // => No changes have taken place
/* result: 
{
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
*/

console.log(newJson)
/* result:
{
  a: 456,
  b: 'string',
  c: false,
  d: [2, '3', true, {
    e: 4
  }],
  f: {
    g: 987,
    h: 'string',
    i: false,
    j: [3]
  }
}
```

## Contributing

| **Commits** | **Contributor** | 
| --- | --- |
| 3 | [Black-Hole](https://github.com/BlackHole1) |

## Author

**Black-Hole**

* Email：158blackhole@gmail.com
* Blog：[http://bugs.cc](http://bugs.cc)
* WeiBo：[http://weibo.com/comelove](http://weibo.com/comelove)
* Twitter：[https://twitter.com/Free_BlackHole](https://twitter.com/Free_BlackHole)