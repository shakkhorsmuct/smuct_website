import { Box, Typography } from "@mui/material"
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Box component="div" sx={
      {
        bgcolor: 'info.main',
        borderRadius: 1,
        p: 2,
        minWidth: 300
      }
    }>
      <Box component="img" alt="SMUCT logo" src={ logo } sx={
        {
          height: 100
        }
      }>

      </Box>
      
      <Typography variant="h4" sx={
        {
          color: 'background.paper'
        }
      }>
        Shanto-Mariam University of Creative Technology
      </Typography>
      <Typography variant="h5" sx={
        {
          fontStyle: 'oblique',
          color: 'background.paper'
        }
      }>
        Department of Computer Science and Engineering
      </Typography>
      <Typography variant="h5" sx={
        {
          fontStyle: 'oblique',
          color: 'background.paper'
        }
      }>
        Department of Computer Science and Information Technology
      </Typography>
    </Box>
  )
}

export default Header
