import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
 
import { PiCaretLeftBold } from "react-icons/pi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { HiOutlinePlus } from "react-icons/hi2";

export default function AdminEditDish() {

    return (
        <Container>
            <HeaderAdmin></HeaderAdmin>

            <form action="">

                <button className="backButton">
                        <PiCaretLeftBold />
                        voltar
                </button>

                <h1>Editar prato</h1>

                <section className="imageNameAndCategoryWrapper">

                    <div className="uploadContainer">

                        <h2>Imagem do Prato</h2>

                        <input type="file" id="upload"/>
                        <label htmlFor="upload">
                            <div className="uploadBox">
                                <PiUploadSimpleBold />
                                <p>Selecione imagem para alterá-la</p>
                            </div>
                        </label>
                    </div>

                    <div className="nameContainer">
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Ex.: Salada Ceasar" id='name'/>
                    </div>

                    <div className="categoryContainer">

                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category">
                            <option value="category">Refeição</option>
                            <option value="category">Prato Principal</option>
                            <option value="category">Bebidas</option>
                        </select>
                    </div>
                </section>

                <section className="ingredientsAndPriceWrapper">

                    <div className="desktopFlow">

                        <h2>Ingredientes</h2>

                        <div className="ingredientsContainer">
                    
                            <div className="ingredient">
                                Ingrediente 
                                <button><VscClose /></button>
                            </div>

                            <div className="ingredient">
                                Ingrediente 
                                <button><VscClose /></button>
                            </div>
                        
                            <div className="ingredient">
                                Ingrediente 
                                <button><VscClose /></button>
                            </div>

                            <button id="addIngredient">
                                Adicionar
                                <HiOutlinePlus />
                            </button>
                        </div>
                    </div>

                    <div className="priceContainer">
                        <label htmlFor="price">Preço</label>
                        <input 
                        type="number" 
                        placeholder='R$ 00,00' 
                        id="price"
                        min="0"
                        max="100"
                        step="0.01"
                    />
                    </div>
                </section>

                <section className="descriptionAndSaveButtonWrapper">
                    
                    <div className="descriptionContainer">
                        <label htmlFor="textarea">Descrição</label>
                        <textarea name="" id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
                    </div>

                    <div className="buttonsContainer">

                        <button id="deleteDish">Excluir prato</button>

                        <Button title={'Salvar Alterações'} id="saveButton" disabled/>
                    </div>
                </section>

            </form>

            <Footer></Footer>
        </Container>
    )
}