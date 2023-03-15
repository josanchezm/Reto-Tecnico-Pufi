// Assets imports
import bgUmbrellas from '../assets/images/bg-umbrellas.jpg'
import orangeUmbrella from '../assets/images/orangeUmbrella.png'
import blackArrow from '../assets/images/blackarrow.png'
import sofaLounge from '../assets/images/sofaLounge.jpg'
import beachSofa from '../assets/images/beachsofa.jpg'
import shoppingCart from '../assets/images/shoppingCart_.jpg'
import shoppingCartSmall from '../assets/images/shoppingCart.jpg'
import pufiNapSmall from '../assets/images/pufiNapSmall.jpg'
import pufiNap from '../assets/images/puffNap.jpg'
import umbrellaPair from '../assets/images/umbrellaPair.jpg'
import shoppingCartFruits from '../assets/images/shoppingCartFruits.jpg'
import beachBlueSofa from '../assets/images/beachSofaBluejpg.jpg'
import lazyBag from '../assets/images/lazybag_.jpg'
import greyArrow from '../assets/images/greyarrow.png'

// React imports
import { useForm, ValidationError } from '@formspree/react';

export default function Main() {
    // Validación de éxito en el envío del correo electrónico hacia formspree
    const [state, handleSubmit] = useForm("xjvdozbr");
    if (state.succeeded) {
      alert('Te has suscrito con éxito!');
    } 
    return (
        <main>
            {/* Estructura de la grid principal del main y sus estilos */}
            <ul className="grid grid-cols-2 grid-rows-4 place-items-center">
                <li className="grid place-content-center w-full h-full lg:h-[75vh] md:h-[50vh] bg-no-repeat bg-cover" style={ {backgroundImage: `url(${bgUmbrellas})`} }>
                    <div className='w-full h-full bg-black opacity-30'></div>
                    <button className="px-1 py-3 bg-transparent mx-auto border-2 rounded-none border-white w-[130px] mx-aut font-semibold text-base text-white">SHOP</button>
                </li>
                <li className='flex flex-col justify-center items-center gap-8'>
                    <img src={orangeUmbrella} className='w-[125px] h-[125px]' alt="orange umbrella" />
                    <h2 className='text-4xl font-semibold'>Pufi RAIN</h2>
                    <div className='w-12 border-t-2 border-gray-400'></div>
                    <p className='text-lg w-4/5 font-semibold'>Descripción del producto. Este es un texto simulado</p>
                    <div className='flex gap-4 cursor-pointer'>
                        <img src={blackArrow} alt="black arrow" className='-rotate-90 w-[10px]'/>
                        <p className='text-lg font-normal'>VER MAS</p>
                    </div>
                </li>

                <li className='flex flex-col justify-center items-center gap-8'>
                    <img src={sofaLounge} className='w-[175px] h-[125px]' alt="sofa lounge" />
                    <h2 className='text-4xl font-semibold'>Pufi PUFF</h2>
                    <div className='w-12 border-t-2 border-gray-400'></div>
                    <p className='text-lg w-4/5 font-semibold'>Descripción del producto. Este es un texto simulado</p>
                    <div className='flex gap-4 cursor-pointer'>
                        <img src={blackArrow} alt="black arrow" className='-rotate-90 w-[10px]'/>
                        <p className='text-lg font-normal'>VER MAS</p>
                    </div>
                </li>
                <li className='w-full h-full bg-no-repeat bg-cover' style={ {backgroundImage: `url(${beachSofa})`} }>
                    <div className='w-full h-full bg-black opacity-30'></div>
                </li>

                <li className='w-full h-full bg-no-repeat bg-cover' style={ {backgroundImage: `url(${shoppingCart})`} }>
                    <div className='w-full h-full bg-black opacity-30'></div>
                </li>
                <li className='flex flex-col justify-center items-center gap-8'>
                    <img src={shoppingCartSmall} className='w-[175px] h-[175px]' alt="Shopping cart" />
                    <h2 className='text-4xl font-semibold'>Pufi CART</h2>
                    <div className='w-12 border-t-2 border-gray-400'></div>
                    <p className='text-lg w-4/5 font-semibold'>Descripción del producto. Este es un texto simulado</p>
                    <div className='flex gap-4 cursor-pointer'>
                        <img src={blackArrow} alt="black arrow" className='-rotate-90 w-[10px]'/>
                        <p className='text-lg font-normal'>VER MAS</p>
                    </div>
                </li>

                <li className='flex flex-col justify-center items-center gap-8'>
                    <img src={pufiNapSmall} className='w-[175px] h-[175px]' alt="pufi nap" />
                    <h2 className='text-4xl font-semibold'>Pufi NAP</h2>
                    <div className='w-12 border-t-2 border-gray-400'></div>
                    <p className='text-lg w-4/5 font-semibold'>Descripción del producto. Este es un texto simulado</p>
                    <div className='flex gap-4 cursor-pointer'>
                        <img src={blackArrow} alt="black arrow" className='-rotate-90 w-[10px]'/>
                        <p className='text-lg font-normal'>VER MAS</p>
                    </div>
                </li>
                <li className='w-full h-full bg-no-repeat bg-cover' style={ {backgroundImage: `url(${pufiNap})`} }>
                    <div className='w-full h-full bg-black opacity-30'></div>
                </li>
            </ul>
            {/* Seccion de grid pequeña y formulario de Newsletter con validación de correo electrónico */}
            <section className='text-center py-20'>
                <p className='text-gray-300 text-lg font-normal'>INSTAGRAM</p>
                <p className='text-5xl pb-20'>#ESPUFI</p>
                <div className='grid grid-cols-3 gap-[1px] w-[35%] mx-auto pb-[100px]'>
                    <img src={umbrellaPair} alt="umbrella pair" className='w-full h-full'/>
                    <img src={shoppingCartFruits} alt="shopping cart fruits" className='w-full h-full'/>
                    <img src={beachBlueSofa} alt="beach blue sofa" className='w-full h-full'/>
                    <img src={lazyBag} alt="lazy bag" className='w-full h-full'/>
                    <img src={pufiNap} alt="pufi nap" className='w-full h-full' />
                    <img src={shoppingCart} alt="shopping cart" className='w-full h-full'/>
                </div>
                <p className='text-gray-300 text-lg font-normal'>NEWSLETTER</p>
                <p className='text-6xl font-normal pb-2'>SUSCRIBITE</p>
                <p className='font-semibold text-lg'>Y enterate de todas las novedades</p>
                <form onSubmit={handleSubmit} className='flex justify-between mt-10 mb-14 p-3 border border-black rounded-none w-2/5 mx-auto'>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='ingresa tu email'
                        className='text-gray-400 font-bold text-base bg-transparent w-[90%] p-2'
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        <img src={greyArrow} alt="grey arrow" className='w-[20px]'/>
                    </button>
                </form>
            </section>
            <div className='w-full h-[4px] bg-gray-400 opacity-20'></div>
        </main>
    )
}