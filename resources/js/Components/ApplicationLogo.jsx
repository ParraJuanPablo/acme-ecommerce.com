import Acme from "../../assets/Acme.png";
import {Link} from "@inertiajs/react";

export default function ApplicationLogo() {
    return (
        <Link href="/">
            <img className="h-full" src={Acme} alt="logo" />
        </Link>
    );
}
