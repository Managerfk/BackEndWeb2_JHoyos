const { Router } = require('express')
const {
    createMarca,
    uptdateById,
    getTipoById,
    deleteById
} = require('../controllers/MarcaC')

const router = Router();

/**
 * crear una marca de equipo(create)
 */
router.post('/', createMarca)




/**
 * Consulta por id(Read)
 */

router.get('/:id', getTipoById)



/**
 * Actualizar por id(update)
 */
 router.put('/:id', uptdateById)


/**
 * Borrar una marca por id(delete)
 */

router.delete('/:id', deleteById)

module.exports = router
