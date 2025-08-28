import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Malagrino",
  description: "Comida casera · Pastelería · Café de especialidad",
};

export default function RootLayout({ children}) {
  return (
    <html lang="es">
      <body className="bg-cream text-navy">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
