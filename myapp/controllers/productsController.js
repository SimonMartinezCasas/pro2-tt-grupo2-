const db = require ("../db/database")

const productsController = {
    product: function (req, res) {
        return res.render ("product" /* variable de db */)
    },
    add: function (req, res) {
        return res.render ("productAdd", {usuario: db.usuario})
    },
    results: function (req, res) {
        let productoEnviado = req.params.productoEnviado
        return res.render ("searchResults", {resultado: db.busqueda(productoEnviado)})
    }
}

module.exports = productsController