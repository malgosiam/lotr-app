import styled, { css } from "styled-components";

const StyledFigure = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 5% 30px 5%;
`;

export default StyledFigure;
