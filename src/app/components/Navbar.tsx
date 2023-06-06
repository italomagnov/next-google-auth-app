import Link from 'next/link';
import { ProfileIcon } from './ProfileIcon';

interface NavbarProps {}
export function Navbar(props: NavbarProps) {
    return (
        <nav className="flex items-center justify-between fixed left-0 right-0 p-8 h-11 bg-violet-900 text-zinc-50">
            <Link
                href={'/'}
                className="font-bold text-2xl"
            >
                Next Auth
            </Link>
            <ProfileIcon />
        </nav>
    );
}
