'use client';

import "./globals.css";
import {UserSettingsProvider} from "@/contexts/userSettings";
import Link from "next/link";
import {LibraryActionProvider} from "@/contexts/libraryActions";
import {AuthorSettingsProvider} from "@/contexts/authorSettings";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className={'container pt-3'}>
            <UserSettingsProvider>
                    <AuthorSettingsProvider>
                        <LibraryActionProvider>
                            {children}
                        </LibraryActionProvider>
                    </AuthorSettingsProvider>
            </UserSettingsProvider>
        </div>
        </body>
        </html>
    );
}
