import React from 'react'
import { NavStyles, Logo } from './Nav.styled'
import { ButtonStyles } from '../Button/Button.styled'

export const Nav = ({ text }) => {
    return (
        <NavStyles>
            <Logo src='./images/logo.svg' alt='logo' />
            <ButtonStyles>Try it!</ButtonStyles>
        </NavStyles>
    )
}
