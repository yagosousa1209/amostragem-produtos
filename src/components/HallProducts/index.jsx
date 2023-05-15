import CardProduct from "./CardProduct";
import asd from '../../assets/img-products/celular_1.jpg'
import products from './products.json'

export default function HallProducts() {
    return (
        <main className="flex flex-wrap gap-x-10 gap-y-20 my-10 mx-5">
            {products.map((product => {
                return (
                    <CardProduct image={product.image} description={product.descriptionProduct} name={product.nameProduct} valor={product.price} />
                )
            }))}
        </main>
    )
}
