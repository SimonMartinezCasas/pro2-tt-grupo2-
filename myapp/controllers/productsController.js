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
        let producto = req.query.search
        return res.render ("searchResults", {resultado: db.busqueda(producto)})
    }
}

module.exports = productsController