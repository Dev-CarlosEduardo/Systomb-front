import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div>
            Página não encontrada! <br />
            <Link to={'/'}>
                Voltar ao Home
            </Link>
        </div>
    );
}