import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../components/header'
import Layout from '../../components/layout'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131417;
  padding: 6em 0;
  color: white;
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.6rem;
  margin-bottom: 0;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 2.6rem;
    line-height: 3.6rem;
    margin-bottom: 0;
  }
`

const IntroParagraph = styled.p`
  grid-column: 2 / span 10;
  font-size: 1.2rem;
  line-height: 2em;
  a {
    color: whitesmoke;
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
  }
`

const IntroImage = styled.figure`
  grid-column: 2 / span 5;
  grid-row: 1 / span 2;

  @media (min-width: 800px) {
    grid-column: 1 / span 2;
  }
`

const BrandHead = styled.h3`
  margin-top: 4rem;
`

const BrandList = styled.ul`
  column-count: 2;
  column-width: 50%;
  column-fill: auto;
  list-style: none;
  padding: 0 0 4rem 0;
`

export default function About() {
  return (
    <>
      <PageHeader about />
      <Layout>
        <Intro>
          <IntroHeadline>
            I'm Eric Frommelt, a Design Director based in Los Angeles. I visualize concepts, stories and UI - across media and platforms.
          </IntroHeadline>
          <IntroParagraph>
            <h3>What I do:</h3>
              <BrandList>
                <li>Interaction design</li>
                <li>Motion design</li>
                <li>Brand design</li>
                <li>Illustration + graphics</li>
              </BrandList>
            <BrandHead>Agencies and brands I've worked with:</BrandHead>
            <BrandList>
              <li>ABC</li>
              <li>Accenture</li>
              <li>American Express</li>
              <li>Citi</li>
              <li>Delta</li>
              <li>Digitas</li>
              <li>ESPN</li>
              <li>Fast Company</li>
              <li>Fortune</li>
              <li>HPE</li>
              <li>Mtv</li>
              <li>McCann</li>
              <li>New Line Cinema</li>
              <li>Ogilvy</li>
              <li>Showtime</li>
              <li>Walt Disney</li>
              <li>Wired</li>
            </BrandList>
            <h3>Contact</h3>
            <p>I can be reached at <a href="mailto:ericfrommelt@gmail.com">ericfrommelt@gmail.com</a></p>
          </IntroParagraph>
          <IntroImage>
            <Image 
              src={"/images/about/ef-portrait-002.jpg"}
              alt={"Portrait of Eric Frommelt"}
              width={1739}
              height={1739}
              layout={"intrinsic"}
            />
          </IntroImage>
        </Intro>
      </Layout>
    </>
  )
}