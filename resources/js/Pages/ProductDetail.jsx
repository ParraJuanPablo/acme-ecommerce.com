import CTAProduct from "@/Components/Ecommerce/ProductDetail/CTAProduct";
import DetailsProduct from "@/Components/Ecommerce/ProductDetail/DetailsProduct";
import Layout from "@/Layouts/Layout";
import {  Head } from "@inertiajs/react";

export default function ProductList({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Home" />
            <Layout auth={auth}>
                <CTAProduct />
                <DetailsProduct />
            </Layout>
        </>
    );
}
