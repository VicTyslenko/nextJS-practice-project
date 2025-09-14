import styled from "styled-components";
import Link from "next/link";

type Props = {
  $active?: boolean;
};

export const StyledLink = styled(Link)<Props>`
  /* color: ${($active) => ($active ? "red" : "blue")}; */
  font-size: 12px;
`;
