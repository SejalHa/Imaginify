import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

// import { ClerkProvider, SignIn } from "@clerk/nextjs";

import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'



const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'


});

export const metadata: Metadata = {
  title: "Imagify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }} >
    <html lang="en">

      <body className={cn("font-IBMPlex  antialiased", IBMPlex.variable)}>
      <SignedOut>
          <SignInButton />
        </SignedOut>
       
          
        {children}
        </body>
    </html>
   </ClerkProvider>
    
  );
}
