import ProductList from "@/Components/Ecommerce/ProductList";
import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import { useEffect } from 'react'

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Home" />
            <Layout auth={auth}>
                <ProductList />
            </Layout>
        </>
    );
}