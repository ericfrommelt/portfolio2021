
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import PageHeader from '../components/header'
import Layout from '../components/layout'

const WorkWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4em 2em;
  gap: 2em;
  list-style: none;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 6em;
    gap: 4em;
  }
`

const WorkTitle = styled.figcaption`
  font-size: 2rem;
`

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 4em 0;
  background-color: #131417;
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

  @media (min-width: 800px) {
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

export default function Home() {
  return (
    <>
      <PageHeader home />
      <Layout>
        <WorkWrapper>
          <li>
            <Link href="/work/hpe">
              <a>
                <figure>
                  <Image
                    src={"/images/cover/HPEV2.png"}
                    alt={"Editorial experience for HPE"}
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
            <Link href="/work/exp">
              <a>
                <figure>
                  <Image
                    src={"/images/cover/ExpressionsV2.png"}
                    alt={"Abstract 3D image"}
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
          </li>
        </WorkWrapper>
      </Layout>
    </>
  )
}
