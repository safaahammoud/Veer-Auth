import styled from "styled-components";

export default styled.button<{ $primary?: boolean }>`
    border: none;
    height: 2.8rem;
    padding: .7rem;
    cursor: pointer;
    font-size: .8rem;
    border-radius: .7rem;
    color: ${props => props.theme.typography.color.primary};
    background-color: ${props => props.$primary ? props.theme.primary : props.color};
`