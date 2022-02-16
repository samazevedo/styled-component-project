import { Fragment } from 'react'
import { Container } from './components/Container/Container.styled'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import { theme } from './shared/theme'
function App() {
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Header />
                <Container>
                    <h1>Hello world</h1>
                </Container>
            </ThemeProvider>
        </Fragment>
    )
}

export default App
