import { HeaderStyles } from './Header.styled'
import { Container } from '../Container/Container.styled'
import { Button } from '../Button/Button.styled'
import { Nav } from '../Nav/Nav'
export default function Header() {
    return (
        <HeaderStyles>
            <Container>
                <Nav>
                    <Button>Try it Free</Button>
                </Nav>
            </Container>
        </HeaderStyles>
    )
}
