import styled from "styled-components";

export default styled.h1<{ $secondary?: boolean}>`
    text-align: center;
    margin: 0;
    font-family: ${props => props.theme.font};
    font-weight: ${props => props.$secondary ? '400' : '500'};
    font-size: ${props => props.$secondary ? '1rem' : '1.5rem'};
    color: ${props => props.$secondary ? props.theme.typography.color.secondary : props.theme.typography.color.primary};
`