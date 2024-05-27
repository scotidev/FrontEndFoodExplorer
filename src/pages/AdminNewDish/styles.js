import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    >form {
        width: 88%;
        margin: 10rem auto 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        >.back, h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: 'Poppins', sans-serif;
            line-height: 140%;
            align-self: start;
        }

        >.back {
            background-color: transparent;
            
            width: fit-content;
            display: flex;
            align-items: center;
            align-self: start;

            font-size: 1.6rem;
            font-weight: 500;

            margin-bottom: 2.2rem;
        }

        >h1 {
            font-size: 3.2rem;
            font-weight: 500;
        }

        >.uploadContainer, textarea, select, input, .ingredientsContainer {
            width: 100%;
        }

        >.uploadContainer {

            >label {
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                text-align: center;
                
                display: flex;
                padding: 1.2rem 3.2rem;
                border-radius: 8px;

                cursor: pointer;

                >.uploadBox {
                    display: flex;
                    align-items: center;

                    >p {
                        font-size: 1.4rem;
                    }

                    >svg {
                        font-size: 2.4rem;
                        margin-right: .8rem;
                    }
                }
            }            

            >#upload {
             display: none;
            }
        }

        >label, h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            margin: 2.4rem 0 1.6rem;

            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            align-self: start;
        }

        >input {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            padding: 1.2rem 1.4rem;
            border-radius: 8px;
            border: none;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
        }

        >input:focus {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        >#category {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            height: fit-content;
            padding: 1.6rem;
            border: none;
            border-radius: 5px;

            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 160%;

            cursor: pointer;
        }
        

        >.ingredientsContainer {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};

            margin-top: 1.6rem;
            height: 4.8rem;
            padding: .4rem .8rem;
            border-radius: 8px;
            
            display: flex;
            align-items: center;
            gap: 1.6rem;
            float: left;

            >.ingredient, #addIngredient {
                height: 3.2rem;
                border-radius: 8px;
                padding: 1rem 1rem;

                display: flex;
                align-items: center;
                justify-content: center;

                font-family: 'Roboto', sans-serif;
                font-size: 1.6rem;
                font-weight: 400;
            }
            
            >.ingredient {
                background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                
                gap: .8rem;

                >button {
                    background-color: transparent;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    height: 1.2rem;
                }
            }

            >#addIngredient {
                background-color: transparent;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
                border: 1px dashed #7C7C8A;

                >svg {
                    margin-left: .8rem;
                }
            }
        }
    }
`