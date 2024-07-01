import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from "@mui/material"

import { useStore } from '../libs/store'
import { Formik, Form as FormikForm, Field, useFormikContext } from "formik"
import * as yup from 'yup'

import FormikTextField from "./FormikTextField"
import { grey } from "@mui/material/colors"


const Form = ({
  handleFetchAll,
  selected,
  setCurrentSelected
}) => {
  const { setValues, resetForm } = useFormikContext()

  useEffect(() => {
    setValues(selected)
  }, [setValues, selected])

  const handleClear = () => {
    setCurrentSelected(null)
    resetForm()
  }

  return (
    <Box sx={{
      width: 350,
      margin: 5,
      padding: 4,
      display: 'flex',
      flexDirection: 'column',
      background: grey[300],
      borderRadius: 1,
      gap: 2,
    }}>
      <Field
        fullWidth
        name="name"
        label="Name"
        component={FormikTextField}
      />
      <Field
        fullWidth
        name="lastName"
        label="Last Name"
        component={FormikTextField}
      />
      <Field
        fullWidth
        name="studentId"
        label="Student Id"
        component={FormikTextField}
      />
      <Field
        fullWidth
        name="email"
        label="Email"
        component={FormikTextField}
      />
      <Box display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
        <Button
          sx={{
            width:150,
          }}
          size="small"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
        <Button
          sx={{
            width:150,
          }}
          onClick={handleClear}
          size="small"
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
        <Button
          sx={{
            width:150,
          }}
          onClick={handleFetchAll}
          size="small"
          variant="contained"
          color="primary"
        >
          Fetch All
        </Button>
      </Box>
    </Box>
  )
}

Form.propTypes = {
  handleFetchAll: PropTypes.func.isRequired,
  selected: PropTypes.shape({}),
  setCurrentSelected: PropTypes.func
}

const Wrapper = () => {
  const { selected, setCurrentSelected, doStudentSave, doFetchStudents } = useStore(state => state)
  const initialValues = {
    name: selected?.name ?? '',
    lastName: selected?.lastName ?? '',
    studentId: selected?.studentId ?? '',
    email: selected?.email ?? ''
  }

  const validationSchema = yup.object({
    name: yup.string().required('First name is requiered.'),
    lastName: yup.string().required('Last name is requiered.'),
    studentId: yup.number(),
    email: yup.string().email().required('Email is requiered.')
  })

  console.log('<<< selected', selected)

  const handleSubmit = async payload => {
    await doStudentSave(payload)
  }

  const handleFetchAll = async () => {
    await doFetchStudents()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm>
        <Form
          handleFetchAll={handleFetchAll}
          selected={selected}
          setCurrentSelected={setCurrentSelected}
        />
      </FormikForm>
    </Formik>
  )
}

export default Wrapper