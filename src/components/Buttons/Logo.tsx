import React from "react"
import styled from "styled-components"

export interface LogoProps {
  marginright?: string
  marginleft?: string
  marginbottom?: string
  margintop?: string
}

export const Logo = styled.span<LogoProps>`
  margin-right: ${(props) => props.marginright || "10px"};
  margin-left: ${(props) => props.marginleft || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "10px"};
  margin-top: ${(props) => props.margintop || "10px"};
  color: #fff;
}`
