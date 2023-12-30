import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
        <BottomNavigation sx={{
            width: 500
        }}>
            <BottomNavigationAction label="Copyright" value="copyright" icon={<CopyrightIcon />}>
            </BottomNavigationAction>
        </BottomNavigation>
    </>
  )
}

export default Footer