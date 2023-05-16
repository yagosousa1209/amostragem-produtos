import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HallProducts from "../../components/HallProducts";
import products from './products.json'

import logo from './logo.png'
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function Home() {
    const [searchProduct, setSearchProduct] = useState('')
    const [productsState, setProductsState] = useState(products)
    const lowerSearch = searchProduct.toLocaleLowerCase()

    function filterProductsFunc() {
        setProductsState(products.filter((product) =>
            product.nameProduct.toLocaleLowerCase().includes(lowerSearch)))
    }
    useEffect(() => {
        filterProductsFunc()
    }, [searchProduct])

    return (
        <div className="flex flex-col justify-between bg-secundary">
            <header className='flex justify-between items-center bg-background text-letterLight p-4 shadow-letterDark shadow max-sm:flex-col max-sm:gap-5'>
                <img className='h-10 max-sm:hidden' src={logo} alt="Logo Marreta Tech" />

                <div className='flex items-center relative w-full mx-5 max-sm:mx-0'>
                    <input
                        className='leading-10 focus:outline-none rounded-lg bg-secundary placeholder:text-letterLight p-2 h-10 w-full'
                        type="text"
                        placeholder='O que procura?'
                        value={searchProduct}
                        onChange={e => setSearchProduct(e.target.value)}
                    />
                    <AiOutlineSearch size={20} className='bg-secundary absolute top-100 right-2' />
                </div>

                <nav className='flex justify-center items-center gap-x-8 max-md:gap-x-3'>
                    <a className='flex items-end text-lg' href='#'>
                        <RiAccountCircleFill className='text-primary' size={40} />
                        <div className='w-[6.7rem] max-lg:hidden'>
                            <p className='text-xs pl-1'>Entrar / Cadastrar</p>
                            <p className='leading-tight pl-1'>Minha conta</p>
                        </div>
                    </a>
                    <a className='flex items-end text-lg' href='#'>
                        <AiFillHeart className='text-primary' size={40} />
                        <div className='max-lg:hidden'>
                            <p className='text-xs pl-1'>Meus</p>
                            <p className='leading-tight pl-1'>Favoritos</p>
                        </div>
                    </a>
                    <a className='flex items-center max-md:text-primary md:px-5 md:py-2 md:bg-primary rounded-lg text-xl' href='#'>
                        <AiOutlineShoppingCart size={40} />
                        <p className='pl-3 font-bold max-md:hidden'>CARRINHO</p>
                    </a>
                </nav>
            </header>
            <div className="mx-auto">
                <HallProducts products={productsState} />
            </div>
            <Footer />
        </div>
    )
}
