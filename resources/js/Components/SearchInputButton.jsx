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
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <PrimaryButton> <MagnifyingGlassIcon className="h-4" /> </PrimaryButton>
            </div>
        </div>
        
    );
});
