import styled from "styled-components";

export default styled.label<{ $secondary?: boolean, $fontSize?: string, $color?: string}>`
    white-space: pre-wrap;
    font-family: ${props => props.theme.font};
    font-weight: ${props => props.$secondary ? '400' : '500'};
    font-size: ${props => props.$fontSize || props.theme.typography.fontSize.secondary};
    color: ${props => props.$secondary ? props.theme.typography.color.secondary : props.$color};
`