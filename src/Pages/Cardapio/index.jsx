import style from "./Cardapio.module.css";

import listaCardapio from "./Cardapio.json";
import ItemCardapio from "../../Componests/ItensCardapio";

const Cardapio = () => {
    return (
        <section className={style.section}>
            <p className={style.p2}>Fique a vontade para escolher!</p>
            {
                listaCardapio.map((item)=>{
                    return <ItemCardapio
                    key={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    />

                })
            }
        </section>
    )
}
export default Cardapio;