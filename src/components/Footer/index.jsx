import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='bg-background text-letterLight'>
            <section className="flex justify-around mb-10 mt-5 text-sm max-sm:text-center max-sm:flex-col max-sm:items-center max-sm:gap-7">
                <div className='flex flex-col'>
                    <h3 className='text-xl text-primary mb-2'>Institucional</h3>
                    <a className='hover:underline' href='#'>Quem somos</a>
                    <a className='hover:underline' href='#'>Políticas de Privacidade</a>
                    <a className='hover:underline' href='#'>Política de cookies</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl text-primary mb-2'>Ajuda</h3>
                    <a className='hover:underline' href='#'>SAC</a>
                    <a className='hover:underline' href='#'>Fale conosco</a>
                    <a className='hover:underline' href='#'>Trabalhe conosco</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl text-primary mb-2'>Dúvidas</h3>
                    <a className='hover:underline' href='#'>Formas de pagamento</a>
                    <a className='hover:underline' href='#'>Como comprar</a>
                    <a className='hover:underline' href='#'>Dúvidas frequentes</a>
                </div>
            </section>

            <section>
                <div className='flex flex-col items-center mb-10 gap-1'>
                    <p className='text-xl'>Siga-nos</p>
                    <div className='flex gap-x-2'>
                        <AiFillFacebook size={35} className='hover:text-primary cursor-pointer' />
                        <AiOutlineInstagram size={35} className='hover:text-primary cursor-pointer' />
                        <AiOutlineTwitter size={35} className='hover:text-primary cursor-pointer' />
                        <AiFillYoutube size={35} className='hover:text-primary cursor-pointer' />
                    </div>
                </div>
                <p className='text-xs text-center'>Marreta tech é uma empresa fictícia para fins de estudos feito por Yago Sousa.</p>
            </section>
        </footer>
    )
}