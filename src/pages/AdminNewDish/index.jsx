import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
 
import { PiCaretLeftBold } from "react-icons/pi";
import { PiUploadSimpleBold } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { HiOutlinePlus } from "react-icons/hi2";

export default function AdminNewDish() {
    return (
        <Container>
            <HeaderAdmin></HeaderAdmin>

            <form action="">

                <button className="back">
                        <PiCaretLeftBold />
                        voltar
                </button>

                <h1>Novo Prato</h1>

                <div className="uploadContainer">
                    <h2>Imagem do Prato</h2>
                    <input type="file" id="upload"/>
                    <label htmlFor="upload">
                        <div className="uploadBox">
                            <PiUploadSimpleBold />
                            <p>Selecione a Imagem</p>
                        </div>
                    </label>
                </div>

                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Ex.: Salada Ceasar" id='name'/>

                <label htmlFor="category">Categoria</label>
                <select name="category" id="category">
                    <option value="category">Refeição</option>
                    <option value="category">Prato Principal</option>
                    <option value="category">Bebidas</option>
                </select>

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
                    <div className="ingredient">
                        Ingrediente 
                        <button><VscClose /></button>
                    </div>
                    <button id="addIngredient">
                        Adicionar
                        <HiOutlinePlus />
                    </button>
                </div>

                <label htmlFor="">Preço</label>
                <input 
                type="number" 
                placeholder='R$ 00,00' 
                id="price"
                min="0"
                max="1000"
                step="0.01"
                />

                <label htmlFor="">Descrição</label>
                <textarea name="" id=""></textarea>

                <Button title={'Salvar Alterações'} disabled/>

            </form>

            <Footer></Footer>
        </Container>
    )
}