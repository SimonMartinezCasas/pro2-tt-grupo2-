const data = {
    usuario: {
        email: "agustinagg@gmail.com",
        usuario: "Agustina Gomez Garcia",
        password: "123456",
        fechaDeNacimiento: "16/05/2005",
        documento: "46700974",
        imagenPerfil: "/images/users/fotoDePerfil.jpg"
    },
    productos: [
        {
            imagenDelProducto: "/images/products/absolutRasperri.jpg",
            nombreDelProducto: " Absolut Raspberry ",
            descripcion: "Vibrante expresión de vodka infundido con el dulce y ácido sabor de las frambuesas maduras. Su aroma fresco y afrutado anticipa una experiencia gustativa suave y equilibrada, perfecta para cócteles refrescantes o disfrutarlo solo.",
            // Otros datos del producto 1

            comentarios: [
                {
                    nombreUsuario: "Benjamín Rodriguez",
                    texto: "Llego  rapidisimo!",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1 ..
            ]
        },
        {
            imagenDelProducto: "/images/products/gresGoose.png",
            nombreDelProducto: "Grey Goose",
            descripcion: "vodka francés de renombre mundial. Destilado meticulosamente con trigo de invierno suave y agua de manantial de Gensac-la-Pallue, ofrece una experiencia excepcionalmente suave y refinada. Con su distintivo sabor limpio y delicado, es el acompañamiento perfecto para cualquier ocasión.",
            // Otros datos del producto 2
            
            comentarios: [
                {
                    nombreUsuario: "Clara Ocampo",
                    texto: "No me gustó",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/smirnoffNaranja.png",
            nombreDelProducto: "Smirnoff ",
            descripcion: "Es reconocido por su calidad y versatilidad. Destilado tres veces y filtrado diez, ofrece una pureza excepcional y un sabor suave",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Macarena Alvarez",
                    texto: "Buena relacion calidad precio",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/jagger.png",
            nombreDelProducto: "Jagger",
            descripcion: "Icónica bebida espirituosa alemana, cautiva con su distintivo sabor a base de hierbas y especias",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Esteban Quito",
                    texto: "Me encantó",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/fernet.jpg",
            nombreDelProducto: "Fernet",
            descripcion: "Emblemática bebida italiana, seduce con su inigualable amargor equilibrado por notas herbales y especiadas",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Maria Eugenia",
                    texto: "Horrible",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/blackLabel.png",
            nombreDelProducto: "Black Label",
            descripcion: "Whisky escocés por excelencia de Johnnie Walker, encarna la artesanía y la tradición centenaria. ",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Ignacio Chavez",
                    texto: "Venden por mayor?",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/campari.jpg",
            nombreDelProducto: "Campari",
            descripcion: "Aperitivo italiano icónico, cautiva con su distintivo sabor amargo y refrescante. ",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Ashton Ryan",
                    texto: "I loved it!",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/bacardi.png",
            nombreDelProducto: "Bacardi",
            descripcion: "Ron legendario de Cuba, destaca por su suavidad y versatilidad. Elaborado con la mezcla perfecta de melaza y agua pura, ofrece un sabor equilibrado con notas sutiles de vainilla y especias. ",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Thomas Green",
                    texto: "Totalmente asqueroso",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/gin.png",
            nombreDelProducto: "Tanqueray Gin Tonic",
            descripcion: "Emblema del gin premium, deslumbra con su equilibrio entre sabores botánicos y cítricos.",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Rosario Guadalupe Carone",
                    texto: "100% recomendado",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        {
            imagenDelProducto: "/images/products/vinito.webp",
            nombreDelProducto: "Cosecha Tardia Vino Blanco",
            descripcion: "Elixir de dulzura y refinamiento, se distingue por su proceso de cosecha tardía, que concentra los azúcares naturales de las uvas.",
            // Otros datos del producto 1
            
            comentarios: [
                {
                    nombreUsuario: "Abel Garcia Pintos",
                    texto: "Excelente el producto y el servicio",
                    imagenPerfil: "/images/users/defaultImage.png"
                },
                // Otros comentarios del producto 1
            ]
        },
        // Otros productos
    ]
};

module.exports = data;
