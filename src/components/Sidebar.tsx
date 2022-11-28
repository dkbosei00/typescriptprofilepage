import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"
import {SidebarData} from "./SidebarData"
import { Navbar, MenuIconOpen, SidebarMenu, MenuIconClose, MenuItems, MenuItemLinks } from "../styles/my-theme";


const Sidebar:React.FC = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () =>{ 
        setClose(!close)   
    }
  return (
    <>
    <Navbar>
        <MenuIconOpen to='#' onClick={showSidebar}>
                <FaIcons.FaBars />
        </MenuIconOpen>
    </Navbar>

    <SidebarMenu close={close}>
        <MenuIconClose to="#">
            <FaIcons.FaTimes />
        </MenuIconClose>


        {SidebarData.map((item, index) => {
            return (
                <MenuItems key={index}>
                    <MenuItemLinks to={item.path}>
                        {item.icon}
                        <span style={{marginLeft: "16px"}}>{item.title}</span>
                    </MenuItemLinks>
                </MenuItems>
            )
        })}
    </SidebarMenu>


    </>);
}

export default Sidebar;
