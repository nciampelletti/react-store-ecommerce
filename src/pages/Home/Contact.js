import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='title-center'>
          <h3>Join our newsletter and get 10% off</h3>
        </div>

        <div className='content'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet porro
            facilis accusamus libero dolores asperiores, ex sunt quisquam iste
            consequatur nam natus voluptatem atque itaque?
          </p>
          <form
            className='contact-form'
            action='https://formspree.io/f/xdobjkyv'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 3rem 0;

  .title-center {
    text-align: center;
  }
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-grey-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`

export default Contact
