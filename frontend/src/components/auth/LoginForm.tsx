import { useState } from "react";
import FormError from "../UI/FormError";
import PasswordInput from "../UI/PasswordInput";

type LoginFormProps = {
    onLogin?: (email: string, password: string) => void;
    onCreateAccount?: () => void;
    onForgotPassword?: () => void;
};

export default function LoginForm({
    onLogin,
    onCreateAccount,
    onForgotPassword,
}: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const emailOk = email.includes("@") && email.includes(".");
    const passwordOk = password.length >= 6;
    const canSubmit = emailOk && passwordOk;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!emailOk) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!passwordOk) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setError(null);
        onLogin?.(email, password);
    }

    return (
        <form onSubmit={handleSubmit} className = "space-y-4">
            {/* Email */}
            <div className = "space-y-1">
                <label className = "text-sm font-medium text-gray-700" htmlFor = "email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    placeholder="you@example.com"
                    required
                    />
            </div>

            {/* Password */}
            <div className = "space-y-1">
                <PasswordInput
                value={password}
                onChange={(val) => {
                    setPassword(val);
                    if (error) setError(null);
                }}
                />
            </div>

            <FormError message={error} />

            {/* Buttons */}
            <div className="space-y-2 pt-2">
                <button
                    type="submit"
                    disabled={!canSubmit} //Disabled until input is valid
                    className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
                    >
                    Log in
                </button>

                <button
                    type="button"
                    onClick={onCreateAccount}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                    >
                    Create an account
                </button>

                <button
                    type="button"
                    onClick={onForgotPassword}
                    className="w-full text-sm text-gray-600 hover:text-gray-900"
                    >
                    Forgot password?
                </button>
            </div>
        </form>
    );
}