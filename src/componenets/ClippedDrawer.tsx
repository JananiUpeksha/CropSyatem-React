import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Routes, Route } from 'react-router-dom'; // Use Routes to configure routing
import DashboardIcon from '@mui/icons-material/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import GroupIcon from '@mui/icons-material/Group';
import AgriculturalIcon from '@mui/icons-material/Agriculture';
import FieldIcon from '@mui/icons-material/Landscape';
import SettingsIcon from '@mui/icons-material/Settings';

// Page Components
import DashboardPage from '/home/janani/WebstormProjects/dash/src/pages/Dashboard.tsx';
import CropsPage from '/home/janani/WebstormProjects/dash/src/pages/Crops';
import StaffPage from '/home/janani/WebstormProjects/dash/src/pages/Staff.tsx';
import VehiclePage from '/home/janani/WebstormProjects/dash/src/pages/Vehicles';
import SettingsPage from '/home/janani/WebstormProjects/dash/src/pages/Equipments.tsx';

const drawerWidth = 240; // Sidebar width

export default function HoverableSidebar() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'lightgray', padding: '20px' }}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        color: 'white',
                        backgroundColor: '#3a3a3a', // Solid color background
                        boxShadow: 'none', // No shadow effect
                        borderRadius: '16px', // Rounded corners for all four corners
                        height: 'calc(100vh - 40px)', // Reduced height of the sidebar, 40px reduced from top and bottom
                        marginTop: '20px', // Reduced space from top
                        marginBottom: '20px', // Reduced space from bottom
                        marginLeft: '10px', // Reduced space from left
                        marginRight: '10px', // Reduced space from right
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    {/* Crop System Title */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            marginBottom: '20px',
                        }}
                    >
                        Green Shadow Crop System
                    </Typography>

                    <List>
                        {[
                            { text: 'Dashboard', icon: <DashboardIcon />, to: '/' },
                            { text: 'Crops', icon: <AgriculturalIcon />, to: '/crop' },
                            { text: 'Staff', icon: <GroupIcon />, to: '/staff' },
                            { text: 'Equipment', icon: <FieldIcon />, to: '/equipment' },
                            { text: 'Vehicles', icon: <CarRentalIcon />, to: '/vehicle' },
                            { text: 'Settings', icon: <SettingsIcon />, to: '/settings' },
                        ].map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ marginBottom: '12px' }}>
                                <ListItemButton component={Link} to={item.to}>
                                    <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: 'yellow' }}>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/crop" element={<CropsPage />} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/vehicle" element={<VehiclePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Box>
        </Box>
    );
}
