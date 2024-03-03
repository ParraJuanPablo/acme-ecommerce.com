import CategoriesSection from "@/Components/Ecommerce/CategoriesSection";
import HotSection from "@/Components/Ecommerce/HotSection";
import PromoSection from "@/Components/Ecommerce/PromoSection";
import Layout from "@/Layouts/Layout";
import { Link, Head } from "@inertiajs/react";
import { useEffect } from 'react'

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Home" />
            <Layout auth={auth}>
                <PromoSection />
                <HotSection />
                <CategoriesSection />
            </Layout>
        </>
    );
}
