import baxter from '../assets/svg/baxi.svg';
import paul from '../assets/svg/paul.svg';
import wework from '../assets/svg/wework.svg';
import SectionText from '../layout/SectionText';
import SectionTitle from '../layout/SectionTitle';

import { useNavigate } from 'react-router-dom';


export default function Team() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sesion-gratis');
    };

    return (
        <section className="py-16 px-4 w-full mx-auto bg-marble">
            <SectionTitle>Conócenos</SectionTitle>
            <div className='h-full  w-11/12 mx-auto rounded-2xl p-4 grid gap-4 mb-10 px-10 lg:w-1/3'>
                <img
                    src={paul}
                    alt="Experiencias lingüísticas"
                    className="w-2/3 max-w-2xl mx-auto"
                />
                <div className='mx-auto bg-black rounded-2xl p-2 shadow-xl mb-5'>
                    <p className="text-center font-dosis text-xl text-white"><strong>Paul:</strong> No es tu profe, es el compa que te salva de sonar como Google Translate.</p>
                </div>
            </div>
            <div className='h-2/3  w-11/12 mx-auto rounded-2xl p-4 grid gap-4 mb-10 px-10 lg:w-1/3'>
                <img
                    src={baxter}
                    alt="Experiencias lingüísticas"
                    className="w-2/3 max-w-2xl mx-auto pt-10"
                />
                <div className='mx-auto bg-black rounded-2xl p-2 shadow-xl mb-5'>
                    <p className="text-center font-dosis text-xl text-white"><strong>Baxter:</strong> Tu host personal quién se asegura de que estés tipsy but learning.</p>
                </div>
            </div>
            <SectionTitle>¿Dónde nos vemos o qué?</SectionTitle>
            <div className="mx-auto lg:w-2xl mb-6">
                <img
                    src={wework}
                    alt="wework"
                    className="w-3/12 sm:w-1/3 lg:w-2/12 mx-auto"
                />
            </div>
            <SectionText>
                <a
                    href="https://maps.app.goo.gl/HXNzmaBr7PMBAb3H7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 text-center"
                >
                    Ver ubicación en Google Maps
                </a>
            </SectionText>

            <p className='text-center font-birthstone text-5xl my-8'>fancy pero con propósito</p>

            <div className="flex justify-center">
                <button
                    onClick={handleClick}
                    className="border rounded-2xl bg-black text-white shadow-lg border-black px-6 py-2 uppercase hover:bg-black hover:text-white transition"
                >
                    Quiero mi primera sesión gratis
                </button>
            </div>

        </section >
    )
}
