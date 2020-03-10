import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = () => {
 
//   const data = useStaticQuery(graphql`
//   query {
//     file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `)


  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "skew.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            {/* <Subtitle>Desenvolvedor Web</Subtitle> */}
            <h1>
              Web Developer
              </h1>
            <h2>
              I'm building the next generation of personal Web Apps.
            </h2>
            {/* <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput placeholder="Your email" />
              <HeaderButton>Early access</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              Already have a beta account?{" "}
              <FormSubtitleLink to="/">Sign in</FormSubtitleLink>
            </FormSubtitle> */}
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
            {/* <StyledImage fluid={imageteste.file.childImageSharp.fluid} /> */}
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 800px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
