import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 2rem;
  background-color: ${props => {
    if (props.hpe) return '#01a982'
    if (props.transformation) return '#3b3f42'
    if (props.illustration) return '#ed1e79'
    if (props.about || props.home) return '#131417'
    return '#ccc'
  }};
  
  @media (min-width: 800px) {
    padding: 6rem;
  }
`

const NamePlate = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 1.2rem;

  @media (min-width: 800px) {
    font-size: 1.6rem;
  }
`

const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`

const NavItem = styled.li`
  padding: 0 0 0 2em;
  `

const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 800px) {
    font-size: 1.6rem;
  }

`

const PageHeader = ({ home, hpe, transformation, illustration, about }) => {
  const router = useRouter()

  return (
    <StyledPageHeader 
      home={home}
      hpe={hpe}
      transformation={transformation}
      illustration={illustration}
      about={about}
    >
      <NamePlate>
        <Link href="/">
          <a>Eric Frommelt</a>
        </Link>
      </NamePlate>
      <Nav>
        <NavItem>
          <Link href="/">
            <NavLink>
              Work
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">
            <NavLink>
              About
            </NavLink>
          </Link>
        </NavItem>
      </Nav>
    </StyledPageHeader>
  )
}

export default PageHeader