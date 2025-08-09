import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > .content {
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > .backAndImageWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > a {
        align-self: flex-start;
        margin-bottom: 1.4rem;
      }

      > a .backButton {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        border: none;

        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: start;

        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 140%;

        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }

      > img {
        height: 26.4rem;
        width: 26.4rem;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    > .ingredientsAndDescriptionWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;

      > h1,
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: "Poppins", sans-serif;
        line-height: 140%;
      }

      > h1 {
        font-size: 2.7rem;
        font-weight: 500;
        white-space: nowrap;

        margin-bottom: 2.4rem;
      }

      > p {
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center;

        margin-bottom: 2.4rem;
      }

      > .ingredientsWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.2rem;

        margin-bottom: 3rem;
        width: 100%;
      }

      > a,
      > .stepperAndButtonWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > a .editButton {
        width: 28rem;
      }

      > .stepperAndButtonWrapper {
        margin-top: 2rem;
        gap: 1.6rem;

        > button {
          width: 100%;
          max-width: 28rem;
          height: 5rem;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > .content {
      flex-direction: row;
      justify-content: center;
      gap: 10rem;
      padding: 3rem 5rem 0;

      > .backAndImageWrapper {
        padding-left: 5rem;
        width: auto;
        align-items: flex-start;

        > a {
          transform: translateX(-50%);
        }

        > img {
          height: 45rem;
          width: auto;
        }
      }

      > .ingredientsAndDescriptionWrapper {
        justify-content: start;
        align-items: flex-start;

        > h1 {
          font-size: 4rem;
          white-space: normal;
          text-align: left;
        }

        > p {
          font-size: 2.4rem;
          text-align: start;
        }

        .ingredientsWrapper {
          justify-content: flex-start;
        }

        > a .editButton {
          max-width: 20rem;
        }

        > .stepperAndButtonWrapper {
          flex-direction: row;
          justify-content: flex-start;
        }
      }
    }
  }
`;
