import React from 'react'
import { Box, Container } from '@mui/material'

import { interfaceDoctors } from '../../redux/ducks/doctors'

interface interfaceDoctorsView {
  doctors: interfaceDoctors[]
}

const DoctorsView = ({
  doctors,
}: interfaceDoctorsView) => {
  return (
    <Container maxWidth="md">
      <Box>
        Here's the doctor list.
        {/* Next setup UI doctor list and connecting to the redux */}
      </Box>
    </Container>
  )
}

export default DoctorsView