import React from "react";
import styled from "styled-components";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  flexDirection?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  "border-top"?: React.CSSProperties["borderTop"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  gap?: React.CSSProperties["gap"];
  flex?: React.CSSProperties["flex"];
  alignContent?: React.CSSProperties["alignContent"];
  justifyItems?: React.CSSProperties["justifyItems"];

  padding?: string;
  margin?: string;

  pt?: boolean | string;
  pr?: boolean | string;
  pb?: boolean | string;
  pl?: boolean | string;
  mt?: boolean | string;
  mr?: boolean | string;
  mb?: boolean | string;
  ml?: boolean | string;
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  border-top: ${({ "border-top": borderTop }) => borderTop || "none"};
  align-items: ${({ alignItems = "stretch" }) => alignItems};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  gap: ${({ gap = "0" }) => gap};
  flex: ${({ flex = "initial" }) => flex};
  align-content: ${({ alignContent = "stretch" }) => alignContent};
  justify-items: ${({ justifyItems = "start" }) => justifyItems};

  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};

  ${({ padding, pt }) =>
    !padding && pt && `padding-top: ${typeof pt === "string" ? pt : "1rem"};`}
  ${({ padding, pr }) =>
    !padding && pr && `padding-right: ${typeof pr === "string" ? pr : "1rem"};`}
  ${({ padding, pb }) =>
    !padding &&
    pb &&
    `padding-bottom: ${typeof pb === "string" ? pb : "1rem"};`}
  ${({ padding, pl }) =>
    !padding && pl && `padding-left: ${typeof pl === "string" ? pl : "1rem"};`}

  ${({ margin, mt }) =>
    !margin && mt && `margin-top: ${typeof mt === "string" ? mt : "1rem"};`}
  ${({ margin, mr }) =>
    !margin && mr && `margin-right: ${typeof mr === "string" ? mr : "1rem"};`}
  ${({ margin, mb }) =>
    !margin && mb && `margin-bottom: ${typeof mb === "string" ? mb : "1rem"};`}
  ${({ margin, ml }) =>
    !margin && ml && `margin-left: ${typeof ml === "string" ? ml : "1rem"};`}
`;

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => (
  <FlexContainer {...rest}>{children}</FlexContainer>
);

export default Flex;
