import AnimatedLink from "../_ui/AnimatedLink";

function Blog() {
  return (
    <section className="my-auto px-4">
      {/* <div className="mt-12 flex w-full flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}

      {/* <button className="py-8">More Article</button> */}

      <div className="flex flex-col items-center gap-8 py-10">
        <img
          src="/blog.jpg"
          alt="a woman working a blog post for her lovely audience"
          className="h-auto w-[17.5rem] rounded-xl"
        />

        <p className="text-wrap text-center text-sm md:text-xl xl:w-[34rem]">
          Hi there! We&apos;re still crafting some great content for you. <br />
          <span className="font-semibold">
            Stay tuned, and we&apos;ll be sharing with you soon!
          </span>
        </p>

        <div class="pb-10 text-center">
          <AnimatedLink href="/">
            <button class="rounded-full bg-indigo-600 px-12 py-3 font-semibold text-white hover:bg-indigo-500">
              HOME
            </button>
          </AnimatedLink>
        </div>
      </div>
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
