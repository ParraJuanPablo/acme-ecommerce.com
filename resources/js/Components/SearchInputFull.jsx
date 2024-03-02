import { forwardRef, useEffect, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="relative mt-2 rounded-md shadow-sm w-full">
            <input
                {...props}
                type="text"
                name="price"
                id="price"
                className="block w-full indent-28 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
            />
            <div className="absolute rounded-md bg-gray-300 inset-y-0 left-0 flex items-center">
                <select
                    id="categories"
                    name="categories"
                    className="h-full w-32 rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                    <option>All Categories</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                </select>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <PrimaryButton> <MagnifyingGlassIcon className="h-4" /> </PrimaryButton>
            </div>
        </div>
        
    );
});
