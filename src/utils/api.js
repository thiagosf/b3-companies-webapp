import axios from 'axios'

/**
 * Utilidades para API
 */
const api = {
  /**
   * Retorna url da api
   * @returns {string}
   */
  getURL () {
    let url
    if (
      process.env.NODE_ENV === 'dev' ||
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test'
    ) {
      url = 'http://localhost:4000'
    } else {
      url = 'https://api.b3-companies.thiagosf.net'
    }
    return url
  },

  /**
   * Monta url
   * @param {string} path
   * @returns {string}
   */
  buildURL (path) {
    return this.getURL() + path
  },

  /**
   * Post
   * @param {string} path
   * @param {object} [data={}]
   * @param {string} [token=null]
   * @returns {Promise}
   */
  post (path, data = {}, token = null) {
    return this.request('post', path, data, token)
  },

  /**
   * Put
   * @param {string} path
   * @param {object} [data={}]
   * @param {string} [token=null]
   * @returns {Promise}
   */
  put (path, data = {}, token = null) {
    return this.request('put', path, data, token)
  },

  /**
   * Get
   * @param {string} path
   * @param {object} [params={}]
   * @param {string} [token=null]
   * @returns {Promise}
   */
  get (path, params = {}, token = null) {
    return this.request('get', path, params, token)
  },

  /**
   * Post
   * @param {string} path
   * @param {object} [data={}]
   * @param {string} [token=null]
   * @returns {Promise}
   */
  delete (path, data = {}, token = null) {
    return this.request('delete', path, data, token)
  },

  /**
   * Retorna headers
   * @param {object} [data={}]
   * @param {string} [token=null]
   * @returns {object}
   */
  buildHeaders (data = {}, token = null) {
    let headers = {}
    if (data.headers) {
      headers = Object.assign({}, data.headers)
    }
    if (token) {
      headers['Authorization'] = `Token ${token}`
    }
    return headers
  },

  /**
   * Faz request
   * @param {string} method
   * @param {string} path
   * @param {object} [data={}]
   * @param {object} [token=null]
   * @returns {Promise}
   */
  request (method, path, data = {}, token = null) {
    const headers = this.buildHeaders(data, token)
    const instance = axios.create({
      baseURL: this.getURL(),
      headers
    })
    let config = {
      url: path,
      method,
    }
    if (method === 'get') {
      config.params = data || {}
    } else {
      config.data = data || {}
    }
    return instance.request(config)
      .then(response => response.data)
      .catch(error => {
        if (error.response && error.response.data) {
          return error.response.data
        }
        throw error
      })
  }
}

export default api
