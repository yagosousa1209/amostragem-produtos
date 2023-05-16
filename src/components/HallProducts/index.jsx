import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

export default function HallProducts({ products }) {
    const [ordeneredListProducts, setOrdeneredListProducts] = useState('')

    const orderProducts = () => {
        if(ordeneredListProducts === 'az') {
            setOrdeneredListProducts(products.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct)))
        } else if (ordeneredListProducts === 'za') {
            setOrdeneredListProducts(products.sort((a, b) => b.nameProduct.localeCompare(a.nameProduct)))
        } else if (ordeneredListProducts === 'crescente') {
            setOrdeneredListProducts(products.sort((a, b) => a.price - b.price))
        } else if (ordeneredListProducts === 'decescente') {
            setOrdeneredListProducts(products.sort((a, b) => b.price - a.price))
        } else if (ordeneredListProducts === 'relevancia') {
            setOrdeneredListProducts(products.sort((a, b) => a.sales - b.sales))
        }
    }
    useEffect(() => {
        orderProducts()
    }, [ordeneredListProducts])

    useEffect(() => {
        setOrdeneredListProducts(products.sort((a, b) => a.sales - b.sales))
    },  [])

    return (
        <main className="flex flex-col mb-14">
            <section
                className="mt-4 text-end mr-10 flex flex-col items-end text-letterLight"
                value={ordeneredListProducts}
                onChange={e => setOrdeneredListProducts(e.target.value)}
            >
                <label className="text-sm mb-1">Odernar por:</label>
                <select className="bg-secundary cursor-pointer border-b-2 focus:outline-none">
                    <option value="relevancia">Relevância</option>
                    <option value="az">Título A-Z</option>
                    <option value="za">Título Z-A</option>
                    <option value="crescente">Menor Valor</option>
                    <option value="decescente">Maior Valor</option>
                </select>
            </section>
            <section className="grid gap-x-10 gap-y-20 my-5 mx-10 max-sm:mx-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {products.map((product => {
                    return (
                        <CardProduct
                            key={product.id}
                            characterLimit={50}
                            image={product.image}
                            description={product.descriptionProduct}
                            name={product.nameProduct}
                            price={product.price}
                        />
                    )
                }))}
            </section>
        </main>
    )
}
