import styled from "styled-components"
import {Link} from "react-router-dom"

// import {DefaultTheme} from "./styled"

// const my-theme: DefaultTheme = {
//     display: "flex",
//     justify-content: "start",
//     align-items: "center",
//     height: "3.5rem",
//     background-color: "#000080"
// }

export const Navbar = styled.div`
    display: flex
    justify-content: start
    align-items: center
    height: 3.5rem
    background-color: #000080
`

export const MenuIconOpen = styled(Link)`
    display: flex
    justify-content: start
    font-size: 1.5rem
    margin-left: 2rem
    color: #ffffff
`

export const MenuIconClose = styled(Link)`
    display: flex
    justify-content: end
    font-size: 1.5rem
    margin-top: 0.75rem
    margin-right: 1rem
    color: #ffffff
`

export const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px
    height: 100vh
    background-color: 000080
    position: fixed
    top: 0
    left: ${({ close }) => close ? "0" : "-100%"}
    transition: 0.6s
`

export const MenuItems = styled.li`
    list-style: none
    display: flex
    align-items: center
    justify-content: start
    width: 100%
    height: 90px
    padding: 1rem 0 1.25rem
`

export const MenuItemLinks = styled(Link)`
    display: flex
    align-items: center
    padding: 0 2rem
    font-size: 20px
    text-decoration: none
    color: #ffffff

    &: hover {
        background-color: #ffffff
        color: #000080
        width: 100%
        height: 45px
        text-align: center
        border-radius: 5px
        margin: 0 2rem
    }
`

export const PageText = styled.div`
display: flex
align-items: center
justify-content: center
font-size: 50px
height: 70vh
` 