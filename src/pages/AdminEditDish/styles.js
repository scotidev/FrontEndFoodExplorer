import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    min-height: 100vh;
    overflow-y: auto;

    >form {
        width: 88%;
        margin: 10rem auto 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            
        }

        >a {
            align-self: start;
        }

        >a .backButton, h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: 'Poppins', sans-serif;
            line-height: 140%;
            align-self: start;
        }

        >a .backButton {
            background-color: transparent;
            
            width: fit-content;
            display: flex;
            align-items: center;

            font-size: 1.6rem;
            font-weight: 500;

            margin-bottom: 2.4rem;

            transition: .5s;

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                font-size: 2.4rem;
                font-weight: 700;
            }
        }

        >a .backButton:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        >h1 {
            font-size: 3.2rem;
            font-weight: 500;
        }

        >.uploadContainer, textarea, select, input,
        .ingredientsContainer, .imageNameAndCategoryWrapper,
        .ingredientsAndPriceWrapper, .descriptionAndSaveButtonWrapper {
            width: 100%;
        }

        h2, label {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
            align-self: start;
        }

        >.imageNameAndCategoryWrapper .nameContainer input, .priceContainer input {
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            padding: 1.2rem 1.4rem;
            border-radius: 8px;
            border: none;

            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
        }

        >input:focus, #textarea:focus, .descriptionAndSaveButtonWrapper .descriptionContainer #textarea:focus {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        >.imageNameAndCategoryWrapper {

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 3.2rem;

                margin-bottom: 3.2rem;
            }
            
            >.uploadContainer {
    
                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    min-width: fit-content;
                }

                h2 {
                    margin: 2.4rem 0 1.6rem;
                }
    
                >label {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 500;
                    text-align: center;
                    
                    display: flex;
                    padding: 1.2rem 3.2rem;
                    border-radius: 8px;
    
                    cursor: pointer;
                    transition: .5s;
    
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
                
                >label:hover {
                    background-color: ${({ theme }) => theme.COLORS.DARK_600};
                }
    
                >#upload {
                 display: none;
                }
            }         

            >.nameContainer { 
                margin-top: 2.4rem;

                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        width: 100%;
                    }

                >input {
                    margin-top: 1.6rem;

                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        height: 4.8rem;
                        width: 100%;
                    }
                }
            }

            >.categoryContainer {
                margin-top: 2.4rem;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    width: 100%;
                    max-width: 30%;
                }

                #category {
                    background-color: ${({ theme }) => theme.COLORS.DARK_900};
                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
                    height: fit-content;
                    padding: 1.6rem;
                    border: none;
                    border-radius: 5px;
                    margin-top: 1.6rem;
        
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.4rem;
                    font-weight: 400;
                    line-height: 160%;
        
                    cursor: pointer;
                    transition: .5s;

                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        background-color: ${({ theme }) => theme.COLORS.DARK_800};

                        height: 4.8rem;
                        
                    }
                }

                >#category:hover {
                    background-color: ${({ theme }) => theme.COLORS.DARK_600};
                }
            }
        }       

        >.ingredientsAndPriceWrapper {

            @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                display: flex;
                gap: 3.2rem;
            }

            .desktopFlow {
                width: 100%;

                h2 {
                    margin: 2.4rem 0 1.6rem;
    
                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        
                    }
                }
    
                >.ingredientsContainer {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
                    height: fit-content;
                    padding: .4rem .8rem;
                    border-radius: 8px;
                    margin-bottom: 2.4rem;
                
                    float: left;
    
                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        min-width: 80%;
                    }
                
                    >.ingredient, #addIngredient {
                        height: 3.2rem;
                        width: fit-content;
                        border-radius: 8px;
                        padding: 1rem 1rem;
    
                        display: inline-flex;
                        text-align: center;
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
                        margin: .8rem 1.6rem .8rem;
    
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
    
                        gap: .8rem;
                        margin: .8rem 1.6rem .8rem;

                        transition: .5s;
    
                        >svg {
                            margin-left: .8rem;
                        }
                    }

                    >#addIngredient:hover {
                        background-color: ${({ theme }) => theme.COLORS.DARK_600};
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    }
                }
    
            }

            .priceContainer {
                width: 100%;

                @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                    align-self: center ;
                    max-width: 30%;
                }

                >label {
                    display: block;
                    margin-bottom: 1.6rem;
                }

                >input {
                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        height: 5.7rem ;
                        width: 100%;
                    }
                }

                //tirar o stepper do input de preço
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
        }

        .descriptionAndSaveButtonWrapper {
            display: flex;
            flex-direction: column;

            >.descriptionContainer {
                margin-top: 2.4rem;

                #textarea {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                    color: ${({ theme }) => theme.COLORS.LIGHT_500};
        
                    border-radius: 8px;
                    border: none;
                    padding: 1.4rem;
                    height: 17rem;
                    margin: 1.6rem 0 2.4rem;
        
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.6rem;
                    font-weight: 400;
        
                    resize: none;
        
                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        min-height: 18rem;
                    }
                }
        
            }

            >.buttonsContainer {
                display: flex;
                justify-content: end;

                >#deleteDish {
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    font-size: 1.4rem;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 500;
                    line-height: 170%;

                    padding: 1.2rem 2.4rem;

                    border-radius: 8px;
                    margin-right: 3.2rem;
                    width: 100%;

                    transition: .5s;

                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        max-width: 14rem;
                        max-height: 4.8rem;
                    }
                }

                >#deleteDish:hover {
                    background-color: ${({ theme }) => theme.COLORS.DARK_600};
                }

                >#saveButton {
        
                    @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
                        max-width: 18rem;
                        align-self: flex-end;
                        margin-bottom: 12rem;
                    }
                } 
            }
        }
    }

    >footer {
        position: relative;
        margin-top: 5.3rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.Mobile}) {
            position: sticky;
            top: 100%;
        }
    }
`