import createReducer from '../../utils/createReducer'

export const DOCTORS_FETCH = 'DOCTORS_FETCH'
export const DOCTORS_FETCH_SUCCESS = 'DOCTORS_FETCH_SUCCESS'
export const DOCTORS_FETCH_FAILED = 'DOCTORS_FETCH_FAILED'

export interface interfacedoctors {
  doctor_id: string,
  name: string,
  slug: string,
  is_popular: boolean,
  about: string,
  overview: string,
  photo: {
    url: string,
  },
  sip: string,
  experiece: string,
  price: {
    raw: number,
    formatted: string,
  },
  specialization: {
    id: string,
    name: string,
  },
  hospital: {
    id: string,
    name: string,
    image : {
      url: string,
    }
  },
  about_preview: string,
}

export interface interfacePokemon {
  data: interfacedoctors[],
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const INITIAL_STATE: interfacePokemon = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
}

const reducer = createReducer(INITIAL_STATE, {
  [DOCTORS_FETCH]: (state: any) => ({
    ...state,
    isLoading: true,
  }),
  [DOCTORS_FETCH_SUCCESS]: (state: any, payload: interfacedoctors) => ({
    ...state,
    isLoading: false,
    isError: false,
    data: payload,
  }),
  [DOCTORS_FETCH_FAILED]: (state: any, payload: string) => ({
    ...state,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  })
})

export const doctorsFetch = () => ({
  type: DOCTORS_FETCH,
})
export const doctorsFetchSuccess = (payload: any) => ({
  type: DOCTORS_FETCH_SUCCESS,
  payload,
})
export const doctorsFetchFailed = (payload: string) => ({
  type: DOCTORS_FETCH_FAILED,
  payload,
})

export default reducer
