import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'
import Scenario74V1 from '../../../components/exp/Scenario74V1'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ccc;
  padding: 0 0 6em 0;
  color: white;
  `
  
  const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 3.6rem;
  font-weight: 200;
  line-height: 4.6rem;
  

  @media (min-width: 800px) {
    grid-column: 8 / span 5;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
  `

const IntroParagraph = styled.p`
  grid-column: 2 / span 10;
  font-size: 1rem;

  @media (min-width: 800px) {
    grid-column: 8 / span 5;
  }
`

export default function Exp () {
  return (
    <>
      <PageHeader exp />
      <Layout>
        <Intro>
          <IntroHeadline>
            Scenario 74
          </IntroHeadline>
          <IntroParagraph>
            Editorial explorations
          </IntroParagraph>
        </Intro>
          <Scenario74V1 />
      </Layout>
    </>
  )
}