import AnimatedLink from "../_ui/AnimatedLink";
import { getPost } from "../_lib/data-service";
import Link from "next/link";

export const revalidate = 3600;

async function Blog() {
  const post = await getPost();

  return (
    <section className="mb-[5.5rem] px-4 sm:mb-[8.75rem] xl:mb-[10rem]">
      <div className="mt-12 flex w-full flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-20">
        {post?.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title.rendered}
              excerpt={item.excerpt.rendered}
              date={item.date}
              image={item?._embedded?.["wp:featuredmedia"]?.[0]?.link}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({ excerpt, title, date, image, id }) {
  const datePost = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const readableDate = datePost.toLocaleString("en-US", options);

  return (
    <AnimatedLink href={`/blog/${id}`}>
      <div className="flex flex-col gap-5">
        <div className="w-[full] border-b border-black pb-5 sm:pb-[1.75rem]">
          <img src={image} alt="Relyte" className="aspect-video object-cover" />
        </div>

        <article className="flex flex-col gap-2">
          <time>{readableDate}</time>
          <h1 className="font-h7 text-left">{title}</h1>
          <div
            className="font-b3 line-clamp-2 text-[#888888]"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </article>
      </div>
    </AnimatedLink>
  );
}

export default Blog;
