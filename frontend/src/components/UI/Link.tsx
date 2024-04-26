import styled from "styled-components";

export default styled.a<{ $primary?: boolean }>`
    cursor: pointer;
    font-size: .8rem;
    text-decoration: underline;
    font-family: ${props => props.theme.font};
    font-weight: ${props => props.$primary ? '700' : '400'};
    color: ${props => props.$primary ? props.theme.primary : props.color};

    &:hover {
        color: ${props => props.theme.primaryDarker};
    }
`