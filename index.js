'use strict'

var Observ = require('observ')
var bind = require('observ-bind')
var history = require('observ-history')
var path = require('document-pathname')

module.exports = Path

function Path (data) {
  var state = Observ(data || path())
  bind(state, history)
  return state
}
