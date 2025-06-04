import SectionTitle from "../layout/SectionTitle";
import SectionText from "../layout/SectionText";
import friends from '../assets/png/friends.png';
import eyes from '../assets/png/eyes.png';

export default function PromoSection() {
    return (
        <section className="bg-black Newsreader text-white py-16 text-center px-4">
            <SectionTitle>PROMOS</SectionTitle>
            <SectionText>Primer english club gratis 🍻</SectionText>
            <div className="mx-auto lg:w-2xl mb-6">
                <img
                    src={eyes}
                    alt="friends"
                    className="w-3/12 sm:w-1/3 lg:w-2/12 mx-auto"
                />
            </div>
            <SectionText>Trae a un amigx y ambos vienen gratis en la siguiente sesión 🫂</SectionText>
            <div className="mx-auto lg:w-2xl mb-6">
                <img
                    src={friends}
                    alt="friends"
                    className="w-1/2 sm:w-1/3 lg:w-1xl mx-auto"
                />
            </div>
        </section>
    )
}
