import { Home, HomeText, Banner, H1, Paragraph, H3, 
Button, H4, Colors, Color, HomeImage, Image, Circle } from "./styled";
import banner from "../../assets/iphone13.png"
import iphoneBlue from "../../assets/blue.png"
import green from "../../assets/green.png"
import pink from "../../assets/pink.png"
import blue from "../../assets/blue.png"
import black from "../../assets/black.png"
import white from "../../assets/white.png"
import red from "../../assets/red.png"
import { useEffect, useRef } from "react";

export default function home() {
    const imageRef = useRef(null)
    const circleRef = useRef(null)

    useEffect(() => {
        const colors = document.querySelector(".colors")

        colors.addEventListener("click", (event) => {
            const items = event.target.id
            toggleItems[items]()
        })
    }, [])

    const toggleItems = {
        "green": () => {
            imageRef.current.src = green
            circleRef.current.style.backgroundColor = "#445c42"
        },
        "pink": () => {
            imageRef.current.src = pink
            circleRef.current.style.backgroundColor = "#ffc9cf"
        },
        "blue": () => {
            imageRef.current.src = blue
            circleRef.current.style.backgroundColor = "#0B839E"
        },
        "black": () => {
            imageRef.current.src = black
            circleRef.current.style.backgroundColor = "#092732"
        },
        "white": () => {
            imageRef.current.src = white
            circleRef.current.style.backgroundColor = "#e0dbd7"
        },
        "red": () => {
            imageRef.current.src = red
            circleRef.current.style.backgroundColor = "#cf4f68"
        }
    }

    return(
        <Home>
            <Circle ref={circleRef} id="circle"></Circle>

            <HomeText>
                <Banner src={banner} alt="Banner"/>
                <H1>Seu novo <br /> superpoder</H1>
                <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, sed assumenda qui eveniet cumque, illum adipisci inventore veniam eius illo, dignissimos est beatae corrupti itaque. Facere quos accusamus nesciunt ratione?</Paragraph>
                <H3>A partir de R$6.599</H3>
                <Button href="#">Comprar</Button>
                <H4>Escolha sua cor favorita:</H4>

                <Colors className="colors">
                    <Color id="green"></Color>
                    <Color id="pink"></Color>
                    <Color id="blue"></Color>
                    <Color id="black"></Color>
                    <Color id="white"></Color>
                    <Color id="red"></Color>
                </Colors>
            </HomeText>

            <HomeImage>
                <Image ref={imageRef} src={iphoneBlue} alt="Iphone azul"/>
            </HomeImage>
        </Home>
    )
}