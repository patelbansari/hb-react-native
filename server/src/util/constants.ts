export class Constants {
  public static readonly ERROR_MESSAGES = {
    ERR_INTERNAL_SERVER_ERROR: 'Internal server error',
    ERR_PRODUCT_NOT_FOUND: 'Product not found',
    ERR_URL_NOT_FOUND: 'Url not found',
  }
  public static readonly STATUS_CODE = {
    OK: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
  }
}
