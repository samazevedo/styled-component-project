import { HeaderStyles } from './Header.styled'
import { Container } from '../Container/Container.styled'
import { Flex } from '../Flex/Flex.styled'
import { Nav } from '../Nav/Nav'
import { ButtonStyles } from '../Button/Button.styled'

export default function Header() {
    return (
        <HeaderStyles>
            <Container>
                <Nav />
            </Container>
            <Flex>
                <div>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>
                        Engage and connect with your community on any platform.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias, natus. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Commodi, impedit? Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit. Repellendus,
                        quod!
                    </p>
                    <ButtonStyles>Get Started</ButtonStyles>
                </div>
            </Flex>
        </HeaderStyles>
    )
}
