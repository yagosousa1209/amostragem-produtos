import CardProduct from "./CardProduct";
import products from './products.json'

export default function HallProducts() {
    return (
        <main className="grid gap-x-10 gap-y-20 my-10 mx-10 max-sm:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product => {
                return (
                    <CardProduct characterLimit={50} image={product.image} description={product.descriptionProduct} name={product.nameProduct} price={product.price} />
                ) 
            }))}
        </main>
    )
}
