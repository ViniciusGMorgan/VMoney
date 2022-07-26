import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
  }
  span {
    font-size: 2.5rem;
    color: var(--shape);
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem 6rem;
  }
`;
