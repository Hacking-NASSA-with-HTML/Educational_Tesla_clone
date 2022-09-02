import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ id, title, description, leftBtnText, rightBtnText, bgImage }) {
    return (
        <Wrap backgroundImg={bgImage} id={id}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            { rightBtnText &&
                                <RightButton>
                                    {rightBtnText}
                                </RightButton>
                            }
                    </ButtonGroup>
                </Fade>
                <DownArrow src='./images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    /*background-image: url('/images/model-s.jpg');*/
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${crap => `url('./images/${crap.backgroundImg}')` }
`

const ItemText = styled.div`
    padding-top: 16vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 10px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``