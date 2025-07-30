import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  min-width: 21rem;
  min-height: 30rem;
  padding: 2.4rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  position: relative;

  > .cardWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    height: 100%;

    > .stepperButtonWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      gap: 1.2rem;
      width: 100%;

      > .addDishButton {
        height: 3.2rem;
        padding: 0;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    min-width: 29rem;
    max-width: 30rem;
    max-height: 50rem;
    padding: 1rem 2.4rem;

    > .cardWrapper {
      gap: 1.5rem;
      padding: 3.8rem 0 2.4rem 0;

      > .stepperButtonWrapper {
        flex-direction: row;

        > .addDishButton {
          width: 100%;
          height: 4.5rem;
        }
      }
    }
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  position: absolute;
  right: 16px;
  top: 16px;

  font-size: 2.4rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Image = styled.div`
  > img {
    border-radius: 99px;
    width: 8.8rem;
    height: auto;
    object-fit: cover;

    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
      width: 17.6rem;
      height: auto;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const Description = styled.p`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    display: block;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 2.8rem * 2;
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.CAKE_200};

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    height: 5.2rem;

    font-size: 3.2rem;
    line-height: 160%;
  }
`;
