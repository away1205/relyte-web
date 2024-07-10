import bgBenefit from '../../public/bg-benefit-fade.svg';
import bgDesign from '../../public/illustration-custom-design2.svg';
import bgChanges from '../../public/illustration-changes.svg';
import bgCost from '../../public/illustration-cost.svg';
import bgService from '../../public/illustration-service.svg';
import { FadeInAnim } from '../ui/Animation';

function BenefitSection() {
  return (
    <section
      className='min-h-screen bg-[#111] flex flex-col w-screen items-center justify-center bg-no-repeat bg-[center_bottom_-4rem] lg:bg-[center_bottom_-10rem] bg-[length:48rem_20rem] lg:bg-[length:90rem_37rem] max-lg:px-glob-25'
      style={{
        backgroundImage: `url(${bgBenefit.src})`,
      }}
    >
      <div className='flex flex-col max-screen items-center justify-center gap-[4rem] py-28 lg:py-40'>
        <FadeInAnim direction='up' duration={1.5}>
          <div className='flex flex-col items-center gap-2'>
            <p className='text-white max-sm:font-b5'>We help to provide</p>
            <h2 className='text-white text-center max-sm:font-h7 text-balance'>
              Everything you need to grow your bussiness
            </h2>
          </div>
        </FadeInAnim>

        <FadeInAnim direction='down' duration={1.5}>
          <div className='grid grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 gap-6'>
            <div
              className='.custom-design-card bg-green max-sm:col-span-2 sm:row-span-2 rounded-[0.4rem] sm:rounded-2xl px-2 py-4 sm:px-6 sm:py-6 h-fit sm:h-[35rem] lg:h-[80vh] bg-no-repeat sm:bg-[center_bottom_30%] bg-[right_top_45%] bg-[length:10rem_10rem] sm:bg-[length:24rem]'
              style={{
                backgroundImage: `url(${bgDesign.src})`,
              }}
            >
              <h5 className='mb-2 max-sm:font-h9 font-semibold'>
                Custom Design
              </h5>
              <p className='max-sm:font-b5 max-sm:w-[7.4rem]'>
                Each of your designs is made especially for you and is 100%
                yours.
              </p>
            </div>

            <div
              className='.unlimited-changes-card bg-tertiary rounded-[0.4rem] sm:rounded-2xl px-2 py-4 sm:px-6 sm:py-6 bg-no-repeat bg-[right_bottom_0.6rem] sm:bg-[right_bottom_-3rem] lg:bg-[right_bottom_0rem] bg-[length:8rem_6.4rem] sm:bg-[length:14rem] max-sm:h-[13rem]'
              style={{
                backgroundImage: `url(${bgChanges.src})`,
              }}
            >
              <h5 className='mb-2 max-sm:font-h9 font-semibold'>
                Unlimited Changes
              </h5>
              <p className='max-sm:font-b5 max-sm:w-[7.4rem]'>
                We'll continue to revise the design until you're 100% satisfied.
              </p>
            </div>

            <div
              className='.fixed-cost-card bg-[#E9E4E0] rounded-[0.4rem] sm:rounded-2xl px-2 py-4 sm:px-6 sm:py-6 flex flex-col justify-end bg-no-repeat bg-[right_top_-.8rem] sm:bg-[right_top_-1.3rem] lg:bg-[right_top_0rem] bg-[length:7rem] sm:bg-[length:14rem]'
              style={{
                backgroundImage: `url(${bgCost.src})`,
              }}
            >
              <h5 className='mb-2 max-sm:font-h9 font-semibold'>Fixed Cost</h5>
              <p className='max-sm:font-b5 max-sm:w-[7.4rem]'>
                Our agreements come with a guarantee: no surprises and no hidden
                fees. You pay exactly what we agree upon, with no additional
                costs.
              </p>
            </div>

            <div
              className='.exclusive-card bg-primary-100 col-span-2 rounded-[0.4rem] sm:rounded-2xl px-2 py-4 sm:px-6 sm:py-6 bg-no-repeat bg-[top_-1rem_right_-6rem] sm:bg-[right_top_-3rem] lg:bg-[right_top_-4rem] bg-[length:16rem_14rem] sm:bg-[length:20rem_20rem] lg:bg-[length:24.5rem_24.5rem] flex flex-col justify-end'
              style={{
                backgroundImage: `url(${bgService.src})`,
              }}
            >
              <h5 className='mb-2 max-sm:font-h9 font-semibold'>
                Exclusive Service
              </h5>
              <p className='text-balance w-[60%] max-sm:font-b5 max-sm:w-[7.4rem]'>
                We limit our service to only a handful of clients per month,
                ensuring each client receives the personalized attention and
                quality they deserve. We're not just another website agency —
                we're your dedicated website partner.
              </p>
            </div>
          </div>
        </FadeInAnim>
      </div>
    </section>
  );
}

export default BenefitSection;
