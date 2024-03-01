import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ApplicationLogo from "../ApplicationLogo";
import { Link } from "@inertiajs/react";
import SearchInputFull from "../SearchInputFull";
import SearchInputButton from "../SearchInputButton";

export default function Navbar(auth) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-secondary">
                <nav
                    className="h-24 mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-10 lg:px-12"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <ApplicationLogo />
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 w-1/2">
                        <SearchInputFull className="w-full" />
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-x-6">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="hidden rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:block"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex justify-between items-center gap-x-6">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Acme</span>
                                <ApplicationLogo />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6">
                                    {auth.user ? (
                                        <Link
                                            href={route("dashboard")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href="/login"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Sign up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
                <div className="lg:hidden">
                    <div className="flex justify-center w-full ">
                        <div className="px-4">
                            <SearchInputButton className="" />
                        </div>
                    </div>
                    <div className="overflow-x-auto mt-4 px-4">
                        <ul className="flex inline-flex items-center justify-center gap-x-4 mb-4">
                            <li className="bg-primary truncate text-white font-bold py-1 px-4 rounded-full">
                                <Link href="#">Category 1</Link>
                            </li>
                            <li className="bg-primary truncate text-white font-bold py-1 px-4 rounded-full">
                                <Link href="#">Category 2</Link>{" "}
                            </li>
                            <li className="bg-primary truncate text-white font-bold py-1 px-4 rounded-full">
                                <Link href="#">Category 3</Link>{" "}
                            </li>
                            <li className="bg-primary truncate text-white font-bold py-1 px-4 rounded-full">
                                <Link href="#">Category 4</Link>{" "}
                            </li>
                            <li className="bg-primary truncate text-white font-bold py-1 px-4 rounded-full">
                                <Link href="#">Category 5</Link>{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
