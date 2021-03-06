import Image from 'next/image'
import styled from 'styled-components'
import PageHeader from '../../../components/header'
import Layout from '../../../components/layout'

const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ed1e79;
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

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
    font-size: 3.6rem;
    line-height: 4.6rem;
  }
`

const IntroParagraph = styled.p`
  grid-column: 2 / span 10;
  font-size: 1rem;

  @media (min-width: 800px) {
    grid-column: 6 / span 6;
  }
`

const IlloTitle = styled.h3`
  grid-column: 1;
  font-family: "ibm-plex-mono", sans-serif;
  font-weight: 400;
  font-size: .9rem;
  letter-spacing: .10rem;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  justify-self: center;
  align-self: center;
`

const IlloGrid = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  padding: 2em 0;

  @media (min-width: 800px) {
    grid-template-columns: 12rem auto 6rem;
    padding: 6em 0;
  }

`

const WorkWrapper = styled.div`
  margin-top: 4rem;
`

export default function Illustration () {
  return (
    <>
      <PageHeader illustration />
      <Layout>
        <Intro>
          <IntroHeadline>
            Select illustration assignments.
          </IntroHeadline>
          <IntroParagraph>
            I love reading a brief, learning about something new, and visualizing a story — whether it's finding bias in Deep-Learning Systems or how the PGA tracks golf balls during a game. I specialize in visualizing technical subjects.
          </IntroParagraph>
        </Intro>
        <WorkWrapper>

          <IlloGrid>
            <IlloTitle>
              Explainable AI / IEEE Spectrum
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/ExplainableAI.png"
                alt="Illustration of a magnifying glass looking at a complex dataset"
                width={2560}
                height={1920}
                layout="intrinsic"
              />
              <Image
                src="/images/illustration/ExplainableAI_01-05-2021_Questionmarks.png"
                alt="Spot illustrations: a series of question marks infused with data"
                width={2560}
                height={774}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              5 Automations / Slack
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/5Automations_7-9-2018-01.png"
                alt="Illustration of the number 5 surrounded a complex set of data"
                width={4500}
                height={3000}
                layout="intrinsic"
              />
              <Image
                src="/images/illustration/5Automations_7-9-2018-02.png"
                alt="Spot illustrations: a series of illustrated numbers 1-5"
                width={4501}
                height={3000}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Pure Data / IBM
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/PureData_layout.jpg"
                alt="Illustration of the dial turned toward a particular dataset"
                width={1000}
                height={1377}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Palmer Luckey Profile / Fast Company
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/oculus-rift-2x.png"
                alt="Portrait of Palmer Luckey. Also, possibly... the Lawnmower Man"
                width={5000}
                height={4018}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Creative Computers / USC
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/creative-computers-2x.png"
                alt="Illustration of a saxaphone playing music generated by a computer"
                width={2560}
                height={1851}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              OkCupid Profiles / Wired
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/wired-okcupid.png"
                alt="Visualization of the top dating site profiles from different regions of the United States"
                width={5000}
                height={3400}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Quant Junkies / Fortune
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/quant-junkies2.jpg"
                alt="Illustration of a human figure surrounded by a data infrastructure"
                width={1000}
                height={1250}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Style Shifters / Chrysler
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/StyleShifters.jpg"
                alt="Illustration of a data inspired car dashboard"
                width={1224}
                height={1584}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
          <IlloGrid>
            <IlloTitle>
              Numbers / ESPN
            </IlloTitle>
            <div>
              <Image
                src="/images/illustration/numbers_lakers.jpg"
                alt="Illustration of Mike D\'Antoni and basketball players amid a datascape"
                width={1000}
                height={667}
                layout="intrinsic"
              />
              <Image
                src="/images/illustration/ShotLink_Photo.jpg"
                alt="Illustration of an abstract visualization of the ShotLink system"
                width={1000}
                height={667}
                layout="intrinsic"
              />
            </div>
          </IlloGrid>
        </WorkWrapper>
      </Layout>
    </>
  )
}