import Image from "next/image";

function Blog() {
  return (
    <section className="border-t-2 border-[#111] px-4">
      <div className="mt-12 flex w-full flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button className="py-8">More Article</button>
    </section>
  );
}

function Card() {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[14rem] w-[full] border-b border-black bg-green pb-4">
        {/* <Image
          src={"./photo-blog.jpg"}
          alt="Relyte"
          layout="fill"
          objectFit="cover"
        /> */}
      </div>

      <article className="flex flex-col gap-2">
        <time>March 17, 2024</time>
        <h1 className="font-h7 text-left">Lorem ipsum amet consectetur</h1>
        <p className="font-b3 line-clamp-2 text-[#888888]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          exercitationem doloremque vitae quis facere commodi, voluptatem eius
          ullam magni quia dolorum quasi quas veritatis reiciendis deserunt,
          officia architecto repudiandae porro.
        </p>
      </article>
    </div>
  );
}

export default Blog;
