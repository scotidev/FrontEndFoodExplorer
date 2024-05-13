import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
 
import { PiCaretLeftBold } from "react-icons/pi";


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

                <label htmlFor="">Imagem do Prato</label>
                <input type="file" />

                <label htmlFor="name"></label>
                <input type="text" />


                <label htmlFor="category">categoria</label>
                <input type="text" />

                <label htmlFor="">Ingredientes</label>

                <label htmlFor="">Preço</label>

                <label htmlFor="">Descrição</label>
                <input type="textbox" name="" id="" />

                <Button title={'Salvar Alterações'} disabled/>

            </form>

            <Footer></Footer>
        </Container>
    )
}