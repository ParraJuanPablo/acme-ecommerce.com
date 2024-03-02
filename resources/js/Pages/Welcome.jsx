import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import { useEffect } from 'react'

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    useEffect(() => {
      console.log(auth.user);
    }, [auth, ]);
    

    return (
        <>
            <Head title="Home" />
            <Layout auth={auth}>

            </Layout>
        </>
    );
}
