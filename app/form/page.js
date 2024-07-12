import Footer from "../_components/Footer";
import Header from "../_components/Header";

function page() {
  return (
    <main className="max-screen relative mx-auto flex cursor-wait flex-col items-center max-sm:overflow-x-clip">
      <Header />
      <h1>Let's build your digital presence together</h1>
      <Footer />
    </main>
  );
}

export default page;
