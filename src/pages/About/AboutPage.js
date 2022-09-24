import React from "react"
import styled from "styled-components"
import PageHero from "../../components/layout/PageHero"
import aboutImg from "../../assets/hero_y2.jpg"

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice table' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi
            doloribus reprehenderit laborum, veniam id ipsa eum labore, nostrum
            dolores illum voluptatum deleniti esse facilis? Voluptates dolorem
            molestias minus eum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            quidem possimus quae facilis assumenda atque nemo unde error iusto
            asperiores, facere eligendi? Nesciunt, quae veniam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            excepturi nesciunt sint dolorum non laudantium perferendis. Quis
            labore temporibus in laborum!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  align-items: center;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
