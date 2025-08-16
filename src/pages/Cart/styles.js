import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-height: 50vh;
    overflow-y: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-radius: 4px;
    }
  }

  .cart-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h3 {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      span {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    width: 100%;

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .payment-button {
      width: 100%;
      max-width: 300px;
      padding: 1rem;
      font-size: 1rem;
      border-radius: 5px;
      border: none;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
