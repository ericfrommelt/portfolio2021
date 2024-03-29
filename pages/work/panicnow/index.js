import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131417;
  padding: 4em 0;

  
  color: white;

  @media (min-width: 800px) {
    padding: 6em 0;
  }
`

const IntroHeadline = styled.h1`
  grid-column: 2 / span 10;
  font-size: 2.6rem;
  font-weight: 200;
  line-height: 3.6rem;
  color: #FFF;

  @media (min-width: 800px) {
    grid-column: 2 / span 10;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const ArtworkL = styled.figure`
  padding: 2rem 0;
  grid-column: 2 / span 5;

  @media (min-width: 800px) {
    padding: 4rem 0;
  }
  `
  
  const ArtworkR = styled.figure`
  padding: 2rem 0;
  grid-column: 7 / span 5;
  
  @media (min-width: 800px) {
    padding: 4rem 0;
  }
  `
  const ArtworkW = styled.figure`
  padding: 2rem 0;
  grid-column: 1 / span 12;
  display: flex;

  @media (min-width: 800px) {
    padding: 4rem 0;
  }
  `
  
  const ArtworkInfo = styled.figcaption`
  font-size: .8rem;
  grid-column: 2 / span 10;
  `
  
  const StoryOne = styled.figcaption`
  grid-column: 2 / span 10;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
  font-size: .8rem;
  

  @media (min-width: 800px) {
    flex-direction: row;
    font-size: 1rem;
    padding: 4rem 0;
  }

  `
  const WorkTitle = styled.figcaption`
  display:none;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .05rem;
  text-align: center;
  padding: 1rem 0;
  color: rgba(80, 80, 80, 100);
  @media (min-width: 900px) {
    display: block;
  }
`
  const WorkTitle2 = styled.figcaption`
  display:none;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .05rem;
  text-align: center;
  padding: 4rem 0;
  color: rgba(80, 80, 80, 100);
  grid-column: 1 / span 12;
  display: block;
  @media (min-width: 900px) {
    display: block;
  }
`

const WorkWrapper = styled.ul`
  grid-column: 1 / span 12;
  list-style: none;
  margin: 4rem 0;
  padding: 1rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  `
  
  const WhiteSpace = styled.section`
  grid-column: 1 / span 12;
  min-height: 6rem;
  @media (min-width: 800px) {
    min-height: 10rem;
  }
`
const WorkWrapper2 = styled.ul`
  grid-column: 1 / span 12;
  list-style: none;
  margin: 4rem 0;
  padding: 1rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  `

  const WorkWrapper3 = styled.ul`
  grid-column: 1 / span 12;
  list-style: none;
  margin: 4rem 0;
  padding: 0;
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  `
  
//   const WhiteSpace = styled.section`
//   grid-column: 1 / span 12;
//   min-height: 6rem;
//   @media (min-width: 800px) {
//     min-height: 10rem;
//   }
// `


export default function Art2021 () {
  return (
    <>
      <PageHeader />
      <Layout>
        <Intro>
          <IntroHeadline>
            Panic Now
          </IntroHeadline>
        </Intro>
        <GridWrapper>
          <WorkWrapper>
            <Image
              src="/images/2021/GeneticDeflection.png"
              alt="Digital artwork by Eric Frommelt"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
         
            <Image
              src="/images/2021/HallOfJustice.png"
              alt="Digital artwork by Eric Frommelt titled Hall of Justice"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
         
            <Image
              src="/images/2021/Scales.png"
              alt="Digital artwork by Eric Frommelt titled Scales"
              width={1600}
              height={1600}
              layout="intrinsic"
              quality={90}
            />
            <WorkTitle>
              <h3>Genetic Deflection</h3>
            </WorkTitle>
            <WorkTitle>
              <h3>Hall Of Justice</h3>
            </WorkTitle>
            <WorkTitle>
              <h3>Scales</h3>
            </WorkTitle>
          </WorkWrapper>
          {/* <WhiteSpace /> */}
          <ArtworkW>
            <Image
              src="/images/2021/Panic01.png"
              alt="Digital artwork by Eric Frommelt titled Panic 1"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
          </ArtworkW>
          <WorkWrapper2>
            <Image
              src="/images/2021/Panic02.png"
              alt="Digital artwork by Eric Frommelt titled Panic 2"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
          
            <Image
              src="/images/2021/Panic03.png"
              alt="Digital artwork by Eric Frommelt titled Panic 3"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
         
            <Image
              src="/images/2021/Panic04.png"
              alt="Digital artwork by Eric Frommelt titled Panic 4"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
          
            <Image
              src="/images/2021/Panic05.png"
              alt="Digital artwork by Eric Frommelt titled Panic 5"
              width={1600}
              height={900}
              layout="intrinsic"
              quality={90}
            />
          </WorkWrapper2>
            <WorkTitle2>Panic Now [Grafix for a game]</WorkTitle2>
          <WhiteSpace />
        </GridWrapper>
      </Layout>
    </>
  )
}
