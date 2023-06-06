'use client';

import { ButtonGoogleSign } from './ButtonGoogleSign';
import { useSession } from 'next-auth/react';

interface LoginProps {}
export function Login(props: LoginProps) {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div className="flex flex-col gap-2 items-center justify-center text-zinc-50 font-medium text-5xl">
                <span>{session?.user?.name}</span>
                <span>{session?.user?.email}</span>
            </div>
        );
    }
    return (
        <div className="w-full max-w-sm">
            <form
                action=""
                className="flex flex-col gap-2 text-zinc-50"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Email:</label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="h-11 rounded bg-zinc-700 p-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="">Senha:</label>
                    <input
                        type="password"
                        placeholder="Senha"
                        className="h-11 rounded bg-zinc-700 outline-zinc-600 p-4"
                    />
                </div>
                <button
                    type="submit"
                    className="h-11 mt-2 bg-emerald-500 rounded"
                >
                    Entrar
                </button>
                <div className="flex items-center py-4">
                    <div className="flex-grow h-px bg-gray-400"></div>

                    <span className="flex-shrink text-base text-gray-500 px-4 font-light">
                        ou
                    </span>

                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>
            </form>
            <ButtonGoogleSign />
        </div>
    );
}
