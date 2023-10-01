import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export async function generateMetadata(props) {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]["page"],
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: [JSON[0]["image"]],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
