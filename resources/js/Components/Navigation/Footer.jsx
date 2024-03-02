import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Link } from "@inertiajs/react";

function Footer() {
    return (
        <footer className="bg-secondary shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between px-8 lg:px-12">
                    <div className="pt-4 lg:pt-0">
                        <div className="h-16">
                            <ApplicationLogo />
                        </div>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-4">
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                All products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-6 px-8 lg:px-10 lg:pb-0">
                    © 2024{" "}
                    <Link href="/" className="hover:underline">
                        Acme
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
