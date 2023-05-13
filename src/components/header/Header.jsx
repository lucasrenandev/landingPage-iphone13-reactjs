import { useState } from "react";
import { Header, Logo, Image, NavBar, 
NavList, List, NavLink, MenuIcon } from "./styled";
import logo from "../../assets/logo.png"
import { BiMenu } from "react-icons/bi"

export default function header() {
    const [menuIcon] = useState(<BiMenu/>)

    return(
        <Header>
            <Logo href="/">
                <Image src={logo} alt="Logo"/>
            </Logo>

            <NavBar>
                <NavList>
                    <List>
                        <NavLink href="#">Mac</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Ipad</NavLink>
                    </List>
                    <List>
                        <NavLink href="#" className="checked">Iphone</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Watchs</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">AirPods</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Só na Apple</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Suporte</NavLink>
                    </List>
                </NavList>
            </NavBar>

            <MenuIcon>{menuIcon}</MenuIcon>
        </Header>
    )
}