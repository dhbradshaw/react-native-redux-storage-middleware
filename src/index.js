import { AsyncStorage } from 'react-native'

const action_names = [
  'GET_ALL_KEYS',
  'GET_ALL_KEYS_FAILED',
  'GET_ALL_KEYS_SUCCEEDED',

  'GET_ITEM',
  'GET_ITEM_FAILED',
  'GET_ITEM_SUCCEEDED',

  'REMOVE_ITEM',
  'REMOVE_ITEM_SUCCEEDED',
  'REMOVE_ITEM_FAILED',

  'SET_ITEM',
  'SET_ITEM_FAILED',
  'SET_ITEM_SUCCEEDED',
]

const types = action_names.reduce(
  (obj, name) => {
    obj[name] = name
    return obj
  },
  {}
)

const actions = {
  getAllKeys: () => ({
    type: types.GET_ALL_KEYS,
  }),
  getAllKeysFailed: reason => ({
    type: types.GET_ALL_KEYS_FAILED,
    reason,
  }),
  getAllKeysSucceeded: keys => ({
    type: types.GET_ALL_KEYS_SUCCEEDED,
    keys,
  }),

  getItem: key => ({
    type: types.GET_ITEM,
    key,
  }),
  getItemFailed: (key, reason) => ({
    type: types.GET_ITEM_FAILED,
    key,
    reason,
  }),
  getItemSucceeded: (key, value) => ({
    type: types.GET_ITEM_SUCCEEDED,
    key,
    value,
  }),

  removeItem: key => ({
    type: types.REMOVE_ITEM,
    key,
  }),
  removeItemFailed: (key, reason) => ({
    type: types.REMOVE_ITEM_FAILED,
    key,
    reason,
  }),
  removeItemSucceeded: (key, value) => ({
    type: types.REMOVE_ITEM_SUCCEEDED,
    key,
  }),

  setItem: (key, value) => ({
    type: types.SET_ITEM,
    key,
    value,
  }),
  setItemFailed: (key, value, reason) => ({
    type: types.SET_ITEM_FAILED,
    key,
    value,
    reason,
  }),
  setItemSucceeded: (key, value) => ({
    type: types.SET_ITEM_SUCCEEDED,
    key,
    value,
  }),
}

const middleware = store => next => (action) => {
  next(action) // Pass all actions through.
  switch (action.type) {
    case types.GET_ALL_KEYS: {
      AsyncStorage.getAllKeys().then(
        keys => store.dispatch(
          actions.getAllKeysSucceeded(
            keys
          )
        ),
        errorReason => store.dispatch(
          actions.getAllKeysFailed(
            errorReason
          )
        )
      )
      break
    }
    case types.GET_ITEM: {
      AsyncStorage.getItem(action.key).then(
        value => store.dispatch(
          actions.getItemSucceeded(
            action.key,
            value
          )
        ),
        errorReason => store.dispatch(
          actions.getItemFailed(
            action.key,
            errorReason
          )
        )
      )
      break
    }
    case types.REMOVE_ITEM: {
      AsyncStorage.removeItem(action.key).then(
        value => store.dispatch(
          actions.removeItemSucceeded(
            action.key,
          )
        ),
        errorReason => store.dispatch(
          actions.removeItemFailed(
            action.key,
            errorReason
          )
        )
      )
      break
    }
    case types.SET_ITEM: {
      AsyncStorage.setItem(action.key, action.value).then(
        value => store.dispatch(
          actions.setItemSucceeded(
            action.key,
            action.value
          )
        ),
        errorReason => store.dispatch(
          actions.setItemFailed(
            action.key,
            action.value,
            errorReason
          )
        )
      )
    }
    default:
      break
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ITEM_SUCCEEDED: {
      const key = action.key
      const value = action.value
      modifiedState = {...state}
      if (value !== null) {
        modifiedState[key] = value
      }
      return modifiedState
    }
    case types.SET_ITEM: {
      const key = action.key
      const value = action.value
      modifiedState = {...state}
      modifiedState[key] = value
      return modifiedState
    }
    default:
      return state
  }
}



export {
  actions,
  middleware,
  reducer,
  types,
}
