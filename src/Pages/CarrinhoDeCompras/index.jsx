import style from "./CarrinhoDeCompras.module.css";
import img from "../../../public/imagem/1.png";

const CarrinhoDeCompras = () => {
    return (
        <section className={style.section}>
            <div className={style.item}>

            <img src={img} className={style.img} alt="nome" />
            <div>

            <h6>nome da pizza</h6>
            <span>adicionar algo?</span>
            </div>
            <span>escolher metade</span>
            {/* quero colocar as pizzas dentro desse select para cada select a pizza pegue a
             metade da outra e junte com a que esta na tela selecionada la do carrinho. 
            e ao selection a pizza uma imagem da pizza seleciona cobre metade da pizza que ja estava no carrinho assim deixando uma pizza
            com duas metades e isso tudo tem que ficar salvo la no carrinho. trabalho para fazer amanha
            enviar item para o carrinho*/}
            <select>
                <option name="refri" id="">pizza</option>
                <option name="refri" id="">pizza q</option>
                <option name="refri" id="">aaaaaaaaa1</option>
            </select>
            </div>
        </section>


    )
}
export default CarrinhoDeCompras;