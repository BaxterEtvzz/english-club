import { useNavigate } from 'react-router-dom';


export default function Register() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sesion-gratis');
    };

    return (
        <section className="py-16 px-4 max-w-3xl mx-auto">
        </section >
    )
}
