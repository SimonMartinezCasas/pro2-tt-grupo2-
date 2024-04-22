const { log } = require("debug/src/node")
const db = require ("../db/database")

const productsController = {
    product: function (req, res) {
        return res.render ("product", {productos: db.productos })
    },
    add: function (req, res) {
        return res.render ("productAdd", {usuario: db.usuario})
    },
    results: function (req, res) {
        return res.render ("searchResults", {resultado: db.productos})
    }
}

module.exports = productsController