'use client';

import { signIn } from 'next-auth/react';

interface SignWithGoogleProps {}
export function ButtonGoogleSign(props: SignWithGoogleProps) {
    return (
        <button
            onClick={() => signIn('google')}
            className="h-11 w-full bg-zinc-50 text-zinc-900 rounded"
        >
            Login com o Google
        </button>
    );
}
