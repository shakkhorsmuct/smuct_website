import { BottomNavigation, Box, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
        <BottomNavigation sx={{
          position: "fixed",
          pl: 1,
          bottom: 0,
        }}>
          <Box sx={{ display: "inline" }}><CopyrightIcon /></Box>
          <Typography sx={{ display: "inline" }}>Shakkhor Das 2024</Typography>
        </BottomNavigation>
    </>
  )
}

export default Footer