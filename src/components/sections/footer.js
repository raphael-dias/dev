import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper id="footer">
    Copyright © 2020 Raphael Dias. Design using Gatsby
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
  text-align: center;
`


export default Footer
