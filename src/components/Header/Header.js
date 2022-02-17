import { HeaderStyles } from './Header.styled'
import { Container } from '../Container/Container.styled'
import { Button } from '../Button/Button.styled'
import { Nav, Logo } from '../Nav/Nav.styled'

export default function Header() {
    return (
        <HeaderStyles>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='logo' />
                    <Button>Try it Free</Button>
                </Nav>
            </Container>
        </HeaderStyles>
    )
}
