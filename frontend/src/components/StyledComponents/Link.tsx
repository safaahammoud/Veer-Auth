import styled, { css } from "styled-components";

const activeLink = css`
    color: var(--primary);
`

export default styled.a<{ $primary?: boolean }>`
    ${activeLink}

    cursor: pointer;
    font-size: .8rem;
    text-decoration: underline;
    font-family: ${props => props.theme.font};
    font-weight: ${props => props.$primary ? '700' : '400'};
    color: ${props => props.$primary ? props.theme.primary : props.color};

    &:hover {
        color: var(--primaryDarker);
    }
`