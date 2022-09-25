import React from "react"
import styled from "styled-components"
import { services } from "../../utils/constants"

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis dolorum quae odit quia eveniet, nemo itaque, labore
            repellendus blanditiis eum consequatur quos numquam. Nostrum,
            perspiciatis.
          </p>
          <h4>We know the best how to find the best furniture for you</h4>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service

            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  h3,
  h4 {
    color: var(--clr-grey-1);
  }
  padding: 4rem 0;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-grey-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-grey-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-grey-2);
    }
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-grey-10);
    color: var(--clr-grey-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
