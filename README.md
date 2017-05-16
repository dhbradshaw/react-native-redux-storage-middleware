# react-native-redux-storage-middleware

https://github.com/dhbradshaw/react-native-redux-storage-middleware

## Why: Have and follow a simple pattern for connecting local storage to the redux global state.

This package encodes that simple pattern for React Native apps.  A sister package will encode the same pattern for ReactJS.

## How do I use it?

### Installation

```
npm install react-native-redux-storage-middleware
```
### Integration
Import the middleware and add it to your list of middleware to do something like this:

```
import { applyMiddleware, createStore } from 'redux'
... other imports, for example for other middlewares like logActions and service middleware
import { middleware as storageMiddleware } from 'react-native-redux-storage-middleware'

const middleware = [
  logActions,
  services,
  storageMiddleware,
]

const store = createStore(storageReducer, applyMiddleware(...middleware))

```

### Usage examples:
Interactions with storage are triggered through dispatched actions.
All actions are available in the actions object.  To get that object for a given module, do something like
```
import { actions as storageActions } from 'react-native-redux-storage-middleware'
```

#### setItem, getItem, getAllKeys, removeItem
```
<Button title='set' onPress={() =>   store.dispatch(storageActions.setItem('token', 'aweoij'))} />
<Button title='get' onPress={() => store.dispatch(storageActions.getItem('token'))} />
<Button title='all' onPress={() =>  store.dispatch(storageActions.getAllKeys())} />
<Button title='remove' onPress={() => store.dispatch(storageActions.removeItem('token'))} />
```
