import bgHeader1 from '../assets/images/bg-header-1.jpg'
import puff from '../assets/images/puff.png'
import umbrella from '../assets/images/umbrella.png'
import cart from '../assets/images/cart.png'
import nap from '../assets/images/nap.png'
import whiteArrow from '../assets/images/arrow.png'

export default function Header() {
    return (
        <header className="flex flex-col justify-center py-10 w-full bg-no-repeat bg-cover text-white" style={ {backgroundImage: `url(${bgHeader1})`} }>
            <nav className="flex justify-between px-8 pb-[190px]">
                <h2 className="text-5xl font-bold relative cursor-pointer">Pufi<span className='text-sm absolute right--1 top-0'>®</span></h2>
                <ul className='flex text-xl font-semibold'>
                    <li className='border-r px-5 border-white cursor-pointer'>
                        <img src={puff} className="w-8 h-8 mx-auto pb-1" alt="puff" />
                        <span>PUFI PUFF</span>
                    </li>
                    <li className='border-r px-5 border-white cursor-pointer'>
                        <img src={umbrella} className="w-8 h-8 mx-auto pb-1" alt="umbrella" />
                        <span>PUFI RAIN</span>
                    </li>
                    <li className='border-r px-5 border-white cursor-pointer'>
                        <img src={cart} className="w-8 h-8 mx-auto pb-1" alt="cart" />
                        <span>PUFI CART</span>
                    </li>
                    <li className='px-5 cursor-pointer'>
                        <img src={nap} className="w-8 h-8 mx-auto pb-1" alt="nap" />
                        <span>PUFI NAP</span>
                    </li>
                </ul>
                <ul className='flex text-xs font-light h-6 justify-center items-center'>
                    <li className='flex justify-center items-center gap-2 cursor-pointer border-r px-3 border-white'>
                        <span>MI CUENTA</span>
                        <img src={whiteArrow} alt="white arrow" className='w-2 h-2 -rotate-90'/>
                    </li>
                    <li className='px-3 cursor-pointer'>MI COMPRA</li>
                </ul>
            </nav>
            <h1 className='text-4xl font-normal w-[50%] mx-auto pb-[260px] leading-tight xl:text-7xl lg:text-5xl'>ESTAR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
            <button className='px-1 py-3 bg-transparent border-2 rounded-none border-white w-[130px] text-xs mx-auto font-normal mb-[105px]'>SHOP</button>
            <ul className='flex gap-2 justify-center'>
                <li>
                    <button className='bg-white rounded-full w-3 h-3 focus: ring-white focus: p-[.75px]'></button>
                </li>
                <li>
                    <button className='bg-white rounded-full w-3 h-3 focus: ring-white focus: p-[.75px]'></button>
                </li>
                <li>
                    <button className='bg-white rounded-full w-3 h-3 focus: ring-white focus: p-[.75px]'></button>
                </li>
            </ul>
        </header>  
    )
} 