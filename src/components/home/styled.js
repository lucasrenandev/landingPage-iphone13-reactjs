import styled from "styled-components";

export const Home = styled.section`
    width: 100%;
    height: 87vh;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    padding: 80px 0 80px 6%;
`
export const HomeText = styled.main`

`
export const Banner = styled.img`
    width: 250px;
    height: auto;
`
export const H1 = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
`
export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    max-width: 580px;
`
export const H3 = styled.h3`
    color: #999;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 0;
`
export const Button = styled.a`
    background-color: #0071e3;
    padding: 13px 35px;
    border: none;
    border-radius: 20px;
    font-size: 19px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
    transition: opacity 0.5s ease;

    &:hover {
        opacity: 0.85;
    }
`
export const H4 = styled.h4`
    color: #444;
    font-size: 19px;
    font-weight: 700;
`
export const Colors = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Color = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    &#green {
        background-color: #384937;
    }
    &#pink {
        background-color: #f8ddd6;
    }
    &#blue {
        background-color: #225f7e;
    }
    &#black {
        background-color: #192028;
    }
    &#white {
        background-color: #f7f2ee;
    }
    &#red {
        background-color: #ae0617;
    }
`
export const HomeImage = styled.figure`
    z-index: 1;
    text-align: center;
`
export const Image = styled.img`
    width: 350px;
    max-width: 100%;
    height: auto;
    transform: rotate(-8deg);
`
export const Circle = styled.div`
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #0b839e;
    clip-path: circle(750px at right 950px);
    transition: background-color 0.3s ease;
`