import Footer from "@/Components/Navigation/Footer";
import Navbar from "@/Components/Navigation/Navbar";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {console.log(auth)}
            <Head title="Home" />
            <Navbar />
            <Footer />
        </>
    );
}
