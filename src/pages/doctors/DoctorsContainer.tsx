import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { doctorsFetch } from '../../redux/ducks/doctors'

import DoctorsView from './DoctorsView'

const DoctorsContainer = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.doctors)

  useEffect(() => {
    dispatch(doctorsFetch())
  }, [dispatch])

  const props = {
    doctors: state.data,
  }

  return <DoctorsView {...props} />
}

export default DoctorsContainer