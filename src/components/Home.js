import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                id='ModelS'
                title='Model S'
                description='Order Online for Touchless Delivery'
                bgImage='model-s.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                id='ModelY'
                title='Model Y'
                description='Order Online for Touchless Delivery'
                bgImage='model-y.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                id='Model3'
                title='Model 3'
                description='Order Online for Touchless Delivery'
                bgImage='model-3.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                id='ModelX'
                title='Model X'
                description='Order Online for Touchless Delivery'
                bgImage='model-x.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                bgImage='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                bgImage='solar-roof.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='That&#39;s it'
                description='So cool, right? &#128515;'
                bgImage='accessories.jpg'
                leftBtnText='Shop now'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`