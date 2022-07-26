import React from "react";
import { Link } from "react-router-dom";

import logo from '../../resources/images/robweb-logo.png';
import classes from "./Sidebar.module.scss";
import '../../resources/css/Reusable.module.scss';

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
    return (
        <div>
            <ProSidebar>
                {/* <SidebarHeader>
                    <img src={logo} alt="logo" className={classes.logo} />
                </SidebarHeader> */}

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem>
                            Dashboard
                            <Link to="/dashboard" />
                        </MenuItem>

                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                {/* <SidebarFooter>
                   FOOTER
                </SidebarFooter> */}
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
