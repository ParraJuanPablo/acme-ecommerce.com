import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    ShoppingCartIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import ApplicationLogo from "../ApplicationLogo";
import { Link, useForm } from "@inertiajs/react";
import SearchInputFull from "../SearchInputFull";
import SearchInputButton from "../SearchInputButton";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar({ auth, isLogged }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <>
            <header className="bg-secondary">
                <nav
                    className="h-24 mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-10 lg:px-12"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <div className="h-16">
                            <ApplicationLogo />
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 w-1/2">
                        <SearchInputFull className="w-full" />
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-x-6">
                        {isLogged == true ? (
                            <>
                                <Menu
                                    as="div"
                                    className="hidden pt-2 lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                                >
                                    <div>
                                        <Menu.Button>
                                            <UserCircleIcon className="h-8" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-28 z-10 mt-2 w-40 divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            <div className="flex inline-flex gap-x-2">
                                                                <UserIcon className="h-5" />{" "}
                                                                Account
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            <div className="flex inline-flex gap-x-2">
                                                                <Cog6ToothIcon className="h-5" />{" "}
                                                                Settings
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}
                                                        >
                                                            <div className="flex inline-flex gap-x-2">
                                                                <ArrowRightStartOnRectangleIcon className="h-5" />{" "}
                                                                Log Out
                                                            </div>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Link
                                    href="/"
                                    className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                                >
                                    <ShoppingCartIcon className="h-8" />
                                </Link>
                            </>
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
                                    className="hidden rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:block"
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
                                <div className="h-16">
                                    <ApplicationLogo />
                                </div>
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
                                    {isLogged == true ? (
                                        <>
                                            <Link
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div className="flex inline-flex gap-x-2">
                                                    <UserIcon className="h-8" />{" "}
                                                    <span className="pt-0.5">
                                                        Account
                                                    </span>
                                                </div>
                                            </Link>{" "}
                                            <Link
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div className="flex inline-flex gap-x-2">
                                                    <Cog6ToothIcon className="h-8" />{" "}
                                                    <span className="pt-0.5">
                                                        Settings
                                                    </span>
                                                </div>
                                            </Link>{" "}
                                            <Link
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div className="flex inline-flex gap-x-2">
                                                    <ShoppingCartIcon className="h-8" />{" "}
                                                    <span className="pt-0.5">
                                                        Cart
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div className="flex inline-flex gap-x-2">
                                                    <ArrowRightStartOnRectangleIcon className="h-8" />{" "}
                                                    <span className="pt-0.5">
                                                        Logout
                                                    </span>
                                                </div>
                                            </Link>
                                        </>
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
