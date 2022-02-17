import styled from 'styled-components'

export const ButtonStyles = styled.button`
    border: none;
    border-radius: 5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 2rem;

    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }

    background-color: ${({ theme }) => theme.colors.button} ||
        ${({ theme }) => theme.colors.button2};
    color: ${({ theme }) => theme.colors.text};
`
