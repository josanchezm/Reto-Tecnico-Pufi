import qrCode from '../assets/images/QR_Codepng.png'
import shield from '../assets/images/shield.jpg'
import facebook from '../assets/images/facebook-logo.png'
import twitter from '../assets/images/twitter-128.png'
import instagram from '../assets/images/pngfind.com-instagram-png-23339.png'
import brandLive from '../assets/images/brandlive.png'

export default function Footer() {
    return (
        <footer>
            <section className='flex justify-between py-10 px-12'>
                <h3 className="text-4xl font-extrabold relative cursor-pointer">Pufi<span className='text-sm absolute right--1 top-0'>®</span></h3>
                <div className='flex items-start h-full'>
                    <ul className='font-bold text-xs px-2 cursor-pointer 2xl:pr-[120px] 2xl:text-sm 2xl:px-16 xl:text-xs xl:px-12 xl:pr-[65px]'>
                        <li>PUFI RAIN</li>
                        <li>PUFI PUFF</li>
                        <li>PUFI CART</li>
                        <li>PUFI NAP</li>
                    </ul>
                    <div className='2xl:h-[80px] h-[70px] w-1 bg-gray-200'></div>
                    <ul className='font-bold text-start text-xs px-2 cursor-pointer 2xl:text-sm 2xl:px-16 xl:text-xs xl:px-12'>
                        <li>CONTACTO</li>
                        <li>AYUDA</li>
                        <li>CÓMO COMPRAR</li>
                        <li>TÉRMINOS & CONDICIONES</li>
                    </ul>
                    <div className='2xl:h-[80px] h-[70px] w-1 bg-gray-200'></div>
                    <ul className='text-xs px-2 cursor-pointer 2xl:text-sm 2xl:px-16 xl:text-xs xl:px-12'>
                        <li className='font-bold text-sm pb-3'>COMPRA 100% SEGURA</li>
                        <li className='flex gap-2 justify-center items-center font-semibold text-gray-400 text-xs'>
                            <img src={qrCode} alt="qr code" className='w-[35px] min-w-[17px]'/>
                            <img src={shield} alt="shield" className='w-[35px] min-w-[17px]'/>
                            <p className='w-2/5'>COMPRÁ CON LA GARANTÍA DE PUFI</p>
                        </li>
                    </ul>
                    <div className='2xl:h-[80px] h-[70px] w-1 bg-gray-200'></div>
                    <ul className='font-bold text-xs px-2 flex gap-2 justify-center items-center cursor-pointer 2xl:text-sm 2xl:px-16 xl:text-xs xl:px-12'>
                        <li>SEGUINOS EN</li>
                        <li><img src={facebook} alt="facebook" className='w-[25px] min-w-[17px]'/></li>
                        <li><img src={twitter} alt="twitter" className='w-[25px] min-w-[17px]'/></li>
                        <li><img src={instagram} alt="instagram" className='w-[25px] min-w-[17px]'/></li>
                    </ul>
                </div>
            </section>
            <div className='h-[2px] w-[95%] mx-auto bg-gray-200'></div>
            <section className='flex justify-between px-12 py-4 text-gray-400 text-base font-normal'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
                <img src={brandLive} alt="brand live" className='w-[120px]'/>
            </section>
        </footer>
    )
}