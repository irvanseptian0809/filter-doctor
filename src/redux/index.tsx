import 'rxjs'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootEpics from './root/epic'
import rootReducers from './root/reducer'

let store: any

export default function initStore(initialState: any) {
  const epicMiddleware = createEpicMiddleware()
  const logger = createLogger({ collapsed: true })

  const middlewares = process.env.NODE_ENV !== 'production'
    ? [thunkMiddleware, epicMiddleware, logger]
    : [thunkMiddleware, epicMiddleware]

  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middlewares),
  )

  epicMiddleware.run(rootEpics)

  return store
}

export function getStore() {
  return store
}
