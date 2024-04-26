import styled from "styled-components";

export default styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    border-bottom: 0.06rem solid ${props => props.theme.typography.color.tertiary};
    height: 2.5rem;
    padding: .7rem;
`