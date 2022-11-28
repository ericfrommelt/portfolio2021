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

const CoverArt = styled.figure`
& > span {
  border-radius: 6px;
  overflow: hidden;
}
`

const WorkTitle = styled.figcaption`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .05rem;
  text-align: center;
  padding: 1rem 0;
  color: rgba(80, 80, 80, 100);
`

export default function Home() {
  return (
    <>
      <PageHeader home />
      <Layout>
        <WorkBackground />
        <WorkSection>
          <WorkWrapper>
<<<<<<< HEAD
=======
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
>>>>>>> e53feed48183d1c6d5775eca2fe9cb2d932bd68b
            <WorkCover>
              <Link href="/work/terminalindex">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/TerminalIndex.png"}
                      alt={"Interaction sketchbook"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    Terminal Index
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/vaporized-claims">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/VaporizedClaimsV1.png"}
                      alt={"Responsive Collage"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    Vaporized Claims
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/transformation">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/TransformationV2.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Transformation
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
<<<<<<< HEAD
              <Link href="/work/2021">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/2021.png"}
                      alt={"Art 2021"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                      />
                  </CoverArt>
                  <WorkTitle>
                    2021
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
=======
>>>>>>> e53feed48183d1c6d5775eca2fe9cb2d932bd68b
              <Link href="/work/illustration">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/IllustrationV1.png"}
                      alt={"Augmented Reality Danger illustration"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Illustration
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/exp">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/ExpressionsV5.png"}
                      alt={"Abstract 2d images"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
                  <WorkTitle>
                    Explorations
                  </WorkTitle>
                </a>
              </Link>
            </WorkCover>
            <WorkCover>
              <Link href="/work/specimen">
                <a>
                  <CoverArt>
                    <Image
                      src={"/images/cover/SpecimenV1.png"}
                      alt={"Styleframes"}
                      width={1000}
                      height={1500}
                      layout="intrinsic"
                    />
                  </CoverArt>
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
