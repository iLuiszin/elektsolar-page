import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/Logo.png'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { FaArrowRight } from "react-icons/fa6";

import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: '360 Solar',
            icon: <HomeIcon />,
        },
        {
            text: 'Cursos',
            icon: <InfoIcon />,
        },
        {
            text: 'Blog',
            icon: <CommentRoundedIcon />,
        },
        {
            text: 'Institucional',
            icon: <ShoppingCartRoundedIcon />,
        },
        {
            text: 'Área do Aluno',
            icon: <ShoppingCartRoundedIcon />,
        },
        {
            text: 'Seja um Afiliado',
            icon: <ShoppingCartRoundedIcon />,
        },
        {
            text: 'Contato',
            icon: <PhoneRoundedIcon />,
        }
    ]



    return (

        <nav >
            <div className="nav-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="navbar-links-container">
                <a href="/">360 Solar</a>
                <a href="/">Cursos</a>
                <a href="/">Blog</a>
                <a href="/">Institucional</a>
                <a href="/">Área do Aluno</a>
                <a href="/">Seja um Afiliado</a>
                <a href="/">Contato</a>
                <button className='primary-button' >
                    Saiba Mais
                    <FaArrowRight />
                </button>
            </div>





            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar