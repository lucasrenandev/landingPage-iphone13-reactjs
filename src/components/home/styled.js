import styled from "styled-components";

export const Home = styled.section`
    width: 100%;
    height: 87vh;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    padding: 80px 0 80px 6%;

    @media (max-width: 1200px) {
        padding: 80px 2%;
        grid-template-columns: 1fr;
        height: 100%;
        gap: 4rem;
    }
`
export const HomeText = styled.main`
    @media (max-width: 1200px) {
        text-align: center;
    }
`
export const Banner = styled.img`
    width: 250px;
    height: auto;

    @media (max-width: 600px) {
        width: 200px;
    }

    @media (max-width: 334px) {
        width: 150px;
    }
`
export const H1 = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;

    @media (max-width: 334px) {
        font-size: 2.7rem;
    }
`
export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    max-width: 580px;

    @media (max-width: 1200px) {
        max-width: 100%;
    }
`
export const H3 = styled.h3`
    color: #9d9e9f;
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
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 1200px) {
        justify-content: center;
    }
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

    @media (max-width: 1200px) {
        z-index: 0;
    }
`
export const Image = styled.img`
    width: 350px;
    height: auto;
    transform: rotate(-8deg);

    @media (max-width: 600px) {
        width: 250px;
    }

    @media (max-width: 334px) {
        width: 200px;
    }
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

    @media (max-width: 1200px) {
        display: none;
    }
`