'use strict'

var Path = require('./')
var history = require('observ-history')
var test = require('tape')

test(function (t) {
  t.plan(3)

  var path = Path('/initial')
  t.equal(path(), '/initial')

  history.set = function (value) {
    t.equal(value, '/foo')
  }

  path.set('/foo')
  t.equal(path(), '/foo')
  t.end()
})
