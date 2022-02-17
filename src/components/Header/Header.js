import { HeaderStyles } from './Header.styled'
import { Container } from '../Container/Container.styled'

import { Nav } from '../Nav/Nav'
export default function Header() {
    return (
        <HeaderStyles>
            <Container>
                <Nav />
            </Container>
        </HeaderStyles>
    )
}
