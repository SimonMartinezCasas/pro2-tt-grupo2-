/* const require ("base de datos") */

const productsController = {
    product: function (req, res) {
        return res.render ("product" /* variable de db */)
    },
    add: function (req, res) {
        return res.render ("productAdd" /* variable de db */)
    },
    results: function (req, res) {
        return res.render ("searchResults" /* variable de db */)
    }
}

module.exports = productsController