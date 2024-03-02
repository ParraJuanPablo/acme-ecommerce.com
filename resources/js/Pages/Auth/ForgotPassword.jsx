import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Navigation/Footer";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex justify-center ">
                        <div className="h-20">
                            <ApplicationLogo />
                        </div>
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
                        Forgot your password?
                    </h2>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        No problem. Just let us know your email address and we
                        will email you a password reset link that will allow you
                        to choose a new one.
                    </div>
                </div>

                <div className="mt-10 mb-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />

                        <div className="flex items-center justify-center mt-8 w-full h-12">
                            <PrimaryButton
                                className="w-full h-8 justify-center"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
