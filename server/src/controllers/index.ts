import express from 'express'
import { Constants } from '../util/constants'
import products from './products'

const router = express.Router()
router.use('/products', products)

// not configured routes
router.all('/*', (_req, res) => {
  return res.status(Constants.STATUS_CODE.NOT_FOUND).json({
    error: Constants.ERROR_MESSAGES.ERR_URL_NOT_FOUND,
  })
})

export default router
