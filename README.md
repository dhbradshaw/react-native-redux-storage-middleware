# react-native-redux-storage-middleware

https://github.com/dhbradshaw/react-native-redux-storage-middleware

## What is it?
react-native-redux-storage-middleware encodes **a simple pattern for connecting local storage to the redux global state.**

This package encodes that simple pattern for React Native apps.  A sister package will encode the same pattern for ReactJS.

## How do I use it?
### Usage examples:
Interactions with storage are triggered through dispatched actions.
All actions are available in the actions object.  To get that object for a given module, do something like
```javascript
import { actions as storageActions } from 'react-native-redux-storage-middleware'
```

#### setItem, getItem, getAllKeys, removeItem
```javascript
store.dispatch(storageActions.setItem(key, value))} />
```
#### getItem
```javascript
store.dispatch(storageActions.getItem(key))} />
```
#### getAllKeys
```javascript
store.dispatch(storageActions.getAllKeys())} />
```
#### removeItem
```javascript
store.dispatch(storageActions.removeItem(key))} />
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


