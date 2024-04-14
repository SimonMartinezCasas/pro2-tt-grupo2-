-- Crear database
-- El nombre es cualquier cosa
CREATE DATABASE IF NOT EXISTS myapp_database;

-- Usar la base
USE myapp_database;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    email VARCHAR(255),
    contrasenia VARCHAR(255),
    dni INT,
    fecha DATE,
    foto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

-- Insert de data test a usuarios
INSERT INTO usuarios (nombre, email, contrasenia) VALUES
('usuario1', 'usuario1@test.com', 'contraseña1'),
('Usuario2', 'usuario2@test.com', 'contraseña2'),
('usuario3', 'usuario3@test.com', 'contraseña3'),
('Usuario4', 'usuario4@test.com', 'contraseña4'),
('usuario5', 'usuario5@test.com', 'contraseña5');

-- Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion TEXT,
    nombre_archivo_imagen TEXT,
    id_usuario INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Inserción de registros de ejemplo en la tabla de productos
INSERT INTO productos (nombre, descripcion, nombre_archivo_imagen, id_usuario) VALUES
('Samsung Galaxy S23 Fe', 'Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.', 'imagen1.jpg', 1),
('Samsung Galaxy Z Flip5', 'Descubrí la pantalla plegable: al plegarse, adopta un tamaño pequeño y compacto que te resultará muy cómodo para transportar. Cuando quieras disfrutar de tus contenidos favoritos se transforma desplegando su pantalla', 'imagen1.jpg', 2),
('Samsung Galaxy A04s 4', 'Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.', 'imagen1.jpg', 3),
('Motorola Edge 40(eSIM)', 'Doble cámara y más detalles. Sus 2 cámaras traseras de 50 Mpx/13 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.', 'imagen1.jpg', 4),
('Moto G54 Dual SIM 256 GB', 'Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.', 'imagen1.jpg', 5),
('Motorola Moto E22', 'Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.', 'imagen1.jpg', 6),
('Apple iPhone 15 (128 GB)', 'El iPhone 15 viene con la Dynamic Island, cámara gran angular de 48 MP, entrada USB-C y un resistente vidrio con infusión de color en un diseño de aluminio.', 'imagen1.jpg', 7),
('Apple iPhone 11 (128 GB)', 'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche.', 'imagen1.jpg', 8),
('Apple iPhone 14 (128 GB)', 'El iPhone 14 viene con el sistema de dos cámaras más impresionante en un Iphone 14, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.', 'imagen1.jpg', 9),
('Samsung Galaxy A32 128', 'Son equipos que funcionan como nuevos y traen garantía por 3 meses. Pueden tener algún detalle estético y detalles muy pequeños en la pantalla que no afectan el funcionamiento.', 'imagen1.jpg', 10),;

-- Tabla de comentarios
CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    id_usuario INT,
    texto TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id)
);

-- Inserción de registros de ejemplo en la tabla de comentarios
INSERT INTO comentarios (id_producto, id_usuario, texto) VALUES
(1, 1, 'Comentario 1 del producto 1'),
(1, 2, 'Comentario 2 del producto 1'),
(1, 3, 'Comentario 3 del producto 1'),
(2, 1, 'Comentario 1 del producto 2'),
(2, 2, 'Comentario 2 del producto 2'),
(2, 3, 'Comentario 3 del producto 2'),
(3, 1, 'Comentario 1 del producto 3'),
(3, 2, 'Comentario 2 del producto 3'),
(3, 3, 'Comentario 3 del producto 3'),
(4, 1, 'Comentario 1 del producto 4'),
(4, 2, 'Comentario 2 del producto 4'),
(4, 3, 'Comentario 3 del producto 4'),
(5, 1, 'Comentario 1 del producto 5'),
(5, 2, 'Comentario 2 del producto 5'),
(5, 3, 'Comentario 3 del producto 5'),
(6, 1, 'Comentario 1 del producto 6'),
(6, 2, 'Comentario 2 del producto 6'),
(6, 3, 'Comentario 3 del producto 6'),
(7, 1, 'Comentario 1 del producto 7'),
(7, 2, 'Comentario 2 del producto 7'),
(7, 3, 'Comentario 3 del producto 7'),
(8, 1, 'Comentario 1 del producto 8'),
(8, 2, 'Comentario 2 del producto 8'),
(8, 3, 'Comentario 3 del producto 8'),
(9, 1, 'Comentario 1 del producto 9'),
(9, 2, 'Comentario 2 del producto 9'),
(9, 3, 'Comentario 3 del producto 9'),
(10, 1, 'Comentario 1 del producto 10'),
(10, 2, 'Comentario 2 del producto 10'),
(10, 3, 'Comentario 3 del producto 10');