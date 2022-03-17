import express from 'express'
import { Constants } from '../util/constants'
import logger from '../util/logger'
import products from '../db/data/products.json'

const router = express.Router()

router.get('/all', (_, res) => {
  try {
    // return all products data
    res.status(Constants.STATUS_CODE.OK).json(products)
  } catch (error) {
    // error handling and sending appropriate response
    logger.error(error)
    res
      .status(Constants.STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: Constants.ERROR_MESSAGES.ERR_INTERNAL_SERVER_ERROR })
  }
})

router.get('/:id', (req, res) => {
  // find by ID in products data
  const findProduct = products.find((p) => p.id === req.params.id)
  try {
    // if found then return that data
    if (findProduct) {
      res.status(Constants.STATUS_CODE.OK).json(findProduct)
    } else {
      // sending appropriate response
      res
        .status(Constants.STATUS_CODE.BAD_REQUEST)
        .json({ error: Constants.ERROR_MESSAGES.ERR_PRODUCT_NOT_FOUND })
    }
  } catch (error) {
    // error handling and sending appropriate response
    logger.error(error)
    res
      .status(Constants.STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: Constants.ERROR_MESSAGES.ERR_INTERNAL_SERVER_ERROR })
  }
})

export default router
