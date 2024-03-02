import Footer from '@/Components/Navigation/Footer';
import Navbar from '@/Components/Navigation/Navbar';
import { useState, useEffect } from 'react';


export default function Layout({ auth, children }) {
    const [logged, setLogged] = useState(false)


    useEffect(() => {
        console.log(auth.user);
        if (auth.user == null){
            setLogged(false);
        }else{
            setLogged(true);
        }
      }, [auth, ]);

    return (
        <>
            <Navbar isLogged={logged} />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
}
