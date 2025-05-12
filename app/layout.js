// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "ijprinterlivesolution",
//   description: "ijprinterlivesolution",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* <Navbar /> Navbar should be rendered before children */}
//         <main>{children}</main> {/* Main content area for the children */}
//         <Footer /> {/* Footer should be at the bottom of the page */}
//       </body>
//     </html>
//   );
// }




import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Script from "next/script"; // ✅ Import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Printer Support",
  description: "Printer Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16933371649"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments); console.log('gtag function called:', arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16933371649');
              console.log('gtag initialized'); // Log for debugging
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

