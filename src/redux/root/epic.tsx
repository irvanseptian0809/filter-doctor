import { combineEpics } from 'redux-observable'

import * as doctorsEpics from '../epics/doctors'

function rootEpics(action$: any, store: any) {
  const dependencies = {}

  const allEpics = [
    ...Object.values(doctorsEpics),
  ]

  return combineEpics(...allEpics)(action$, store, dependencies)
}

export default rootEpics
