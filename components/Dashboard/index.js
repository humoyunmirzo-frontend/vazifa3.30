import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import { Button } from '@mui/material';
import { ThemeContext } from '@/contexts/themeContext';
const drawerWidth = 290;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const links = [
    {
        image: require("../../assets/icons/grid1.png"),
        title: "Dashboard"
    },
    {
        image: require("../../assets/icons/command 1.png"),
        title: "Team"
    },
    {
        image: require("../../assets/icons/users.png"),
        title: "Employees"
    },
    {
        image: require("../../assets/icons/briefcase 1.png"),
        title: "Projects"
    },
]
const settingLinks = [
    {
        image: require("../../assets/icons/Vector1.png"),
        title: "Meetings"
    },
    {
        image: require("../../assets/icons/Vector2.png"),
        title: "Tasks"
    },
    {
        image: require("../../assets/icons/settings2.png"),
        title: "Settings"
    },
]
export default function Dashboard({ children }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const { mode, setMode } = React.useContext(ThemeContext)
    const changeTheme = () => mode === "dark" ? setMode("light") : setMode("dark")
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ boxShadow: "none", py: 2 }} color='inherit' position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="d-flex align-items-center w-100 justify-content-between">
                        <div className="d-flex flex-column gap-2">
                            <Typography sx={{
                                fontSize: "26px",
                                fontWeight: "700",
                                lineHeight: "40px",
                                letterSpacing: "0em",
                                textAlign: "left",
                            }}>
                                Good Morning Anima
                            </Typography>
                            <div className="headerInfo">Hope you have a good day</div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                            <Image src={require("../../assets/images/Rectangle 774 (1).png")} className='rounded-circle' alt="" />
                            <IconButton>
                                <ExpandMoreIcon />
                            </IconButton>

                            <button className="btn-light btn" onClick={() => changeTheme()}>{mode === "dark" ? "Light Mode" : "Dark mode"}</button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    px: 5,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ justifyContent: "space-between", alignItems: "center", mb: 5, }}>
                    <div className="d-flex align-items-center gap-3 ps-4 pt-3">
                        <Image
                            src={require("../../assets/icons/setting.png")}
                            alt="Logo"
                            className=''
                        />
                        <div className="siteName">Teamify</div>
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {
                        links.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <div className="d-flex align-items-center justify-content-between m-0">
                                            <Image
                                                src={item.image}
                                                alt="icon"
                                            />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText sx={{ fontWeight: "500", color: index === 0 ? "#6956E5" : "#878787", fontSize: "18px" }} primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        settingLinks.map((item, index) => (

                            <ListItem key={index}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Image
                                                src={item.image}
                                                alt="Logo"
                                            />
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText sx={{ fontWeight: "500", color: "#878787", fontSize: "18px" }} primary={item.title} />
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>
                <Box sx={{ display: "flex", flexDirection: "column", mt: 5, alignItems: "center", gap: "32px" }}>
                    <Image src={require("../../assets/images/Group 1000000806.png")} alt="" />
                    <button className="btn-light btn text-capitalize mb-3" style={{ color: "#6956E5" }}>Share Your Thoughts</button>
                </Box>
            </Drawer>
            <Main sx={{ bgcolor: mode === "dark" ? "#272727" : "#FFF" }} open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
