# observ-path [![Build Status](https://travis-ci.org/bendrucker/observ-path.svg?branch=master)](https://travis-ci.org/bendrucker/observ-path)

> Observable interface to the browser path with history support


## Install

```
$ npm install --save observ-path
```


## Usage

```js
var Path = require('observ-path')

var path = Path('/the/initial/path')

path(console.log)
//=> path changed

path.set('/the/new/path')
//=> path updated and history entry added
```

## API

#### `Path([value])` -> `function`

Returns an observable `path`.

##### value

Type: `string`  
Default: `''`

The initial path, defaulting to `document.location.pathname` in the browser and `''` in Node.

#### `path([fn])` -> `function` / `string`

##### fn

Type: `function`

A function to call when the path changes. If no function is provided, the current value is returned.

#### `path.set(value)` -> `undefined`

##### value

*Required*  
Type: `string`

The new path value to set.

## License

MIT © [Ben Drucker](http://bendrucker.me)
