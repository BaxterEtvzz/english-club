import SectionText from "../layout/SectionText";
import SectionTitle from "../layout/SectionTitle";

export default function InfoSection() {
    return (
        <section className="py-16 px-4 w-full mx-auto bg-marble text-center">
            <SectionTitle>¿QUÉ ES ENGLISH CLUB?</SectionTitle>
            <SectionText>Es un espacio en el cual practicamos inglés, no son clases, son experiencias lingüísticas, Ayoraa 🤓</SectionText>
            {/* <div className=" h-14 w-11/12 mx-auto rounded-2xl shadow-lg p-1">
                <p className="text-center mx-auto mt-3.5">Anti-Academia: sin libros, ni profe aburrido</p>
            </div> */}
            <ul className="list-disc list-inside space-y-1">
                <li>Anti-Academia: sin libros, ni profe aburrido</li>
                <li>Cerveza</li>
                <li>Tarjetas con vocabulario real: desde "WTF" hasta "intersectionality"</li>
                <li>Actividades: debates, Tinder gone wrong, Pictionary woke</li>
                <li>Correcciones en vivo</li>
                <li>Todo esto por $200</li>
            </ul>
        </section>
    )
}
