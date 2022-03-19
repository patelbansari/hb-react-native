import apisauce from 'apisauce'
import Products from './Products'
import CONFIG from '../../config/AppEnvironment'

const getApiInstance = (baseURL: string) => {
  return apisauce.create({
    baseURL,
    timeout: 30000,
  })
}

const apiClient = (baseURL: string) => getApiInstance(baseURL)

const AuthorizedAPI = apiClient(CONFIG.BASE_URL)

export default {
  products: Products(AuthorizedAPI),
}
