const initialState = {
  list: [],
  sending: false,
  activities: [],
}

const identifier = 'company'

export default (state = initialState, action) => {
  let nextState = { ...state }

  switch (action.type) {
    case 'BEFORE_SEND':
      if (action.identifier === identifier) {
        nextState.sending = true
      }
      break

    case 'AFTER_RESPONSE':
      if (action.identifier === identifier) {
        nextState.sending = false
      }
      break

    case 'SET_COMPANIES':
      nextState.list = action.data
      if (nextState.activities.length === 0) {
        nextState.activities = [...new Set(
          action.data
            .map(item => item.activity)
            .filter(item => item)
        )].sort((a, b) => a > b)
      }
      break

    default:
      nextState = state
      break
  }

  return nextState
}
