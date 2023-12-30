import { Box, Grid, Typography } from "@mui/material"
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Box component="div" sx={{
        bgcolor: 'text.secondary',
        borderRadius: 1,
        p: 2,
        minWidth: 300
      }}>
        <Grid container>
          <Grid item sx={4}>
            <Box component="img" alt="SMUCT logo" src={ logo } sx={{
                height: 125,
                display: 'inline'
            }}>
            </Box>
          </Grid>
          <Grid item sx={8}>
            <Box component="div" sx={{ display: 'inline' }}>
              <Typography variant="h4" sx={{
                pl: 2,
                color: 'background.paper',
              }}>
              Shanto-Mariam University of Creative Technology
              </Typography>
            </Box>
            <Box component="div">
              <Typography variant="h5" sx={{
                pl: 2,
                fontStyle: 'oblique',
                color: 'background.paper',
              }}>
              Department of Computer Science and Engineering
              </Typography>
              <Typography variant="h5" sx={{
                pl: 2,
                fontStyle: 'oblique',
                color: 'background.paper',
              }}>
              Department of Computer Science and Information Technology
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header
