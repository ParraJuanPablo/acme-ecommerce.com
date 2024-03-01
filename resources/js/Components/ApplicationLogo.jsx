import Acme from "../../assets/Acme.png";
import {Link} from "@inertiajs/react";

export default function ApplicationLogo(props) {
    return (
        <Link href="/">
            <img className="h-16" src={Acme} alt="logo" />
        </Link>
    );
}
