import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, catchError } from 'rxjs/operators'

import {
  DOCTORS_FETCH,
  doctorsFetchSuccess,
  doctorsFetchFailed,
} from '../ducks/doctors'

export function doctorsFetchEpic(action$: any, state$: any, { api }: any) {
  return action$.pipe(
    ofType(DOCTORS_FETCH),
    mergeMap(() =>
      ajax({
        method: 'GET',
        url: 'https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc',
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        mergeMap((res: any) => of(doctorsFetchSuccess(res.response))),
        catchError((error) =>  of(doctorsFetchFailed(error.response))),
      )
    ),
  )
}
