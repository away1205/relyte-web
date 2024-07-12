import Header from "../_components/Header";
import Footer from "../_components/Footer";
import HeroBlog from "./HeroBlog";
import Blog from "./Blog";

function page() {
  return (
    <main className="max-screen relative mx-auto flex min-h-screen cursor-wait flex-col items-center max-sm:overflow-x-clip">
      <Header />
      <HeroBlog />
      <Blog />
      <Footer />
    </main>
  );
}

export default page;
