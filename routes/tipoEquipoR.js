const { Router } = require('express')
const {
    createTipoEquipo,
    uptdateById,
    getTipoById,
    deleteById
} = require('../controllers/tipoEquipoC')

const router = Router();

/**
 * crear un tipo de equipo(create)
 */
router.post('/', createTipoEquipo)




/**
 * Consulta por id(Read)
 */

router.get('/:id', getTipoById)



/**
 * Actualizar por id(update)
 */
 router.put('/:id', uptdateById)


/**
 * Borrar tipo de equipo por id(delete)
 */

router.delete('/:id', deleteById)

module.exports = router
