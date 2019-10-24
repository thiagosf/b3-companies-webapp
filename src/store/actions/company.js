import { api } from '../../utils'

export const loadCompanies = () => {
  return dispatch => {
    api.get('companies').then(result => {
      let data = []
      if (result.success) {
        data = result.data
      }
      dispatch({
        type: 'SET_COMPANIES',
        data
      })
    })
  }
}
