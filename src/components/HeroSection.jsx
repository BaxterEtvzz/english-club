import mago from "../assets/svg/mago.svg"
import texto from "../assets/svg/texto.svg"
import SectionText from "../layout/SectionText"

export default function HeroSection() {
    return (
        <section className="py-20 bg-marble text-center px-4">
            {/* <h1 style={{ fontFamily: 'Newsreader, sans-serif' }} className="text-7xl font-bold mb-4" className="text-7xl font-bold mb-4">No son clases, son experiencias lingüísticas 🤓</h1> */}
            <h1 className="text-6xl text-shadow-lg font-newsreader font-bold mb-4">Bienvenidx al English Club</h1>
            <div className="mx-auto max-w-2xl mb-6">
                <img
                    src={mago}
                    alt="Experiencias lingüísticas"
                    className="w-1/2 max-w-2xl mx-auto"
                />
            </div>
            <SectionText>Where grammar meets beer (and real-life conversations)</SectionText>
        </section>
    )
}
