import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Components/Navigation/Navbar';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div >
            <div>
                {children}
            </div>
        </div>
    );
}
