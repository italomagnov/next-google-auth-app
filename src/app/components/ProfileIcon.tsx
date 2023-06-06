'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

interface ProfileIconProps {}

export function ProfileIcon(props: ProfileIconProps) {
    const { data: session, status } = useSession();

    console.log(session?.user?.image);

    if (status === 'authenticated') {
        return (
            <div className="flex gap-2">
                <Image
                    src={session?.user?.image as string}
                    alt="imagem de perfil do google"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return;
}
