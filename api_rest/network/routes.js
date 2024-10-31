const usuario = require('../components/usuario/interface')

/**
 * @swagger
 * tags:
 *   - name: Usuario
 *     description: Gestión de Usuarios
 */

/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Usuario
 *     summary: Crear nuevo usuario
 *     description: Crea un nuevo usuario con nombre, apellido, rol, usuario y contraseña, y devuelve los datos del usuario registrado junto con las fechas de creación y actualización.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - rol
 *               - usuario
 *               - contraseña
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: "Rodrigo"
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario
 *                 example: "Tene"
 *               rol:
 *                 type: string
 *                 description: Rol asignado al usuario
 *                 example: "Admin"
 *               usuario:
 *                 type: string
 *                 description: Nombre de usuario para login
 *                 example: "rtene"
 *               contraseña:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: "securepassword123"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: "Rodrigo"
 *                 apellido:
 *                   type: string
 *                   example: "Tene"
 *                 rol:
 *                   type: string
 *                   example: "Admin"
 *                 usuario:
 *                   type: string
 *                   example: "rtene"
 *                 fecha_registro:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-27T22:17:00Z"
 *                 fecha_actualizacion:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-08-27T22:17:00Z"
 *       400:
 *         description: Error en la creación del usuario
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     tags:
 *       - Usuario
 *     summary: Listar todos los usuarios
 *     description: Recupera una lista completa de usuarios con sus detalles.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   apellido:
 *                     type: string
 *                   rol:
 *                     type: string
 *                   usuario:
 *                     type: string
 *                   fecha_registro:
 *                     type: string
 *                     format: date-time
 *                   fecha_actualizacion:
 *                     type: string
 *                     format: date-time
 *       400:
 *         description: Error al obtener los usuarios
 */

/**
 * @swagger
 * /usuario:
 *   put:
 *     tags:
 *       - Usuario
 *     summary: Actualizar usuario
 *     description: Actualiza la información de un usuario existente en la base de datos según el ID, incluyendo nombre, apellido, rol, y usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID único del usuario a actualizar.
 *                 example: "671b17096335901a246d0a99"
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: "Rodrigo"
 *               apellido:
 *                 type: string
 *                 description: Apellido del usuario.
 *                 example: "Tene"
 *               rol:
 *                 type: string
 *                 description: Rol del usuario.
 *                 example: "Admin"
 *               usuario:
 *                 type: string
 *                 description: Nombre de usuario para el login.
 *                 example: "rtene"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Información actualizada del usuario.
 *       400:
 *         description: Error al actualizar el usuario.
 */

/**
 * @swagger
 * /usuario:
 *   delete:
 *     tags:
 *       - Usuario
 *     summary: Eliminar usuario
 *     description: Elimina un usuario de la base de datos basado en el ID proporcionado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *             properties:
 *               _id:
 *                 type: string
 *                 description: ID único del usuario a eliminar.
 *                 example: "2003cc71hdfc421187000"
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Información del usuario eliminado.
 *       400:
 *         description: Error al eliminar el usuario.
 */

const routes = function(server) {
    server.use('/usuario', usuario)
}

module.exports = routes
