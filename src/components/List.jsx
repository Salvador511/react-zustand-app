import { Box, List as MuiList, ListItemButton, Typography } from '@mui/material'
import { grey, blue } from '@mui/material/colors'
import { useStore } from '../libs/store'

const List = () => {
  const { students, setCurrentSelected } = useStore(state => state)

  return (
    <Box sx={{
      width: '50%',
      padding: 4,
      maxWidth: 750,
      bgcolor: grey[800],
      position: 'relative',
      overflow: 'auto',
      '& ul': { padding: 0 },
    }}>
      <MuiList>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}>
          {Object.values(students).map(student => {
            const setSelected = () => {
              setCurrentSelected(student)
            }
            return (
              <Box
                key={student._id}
                sx={{
                  display: 'flex',
                  borderRadius: 1,
                  bgcolor: grey[300],
                }}
              >
                <ListItemButton
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                  onClick={setSelected}
                >
                  <Box display='flex' gap={2}>
                    <Typography color={grey[900]}>
                      {`${student.name} ${student.lastName}`}
                    </Typography>
                    <Typography color={blue[900]}>
                      {student.email}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color={grey[700]} gutterBottom>
                    {student._id}
                  </Typography>
                </ListItemButton>
              </Box>
          )})}
        </Box>
      </MuiList>
    </Box>
  )

}

export default List