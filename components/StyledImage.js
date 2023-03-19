import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

export default StyledImage;
