'use client';

//import { Inter } from "next/font/google";
import "./globals.css";
import {UserSettingsProvider} from "@/contexts/userSettings";
import {BookSettingsProvider} from "@/contexts/bookSettings";
import {AuthorSettingsProvider} from "@/contexts/authorSettings";
import {CategorySettingsProvider} from "@/contexts/categorySettings";
import {LibraryActionProvider} from "@/contexts/libraryActions";


export default function RootLayout({children}) {
  return (
      <html lang="en">
      <body>
          <div className={'p-4'}>

                <UserSettingsProvider>
                    <BookSettingsProvider>
                        <AuthorSettingsProvider>
                            <CategorySettingsProvider>
                                <LibraryActionProvider>
                                    {children}
                                </LibraryActionProvider>
                            </CategorySettingsProvider>
                        </AuthorSettingsProvider>
                    </BookSettingsProvider>
                </UserSettingsProvider>

          </div>
      </body>
      </html>
  );
}






// const inter = Inter({ subsets: ["latin"] });
//
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
