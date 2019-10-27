import { api } from '../../utils'

const identifier = 'company'

export const loadCompanies = () => {
  return dispatch => {
    dispatch({ type: 'BEFORE_SEND', identifier })
    api.get('companies').then(result => {
      let data = []
      if (result.success) {
        data = result.data
      }
      dispatch({
        type: 'SET_COMPANIES',
        data
      })
      dispatch({ type: 'AFTER_RESPONSE', identifier })
    })
  }
}
