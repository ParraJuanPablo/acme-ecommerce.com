import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Link } from "@inertiajs/react";

function Footer() {
    return (
        <footer class="bg-secondary shadow dark:bg-gray-900 mt-4">
            <div class="w-full max-w-screen-xl mx-auto md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between px-8 lg:px-12">
                    <div className="pt-4 lg:pt-0">
                        <ApplicationLogo />
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-4">
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">
                                All products
                            </Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" class="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-6 px-8 lg:px-10 lg:pb-0">
                    © 2024{" "}
                    <Link href="/" class="hover:underline">
                        Acme
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
