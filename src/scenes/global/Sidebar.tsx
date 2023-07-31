import React, { useState } from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarchartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimeLineOutlinedIcon from '@mui/icons-material/TimeLineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { tokens } from '../../theme/theme';


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>('Dashboard')

    return (
        <Box
        sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400]} !important`
            },
            '& .pro-icon-wrapper': {
                backgroundColor: 'transparent !important'
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px !important'
            },
            '& .pro-inner-item:hover': {
                color: '#868dfb !important'
            },
            // '& .pro-menu'
        }}>

        </Box>
    )
}

export default Sidebar;