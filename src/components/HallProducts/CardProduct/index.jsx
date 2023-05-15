import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CardProduct({ valor, name, image, description }) {
    return (
        <div className='group w-52 text-letterLight cursor-pointer'>
            <img
                className='opacity-70 group-hover:opacity-100 rounded-t'
                src={image}
                alt={description}
            />
            <div className='px-1 mb-10'>
                <h3 className='mb-4 mt-2'>{name}</h3>
                <p className='text-primary text-xl font-bold'>{`R$${valor}`}</p>
                <p className='text-xs'>À vista com 15% de desconto</p>
            </div>
            <button className='flex items-center justify-center w-full bg-primary rounded py-1 font-bold'>
                <AiOutlineShoppingCart size={20} className='mr-2' />
                Comprar
            </button>
        </div>
    )
}
