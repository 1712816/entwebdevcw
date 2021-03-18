import express from 'express'
import productCtrl from '../controllers/product.controller'

const router = express.Router()


router.route('/api/products')
  .get(productCtrl.list)

router.param('productId', productCtrl.productByID)

export default router
