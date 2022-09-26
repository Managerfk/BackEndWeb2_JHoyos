const { Router } = require('Express')

const {
    getInventarios,
    createInventario,
    getInventarioById,
    updateInventarioByID,
    deleteInventario} = require('../controllers/inventarioC')
const { route } = require('./tipoEquipoR')

const router = Router()

/** */
router.get('/', getInventarios)

router.get('/:id', getInventarioById)

router.post('/',createInventario)

router.put('/:id', updateInventarioByID)

router.delete('/:id', deleteInventario)

module.exports = router