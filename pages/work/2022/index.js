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

const Artwork = styled.figure`
  padding: 4rem 0;
  grid-column: 2 / span 10;
`

const ArtworkInfo = styled.figcaption`
  font-size: .8rem;
  grid-column: 2 / span 10;
`

const ArtX3 = styled.section`
  grid-column: 1 / span 12;
  display: flex;
  padding: 2rem;
  gap: 1rem;
`

export default function Art2022 () {
  return (
    <>
      <PageHeader />
      <Layout>
        <Intro>
          <IntroHeadline>
            2022
          </IntroHeadline>
        </Intro>
        <GridWrapper>
          <Artwork>
            <Image
              src="/images/2022/2022-01.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Untitled</p>
            </ArtworkInfo>
          </Artwork>
          <Artwork>
            <Image
              src="/images/2022/2022-02.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <ArtworkInfo>
              <p>Untitled</p>
            </ArtworkInfo>
          </Artwork>

          <ArtX3>
            <Image
              src="/images/2022/2022-03.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-04.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-05.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-06.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-07.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>

          <ArtX3>
            <Image
              src="/images/2022/2022-09.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-10.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-11.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
         
          
        </GridWrapper>
      </Layout>
    </>
  )
}