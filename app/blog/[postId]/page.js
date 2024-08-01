import CTASection from "../../_components/CTASection";
import Footer from "../../_components/Footer";
import { getPost, getPostById } from "../../_lib/data-service";

export async function generateMetadata({ params }) {
  const postDetail = await getPostById(params.postId);

  return {
    title: postDetail.title.rendered,
    description: postDetail.excerpt.rendered,

    openGraph: {
      images: postDetail?._embedded?.["wp:featuredmedia"]?.[0]?.link,
      title: postDetail.title.rendered,
      description: postDetail.excerpt.rendered,
      url: `https://relyte.space/blog/${params.postId}`,
      locale: "en_US",
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const post = await getPost();

  // Should have to be string
  const ids = post.map((item) => ({ postId: String(item.id) }));

  return ids;
}

async function Page({ params }) {
  const postDetail = await getPostById(params.postId);

  const datePost = new Date(postDetail.date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const readableDate = datePost.toLocaleString("en-US", options);

  return (
    <main className="animate-page-in pt-[8rem] sm:pt-[10rem]">
      <div className="mx-auto max-w-[45rem] px-6 pb-20 sm:px-10 sm:pb-40">
        <img
          src={postDetail?._embedded?.["wp:featuredmedia"]?.[0]?.link}
          alt="Photo"
          className="mb-8 aspect-video rounded-xl object-cover"
        />

        <div className="mb-12 flex flex-col gap-3 sm:mb-16">
          <h1 className="text-wrap text-[1.875rem] sm:text-[2rem] xl:text-[2.25rem]">
            {postDetail.title.rendered}
          </h1>

          <div className="flex gap-2">
            <time className="text-[#888]">{readableDate}</time>
            <span>—</span>
            <span>by {postDetail._embedded.author[0].name}</span>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: postDetail.content.rendered }}
          className="font-b2 sm:font-b1 blog-content flex flex-col gap-6 sm:gap-8"
        />
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}

export default Page;
