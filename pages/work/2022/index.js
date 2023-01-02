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
  margin: 2rem 0;
  padding: 2rem;
  gap: 1rem;
`

const TeamYoshi = styled.section`
  grid-column: 1 / span 12;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 8rem 0;
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

          <ArtX3>
            <Image
              src="/images/2022/2022-12.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-13.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>

          <ArtX3>
            <Image
              src="/images/2022/2022-14.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-15.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>

          <Artwork>
            <Image
              src="/images/2022/2022-16.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </Artwork>

          <Artwork>
            <Image
              src="/images/2022/2022-17.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </Artwork>
          <TeamYoshi>
            <Image
              src="/images/2022/2022-18.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-19.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-20.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-21.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </TeamYoshi>
         
          <ArtX3>
            <Image
              src="/images/2022/2022-23.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-29.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
          <ArtX3>
            <Image
              src="/images/2022/2022-24.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-26.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
          <ArtX3>
            <Image
              src="/images/2022/2022-27.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-28.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
          <ArtX3>
            <Image
              src="/images/2022/2022-31_2022-31.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-31_2022-32.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
          <ArtX3>
            <Image
              src="/images/2022/2022-31_2022-33.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-31_2022-34.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
          </ArtX3>
          <ArtX3>
            <Image
              src="/images/2022/2022-31_2022-35.png"
              alt="Untitled Digital artwork by Eric Frommelt"
              width={1080}
              height={1080}
              layout="intrinsic"
              quality={90}
            />
            <Image
              src="/images/2022/2022-31_2022-36.png"
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