import styled from 'styled-components'

export const ButtonStyles = styled.button`
    border: none;
    border-radius: 5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 2rem;

    &:hover {
        opacity: 0.9;
        transform: scale(1.2);
    }

    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.text};
`
