import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && (
            <Link to='/products' className='coloredLink'>
              / Products
            </Link>
          )}
          / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-grey-5);
  h3 {
    color: var(--clr-grey-3);
  }
  a {
    color: var(--clr-grey-5);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-1);
  }
`

export default PageHero
