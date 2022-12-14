import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import heroBcg2 from "../../assets/Hero_x2.jpg"
import heroBcg from "../../assets/hero_y.jpg"

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h2>
          75% OFF SOFAS
          <br />
          with purchase of regular price loveseat**
        </h2>
        <p>
          Design a home office that is both professional and personal with
          savings on stylish desks, office chairs and bookcases. Shop in-store &
          online!
        </p>

        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 15rem);
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 350px;
      transform: translateX(-40%);
      border-radius: var(--radius);
      box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 20%;
      height: 70%;
      background: var(--clr-grey-7);
      bottom: 0%;
      left: -19%;
      border-radius: var(--radius);
    }
  }
`
