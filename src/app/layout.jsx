import "./globals.css";
import Navbar from "../components/Navbar"; // ঠিক path দিতে হবে

export const metadata = {
  title: "Think With Pervez",
  description: "Personal ML Blog & Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Mobile responsive করার জন্য ভিউপোর্ট মেটা ট্যাগ */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="font-sans bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
