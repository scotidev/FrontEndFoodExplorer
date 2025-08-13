import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  > button {
    margin-left: calc((100% - 88%) / 2);
    margin-bottom: 1rem;
  }

  > form {
    width: 88%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-family: "Poppins", sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
    }

    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 1.8rem;
      margin-top: 1.6rem;
      border-radius: 8px;
      border: none;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.6rem;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      &:focus {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .imageNameAndCategoryWrapper,
    .ingredientsAndPriceWrapper {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    .imageNameAndCategoryWrapper {
      .uploadContainer {
        h2 {
          color: ${({ theme }) => theme.COLORS.LIGHT_400};

          font-family: "Roboto", sans-serif;
          font-size: 1.6rem;
          font-weight: 400;

          align-self: start;
          margin: 2.4rem 0 1.6rem;
        }

        > label {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          font-family: "Poppins", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;

          display: flex;
          padding: 1.2rem 3.2rem;
          border-radius: 8px;

          cursor: pointer;
          transition: 0.5s;

          .uploadBox {
            display: flex;
            align-items: center;

            > p {
              font-size: 1.4rem;
            }

            > svg {
              font-size: 2.4rem;
              margin-right: 0.8rem;
            }
          }
        }

        > label:hover {
          background-color: ${({ theme }) => theme.COLORS.DARK_600};
        }

        > #upload {
          display: none;
        }
      }

      .categoryContainer {
        #category {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          color: ${({ theme }) => theme.COLORS.LIGHT_400};

          padding: 1.6rem;
          height: 4.8rem;
          border-radius: 5px;

          font-size: 1.4rem;

          cursor: pointer;
          transition: 0.5s;
        }

        > #category:hover {
          background-color: ${({ theme }) => theme.COLORS.DARK_600};
        }
      }
    }

    .ingredientsAndPriceWrapper {
      .ingredientsContainer {
        display: flex;
        flex-direction: column;

        .ingredientsList {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          display: inline-flex;
          flex-wrap: wrap;

          margin-top: 1.6rem;
          border-radius: 5px;

          .ingredientItem {
            background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            display: flex;
            align-items: center;

            width: fit-content;
            height: 3.2rem;
            margin: 1.2rem 0.8rem 0.8rem;
            padding: 0.1rem 1.2rem;
            border-radius: 5px;

            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 1.2rem;

            > button {
              background-color: transparent;
              color: ${({ theme }) => theme.COLORS.LIGHT_100};

              height: 1.2rem;
              margin: 0 0 0.1rem 0.5rem;
            }
          }

          .addIngredient {
            display: flex;

            border-radius: 8px;
            height: 3.2rem;
            margin: 1.2rem 0.8rem 0.8rem;
            border: 2px dashed #7c7c8a;

            > #newIngredient {
              background-color: transparent;
              color: ${({ theme }) => theme.COLORS.LIGHT_500};

              margin-top: 0;
              padding: 0.8rem 1.2rem;

              font-family: "Roboto", sans-serif;
              font-weight: 400;
              font-size: 1.4rem;
              width: 10rem;
            }

            > button {
              background-color: transparent;
              color: ${({ theme }) => theme.COLORS.LIGHT_100};

              > svg {
                margin: 0.4rem 0.8rem 0 0;
                font-size: 1.6rem;
              }
            }
          }
        }
      }

      .priceContainer {
        width: 100%;

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    .descriptionAndSaveButtonWrapper {
      .descriptionContainer {
        #description {
          height: 14rem;
          margin-bottom: 2.4rem;

          resize: none;
        }
      }

      .buttonsContainer {
        display: flex;
        justify-content: end;

        > #deleteDish {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          font-size: 1.4rem;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          line-height: 170%;

          padding: 1.2rem 2.4rem;

          border-radius: 8px;
          margin-right: 3.2rem;
          width: fit-content;

          transition: 0.5s;
        }

        > #deleteDish:hover {
          background-color: ${({ theme }) => theme.COLORS.CARROT};
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
    > form {
      > .imageNameAndCategoryWrapper,
      .ingredientsAndPriceWrapper {
        flex-direction: row;
        gap: 3.2rem;
      }

      > .imageNameAndCategoryWrapper {
        > .uploadContainer {
          h2 {
            margin-top: 0;
          }
          min-width: fit-content;
        }

        .nameContainer {
          width: 100%;

          > input {
            height: 4.8rem;
            width: 100%;
          }
        }

        > .categoryContainer {
          width: 100%;
          max-width: 30%;
        }
      }

      > .ingredientsAndPriceWrapper {
        > .ingredientsContainer {
          min-width: 80%;

          > .ingredientsList {
            min-height: 5.7rem;
          }
        }
      }
    }
  }
`;
