'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Purchase = new Schema ({
    local: {
        productPrice: {
            type: String
        },

        productsId: {
            type: String
        },

        procutName: {
            type: String
        }
    }
})

module.exports = mongoose.model('Purchase', Purchase)