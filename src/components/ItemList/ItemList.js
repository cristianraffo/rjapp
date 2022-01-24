import Item from "../Item/Item";
import { products } from "../../db";

const Itemlist = () => {
    return (
        <>
            {products.map((product) => {
                return (
                    <Item
                        key={product.id}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                )
            })}
        </>
    )
}


export default Itemlist;