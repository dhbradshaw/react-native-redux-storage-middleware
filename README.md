# react-native-redux-storage-middleware

https://github.com/dhbradshaw/react-native-redux-storage-middleware

## What is it?
react-native-redux-storage-middleware encodes **a simple pattern for connecting local storage to the redux global state.**

This package encodes that simple pattern for React Native apps.  A sister package will encode the same pattern for ReactJS.

## How do I use it?
### Overview
Interactions with storage are triggered through dispatched actions.
All actions are available in the actions object. Import it and use its properties to interact with AsyncStorage. 
### Examples:
```javascript
import { actions as storageActions } from 'react-native-redux-storage-middleware'
```


```javascript
store.dispatch(storageActions.setItem(key, value))} />
```

```javascript
store.dispatch(storageActions.getItem(key))} />
```

```javascript
store.dispatch(storageActions.getAllKeys())} />
```

```javascript
store.dispatch(storageActions.removeItem(key))} />
```
### Use the results
Each one of the four command actions will trigger one of two result actions.

SET_ITEM => SET_ITEM_FAILED or SET_ITEM_SUCCEEDED
GET_ITEM => GET_ITEM_FAILED or GET_ITEM_SUCCEEDED
GET_ALL_KEYS => GET_ALL_KEYS_FAILED or GET_ALL_KEYS_SUCCEEDED
REMOVE_ITEM => REMOVE_ITEM_FAILED or REMOVE_ITEM_SUCCEEDED

All failed actions include a reason property.
All succeeded actions include any relavant information.

Here's code from the example reducer in this package as an example of how to use these triggered events to update state.
```javascript
const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ITEM_SUCCEEDED: {
      const key = action.key
      const value = action.value
      const modifiedState = {...state}
      if (value !== null) {
        modifiedState[key] = value
      }
      return modifiedState
    }
    case types.SET_ITEM: {
      const key = action.key
      const value = action.value
      const modifiedState = {...state}
      modifiedState[key] = value
      return modifiedState
    }
    default:
      return state
  }
}
```
## Sold!  How do I install and configure it?
### Installation

```
npm install react-native-redux-storage-middleware
```
### Integration
Import the middleware and add it to your list of middleware to do something like this:

```javascript
import { applyMiddleware, createStore } from 'redux'
// other imports, for example for other middlewares like logActions and service middleware
import { middleware as storageMiddleware } from 'react-native-redux-storage-middleware'

const middleware = [
  logActions,
  services,
  storageMiddleware,
]

const store = createStore(storageReducer, applyMiddleware(...middleware))

```


