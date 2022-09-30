import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PageHeader from '../components/header'
import Layout from '../components/layout'

const WorkBackground = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 20em;
  background-color: #131417;
`
const WorkSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 6rem 0;
`

const WorkWrapper = styled.ul`
  grid-column: 2 / span 10;
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const WorkCover = styled.li`
  
`

const WorkTitle = styled.figcaption`
  font-size: 2rem;
`

export default function Home() {
  return (
    <>
      <PageHeader home />
      <Layout>
        <WorkBackground />
        <WorkSection>
          <WorkWrapper>
            <WorkCover>
              <Link href="/work/hpe">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/HPEV2.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    HPE
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/terminalindex">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/TerminalIndex.png"}
                      alt={"Interaction sketchbook"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    Terminal Index
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/vaporized-claims">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/VaporizedClaimsV1.png"}
                      alt={"Responsive Collage"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    Vaporized Claims
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/transformation">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/TransformationV2.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Transformation
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/2021">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/2021.png"}
                      alt={"Art 2021"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </figure>
                  <WorkTitle>
                    2021
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/illustration">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/IllustrationV1.png"}
                      alt={"Augmented Reality Danger illustration"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Illustration
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/exp">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/ExpressionsV5.png"}
                      alt={"Abstract 2d images"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Explorations
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/specimen">
                <a>
                  <figure>
                    <Image
                      src={"/images/cover/SpecimenV1.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </figure>
                  <WorkTitle>
                    Specimen
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
          </WorkWrapper>
        </WorkSection>
      </Layout>
    </>
  )
}
