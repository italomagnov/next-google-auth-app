import { NextAuthProvider } from './Provider';
import { Navbar } from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen bg-zinc-900 ${inter.className}`}>
                <NextAuthProvider>
                    <div className="max-w-5xl mx-auto px-8">
                        <Navbar />
                        <div>{children}</div>
                    </div>
                </NextAuthProvider>
            </body>
        </html>
    );
}
