import styled from "styled-components";

export const Header = styled.header`
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 6%;
`
export const Logo = styled.a`

`
export const Image = styled.img`
    width: 45px;
    height: auto;
`
export const NavBar = styled.nav`

`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
`
export const List = styled.li`
    &:not(:last-child) {
        margin-right: 3rem;
    }
`
export const NavLink = styled.a`
    color: #888;
    font-size: 1rem;
    font-weight: 600;
    padding-bottom: 4px;
    transition: all 0.5s ease;

    &.checked {
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    &:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
    }
`
export const MenuIcon = styled.i`
    color: #fff;
    font-size: 36px;
    display: none;
    cursor: pointer;
`