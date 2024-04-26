import styled from "styled-components";

export default styled.input<{ $inputColor?: string; }>`
  width: 28rem;
  padding: 0.8em 0 0.8rem 2.2em;
  border-radius: .6rem;
  background-color: '#FFFFFF';
  border: 1px solid ${props => props.theme.typography.color.tertiary};
  color: ${props => props.$inputColor || props.theme.typography.color.primary};
`;
