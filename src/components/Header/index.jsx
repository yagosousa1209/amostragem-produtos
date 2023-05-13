import logo from './logo.png'
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';

export default function Header() {
    return (
        <header className='flex justify-between items-center bg-background text-letterLight p-4 shadow-letterDark shadow'>
            <img className='h-10' src={logo} alt="Logo Marreta Tech" />

            <div className='flex items-center relative w-96'>
                <input
                    className='leading-10 focus:outline-none rounded-lg bg-secundary placeholder:text-letterLight p-2 h-10 w-full'
                    type="text"
                    placeholder='O que procura?'
                />
                <AiOutlineSearch size={20} className='bg-secundary absolute top-100 right-2' />
            </div>

            <nav className='flex justify-center items-center gap-x-8'>
                <a className='flex items-end text-lg' href='http://localhost:3000/'>
                    <RiAccountCircleFill className='text-primary' size={40} />
                    <div>
                        <p className='text-xs pl-1'>Entrar / Cadastrar</p>
                        <p className='leading-tight pl-1'>Minha conta</p>
                    </div>
                </a>
                <a className='flex items-end text-lg' href='http://localhost:3000/'>
                    <AiFillHeart className='text-primary' size={40} />
                    <div>
                        <p className='text-xs pl-1'>Meus</p>
                        <p className='leading-tight pl-1'>Favoritos</p>
                    </div>
                </a>
                <a className='flex items-center px-5 py-2 bg-primary rounded-lg text-xl' href='http://localhost:3000/'>
                    <AiOutlineShoppingCart size={40} />
                    <p className='pl-3 font-bold'>CARRINHO</p>
                </a>
            </nav>
        </header>
    )
}