export async function generateMetadata(props) {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/testimonials");
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

const Layout = ({ children }) => {
  return <div>{children}</div>;
};
export default Layout;
