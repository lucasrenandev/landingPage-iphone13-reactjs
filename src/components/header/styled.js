import styled from "styled-components";

export const Header = styled.header`
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 6%;

    @media (max-width: 1200px) {
        padding: 18px 2%;
    }
`
export const Logo = styled.a`

`
export const Image = styled.img`
    width: 45px;
    height: auto;
`
export const NavBar = styled.nav`
    @media (max-width: 980px) {
        position: absolute;
        top: -700px;
        left: 0;
        right: 0;
        width: 100%;
        height: auto;
        background-color: #0B839E;
        z-index: 1000;
        transition: top 0.4s ease;

        &.active {
            top: 80px;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    
    @media (max-width: 980px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        gap: 2rem;
    }
`
export const List = styled.li`
    &:not(:last-child) {
        margin-right: 3rem;
    }

    @media (max-width: 980px) {
        &:not(:last-child) {
            margin: 10px 0 10px 0;
        }
    }
`
export const NavLink = styled.a`
    color: #888;
    font-size: 1rem;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: all 0.5s ease;

    &.checked {
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    &:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    @media (max-width: 980px) {
        display: block;
        color: #fff;
        font-size: 1.2rem;

        &.checked {
            color: #000;
            border-bottom: 1px solid #000;
        }

        &:hover {
            color: #000;
            border-bottom: 1px solid #000;
        }
    }
`
export const MenuIcon = styled.i`
    color: #fff;
    font-size: 36px;
    cursor: pointer;
    display: none;

    @media (max-width: 980px) {
        display: inline-flex;
        align-items: center;
        z-index: 1001;
    }
`