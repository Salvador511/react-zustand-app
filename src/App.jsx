import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'

import Form from './components/Form'
import List from './components/List'

const App = () => {

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 1200,
        height: 800,
        borderRadius: 1,
        background: grey[700],
      }}>
        <Form />
        <List />
      </Box>
    </Box>
  )
}

export default App
