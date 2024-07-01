import PropTypes from 'prop-types'

import { useFormikContext } from 'formik'
import { Box, TextField } from '@mui/material'

const FormikTextField = ({ field, ...props }) => {
  const name = field?.name
  const { errors, setFieldValue } = useFormikContext()

  return (
    <Box>
      <TextField
        {...props}
        field={field}
        error={errors[name]}
        helperText={errors[name]}
        value={field.value}
        onChange={({ target }) => setFieldValue(name, target.value)}
      />
    </Box>
  )
}

FormikTextField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired
}

export default FormikTextField