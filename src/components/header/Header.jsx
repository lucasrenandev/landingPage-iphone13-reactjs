import { useEffect, useRef, useState } from "react";
import { Header, Logo, Image, NavBar, 
NavList, List, NavLink, MenuIcon } from "./styled";
import logo from "../../assets/logo.png"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }, [])

    function menuShow() {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    return(
        <Header>
            <Logo href="/">
                <Image src={logo} alt="Logo"/>
            </Logo>

            <NavBar ref={navRef}>
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

            <MenuIcon onClick={menuShow}>{menuIcon}</MenuIcon>
        </Header>
    )
}