import ChekcoutForm from "@/Components/Ecommerce/CheckoutForm";
import Layout from "@/Layouts/Layout";
import {  Head } from "@inertiajs/react";

export default function ProductDetail({ auth }) {

    return (
        <>
            <Head title="Checkout" />
            <Layout auth={auth}>
                <ChekcoutForm />
            </Layout>
        </>
    );
}
