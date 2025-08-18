import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: visible;

  font-family: "Poppins", sans-serif;

  > .banner {
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

    display: flex;
    align-self: center;
    align-items: center;

    width: 88%;
    max-width: 125rem;
    height: 10rem;
    margin: 3rem 0;
    padding: 0 0.4rem;
    border-radius: 8px;

    > img {
      width: 19.1rem;
      height: 14.9rem;

      margin-left: -2.5rem;
      margin-top: -2.3rem;
    }

    > .titleAndTextWrapper {
      width: 100%;
      text-align: left;

      > h1 {
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 140%;
      }

      > p {
        font-size: 1.1rem;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

  > section {
    width: 100%;
    padding-left: 2.4rem;

    > h2 {
      font-size: 1.8rem;
      font-weight: 500;
      margin: 2.4rem 0;
    }

    .carouselWrapper {
      position: relative;
      display: flex;

      align-items: center;
      padding-right: 0.5rem;
      overflow: hidden;
    }

    .carouselContent {
      display: flex;
      gap: 1.6rem;

      overflow-x: auto;

      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .fadeEffect {
      display: none;
    }

    .fadeEffect.left {
      display: none;
    }

    .fadeEffect.right {
      display: none;
    }

    .carouselButton {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > .banner {
      height: 15rem;
      margin-top: 5rem;

      > img {
        width: 32rem;
        height: 24.5rem;

        margin-left: -4rem;
        margin-top: -6rem;
      }

      > .titleAndTextWrapper {
        > h1 {
          font-size: 4rem;
        }

        > p {
          font-size: 1.6rem;
        }
      }
    }

    > section {
      > h2 {
        font-size: 3.2rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Desktop}) {
    > .banner {
      height: 26rem;
      margin-top: 18rem;

      > img {
        width: 63.2rem;
        height: 40.6rem;

        margin-left: -10rem;
        margin-top: -14.5rem;
      }
    }

    > section {
      .fadeEffect {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 20rem;
        z-index: 2;
        pointer-events: none;
      }

      .fadeEffect.left {
        display: flex;

        left: 0;
        background: linear-gradient(90deg, #000a0f 0%, transparent 100%);
      }

      .fadeEffect.right {
        display: flex;

        right: 0;
        background: linear-gradient(270deg, #000a0f 0%, transparent 100%);
      }

      .carouselButton {
        background: rgba(0, 0, 0, 0.5);
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        display: flex;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        padding: 0.8rem;
        z-index: 3;
        border-radius: 50%;

        font-size: 2.4rem;

        transition: 0.5s;
        cursor: pointer;

        &:hover {
          opacity: 1;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
      }

      .carouselButton.left {
        left: 2.4rem;
      }

      .carouselButton.right {
        right: 2.4rem;
      }
    }
  }
`;
