import Accordion from "../_ui/Accordion";
import CircleShape from "../_ui/CircleShape";

const faqList = [
  {
    question: "What are the ongoing cost?",
    answer:
      "For just $99 a month, we offer hosting and support packages that include an SSL certificate, a Content Delivery Network, and our ongoing support service, ensuring your site is safeguarded, blazing fast, accessible worldwide, and backed by our friendly team always ready to assist with any technical issues.",
  },
  {
    question: "How much do you charge for a website design and build?",
    oldAnswer:
      "Our pricing varies based on the unique design and structure of your site, so we can't give an exact quote until we learn more about your project. However, we specialize in creating stunning, high-end, modern websites that are custom-designed just for you. Each design and line of code is crafted in-house with love, avoiding any pre-made themes or clunky templates. Once we understand the scale and scope of your vision, we can provide a detailed pricing guide. We're excited to bring your dream website to life!",
    answer:
      "Our pricing is tailored to the unique design and structure of your site, so we need to learn more about your project to provide an exact quote. But here’s the exciting part: for our very first client, we're offering our stunning website design and development services completely free! Yes, the only cost you'll have is for the server. Don't miss this incredible opportunity—let's bring your vision to life today!",
  },
  {
    question: "Can I make updates to my custom website after it is completed?",
    answer:
      "Absolutely! Our custom web designs not only allow you to easily update and modify all content after development, but we also offer immediate support and assistance whenever needed. With our ongoing support and maintenance packages, major website updates and changes are taken care of, while minor tweaks and fixes are included in our web hosting packages. Plus, if you need new custom sections or pages, we can provide quick and accurate estimates.",
  },
  {
    question: "Do you create the content for our new website?",
    answer:
      "We build our sites so it’s easy for you to add and edit your own content. This keeps our prices down and gives you more control and freedom over your site. We often copy some content or products from your existing site, but it’s also a great opportunity to spring clean your copy and optimise it for the new site design. If you would like us to add your content or write new content, please request this as part of the quote.",
  },
  {
    question: "Is SEO included in my web design project?",
    answer:
      "Sure, every web design project we take on includes a free SEO guide! We'll give you all the tools you need to track your search engine traffic and achieve the best possible search results. And if you want to take it a step further, why not try our professional SEO services? We're here to help you boost your visibility and drive even more traffic to your site!",
  },
  {
    question: "Do I need a blog with my website?",
    answer:
      "Adding a blog to your website is a fantastic way to grow your content without making your site feel cluttered. By sharing fun articles or handy tools, you give other sites a reason to link back to you, which can really boost your traffic and search engine rankings. Think about posting regular updates, offering free resources, sharing industry news, or providing helpful tips and tricks. A blog makes your website more engaging, giving your visitors something to interact with. Plus, you can connect your blog posts to your main content, leading users on a complete journey that ends with a call-to-action.",
  },
];

function FaqSection() {
  return (
    <section
      className="dot-bg max-lg:px-glob-25 relative flex w-screen justify-center max-md:min-h-screen xl:max-h-[64rem]"
      id="faq-section"
    >
      <div className="max-screen relative my-24 flex flex-col items-center gap-20 sm:gap-28 lg:mx-8">
        <h2 className="relative max-sm:text-[1.5rem]">
          Frequently Asked Questions? <CircleShape />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 617 24"
            fill="none"
            className="w-[21rem] sm:w-[617px]"
          >
            <path
              d="M8 15.058C87.0556 15.058 166.235 8.84965 245.333 8.10202C322.99 7.36801 400.407 10.8375 478.024 10.8375C518.971 10.8375 641.7 16.4648 600.753 16.4648"
              stroke="#C1E693"
              strokeWidth="14.108"
              strokeLinecap="round"
            />
          </svg>
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {faqList.slice(0, 3).map((item) => {
              return (
                <Accordion
                  title={item.question}
                  answer={item.answer}
                  key={item.answer}
                />
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {faqList.slice(3).map((item) => {
              return (
                <Accordion
                  title={item.question}
                  answer={item.answer}
                  key={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
