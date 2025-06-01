import React from "react";
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import UserBlock from "./UserBlock";
import {Link, useLocation, NavLink} from "react-router-dom";



const Sidebar = ({ user }) => {

    const location = useLocation();

    return (
        <Box
            sx={{
                width: {xs: 64, sm: 180, md: 220},
                minWidth: {xs: 64, sm: 180, md: 220},
                bgcolor: "#20222B",
                boxShadow: "2px 0 16px 0 rgba(0,0,0,0.25)",
                py: 3,
                px: {xs: 0, sm: 2},
                height: {xs: "20%", sm: "30%", md: "80%"},
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                mr: {xs: 1, sm: 2, md: 4},
                transition: "width 0.2s",
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: "#fff",
                    mb: 4,
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: {xs: 0, sm: 18},
                    height: {xs: 0, sm: "auto"},
                    overflow: "hidden",
                    transition: "font-size 0.2s",
                }}
            >
                DeFi App
            </Typography>
            <List>
                <ListItem
                  component={NavLink}
                  to="/"
                  end
                  sx={{
                      mb: 2,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 18,
                      borderRadius: 2,
                      '&.active, &:hover': {
                          bgcolor: "#23262F",
                          color: "#00FFF0",
                      },
                      px: {xs: 1, sm: 2}
                  }}
                >
                    <ListItemIcon sx={{color: "#00FFF0", minWidth: 0, justifyContent: "center", px: {xs: 0, sm: 2}}}>
                        <DashboardOutlinedIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Dashboard"
                        sx={{
                            display: {xs: "none", sm: "block"}
                        }}
                    />
                </ListItem>
                <ListItem
                    component={NavLink}
                    to="/dex-charts"
                    sx={{
                        mb: 2,
                        color: "#fff",
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: 18,
                        '&.active, &:hover': {
                            bgcolor: "#23262F",
                            color: "#00FFF0",
                        },
                        px: {xs: 1, sm: 2}
                    }}

                >
                    <ListItemIcon sx={{color: "#fff", minWidth: 0, justifyContent: "center", px: {xs: 0, sm: 2}}}>
                        <QueryStatsOutlinedIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Dex Protocol detailed charts"
                        sx={{
                            display: {xs: "none", sm: "block"}
                        }}
                    />
                </ListItem>
                <ListItem
                    component={NavLink}
                    to="/getAddressTxs"

                    sx={{
                    color: "#fff",
                    borderRadius: 2,
                    '&.active ,&:hover': {
                        bgcolor: "#23262F",
                        color: "#00FFF0"},
                    px: {xs: 1, sm: 2}
                }}
                >
                    <ListItemIcon sx={{color: "#fff", minWidth: 0, justifyContent: "center", px: {xs: 0, sm: 2}}}>
                        <BubbleChartOutlinedIcon fontSize="medium"/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Get Addresss txs"
                        sx={{
                            display: {xs: "none", sm: "block"}
                        }}
                    />
                </ListItem>
            </List>
            {/*<Box sx={{ flexGrow: 0.5 }} />*/}
            <Box sx={{px: {xs: 0, sm: 1}}}>
                <UserBlock user={user}/>
            </Box>
        </Box>
    );
}
export default Sidebar;