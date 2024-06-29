import Accordion from '../ui/Accordion';

const faqList = [
  {
    question: 'What are the ongoing cost?',
    answer:
      'For just $45 a month, we offer hosting and support packages that include an SSL certificate, a Content Delivery Network, and our ongoing support service, ensuring your site is safeguarded, blazing fast, accessible worldwide, and backed by our friendly team always ready to assist with any technical issues.',
  },
  {
    question: 'How much do you charge for a website design and build?',
    oldAnswer:
      "Our pricing varies based on the unique design and structure of your site, so we can't give an exact quote until we learn more about your project. However, we specialize in creating stunning, high-end, modern websites that are custom-designed just for you. Each design and line of code is crafted in-house with love, avoiding any pre-made themes or clunky templates. Once we understand the scale and scope of your vision, we can provide a detailed pricing guide. We're excited to bring your dream website to life!",
    answer:
      "Our pricing is tailored to the unique design and structure of your site, so we need to learn more about your project to provide an exact quote. But here’s the exciting part: for our very first client and for a limited time, we're offering our stunning website design and development services completely free! Yes, the only cost you'll have is for the server. Don't miss this incredible opportunity—let's bring your vision to life today!",
  },
  {
    question: 'Can I make updates to my custom website after it is completed?',
    answer:
      'Absolutely! Our custom web designs not only allow you to easily update and modify all content after development, but we also offer immediate support and assistance whenever needed. With our ongoing support and maintenance packages, major website updates and changes are taken care of, while minor tweaks and fixes are included in our web hosting packages. Plus, if you need new custom sections or pages, we can provide quick and accurate estimates. Get started with us now and experience seamless web management!',
  },
  {
    question: 'Do you create the content for our new website?',
    answer:
      'We build our sites so it’s easy for you to add and edit your own content. This keeps our prices down and gives you more control and freedom over your site. We often copy some content or products from your existing site, but it’s also a great opportunity to spring clean your copy and optimise it for the new site design. If you would like us to add your content or write new content, please request this as part of the quote.',
  },
  {
    question: 'Is SEO included in my web design project?',
    answer:
      'All our web design projects come with a free SEO guide where we equip you with all the necessary tools to monitor search engine traffic and get the best possible search results.',
  },
  {
    question: 'Do I need a blog with my website?',
    answer:
      'Having a blog integrated into your web design is a great strategy for extending your website content without cluttering your site. Ideally, you will post interesting articles or tools that other websites can backlink to as a resource.\n\n This content will have popular keyword phrases and be found in search engines, improving your site’s traffic and general rankings. For example, you can post a regular newsfeed, give away useful resources and articles related to your field, show off media publicity or give away industry tips and tricks.\n\n Blogs bring an added dimension to your website by allowing your customers to interact and engage with dynamic content on your website. We can also make it so you can add related blog posts to your existing core pages and content, so it takes the user on a complete journey, ending with a call-to-action.',
  },
];

function FaqSection() {
  return (
    <section
      className='dot-bg w-screen flex justify-center py-24 h-screen'
      id='faq-section'
    >
      <div className='flex flex-col items-center max-screen gap-28'>
        <h2 className='relative'>
          Frequently Asked Questions?{' '}
          <div className='w-6 h-6 bg-primary rounded-full absolute -top-4 -right-6' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='617'
            height='24'
            viewBox='0 0 617 24'
            fill='none'
          >
            <path
              d='M8 15.058C87.0556 15.058 166.235 8.84965 245.333 8.10202C322.99 7.36801 400.407 10.8375 478.024 10.8375C518.971 10.8375 641.7 16.4648 600.753 16.4648'
              stroke='#C1E693'
              strokeWidth='14.108'
              strokeLinecap='round'
            />
          </svg>
        </h2>

        <div className='grid lg:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
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

          <div className='flex flex-col gap-4'>
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
