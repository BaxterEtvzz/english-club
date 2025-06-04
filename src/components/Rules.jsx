import rules from '../assets/svg/rules.svg';

import { useNavigate } from 'react-router-dom';


export default function Rules() {
    return (
        <section className="py-20 bg-white text-center px-4">
            {/* <h1 style={{ fontFamily: 'Newsreader, sans-serif' }} className="text-7xl font-bold mb-4" className="text-7xl font-bold mb-4">No son clases, son experiencias lingüísticas 🤓</h1> */}
            {/* <h1 className="text-6xl text-shadow-lg font-newsreader font-bold mb-4">Bienvenidx al English Club</h1> */}
            <div className="mx-auto max-w-2xl mb-6">
                <img
                    src={rules}
                    alt="Experiencias lingüísticas"
                    className="w-1/2 max-w-2xl mx-auto"
                />
            </div>
            <p className="text-xl mb-6 font-oswald ">REGLAS RÁPIDAS</p>
            <p className="text-xl mb-6 font-dosis">Puedes decir “fuck”, pero no “fuck you”</p>
            <p className="text-xl mb-6 font-dosis">Mente abierta obligatoria</p>
            <p className="text-xl mb-6 font-dosis">Pronombres visibles</p>
        </section>
    )
}
