import bgBenefit from '../../public/bg-benefit.svg';
import bgDesign from '../../public/illustration-custom-design.svg';
import bgChanges from '../../public/illustration-changes.svg';
import bgCost from '../../public/illustration-cost.svg';
import bgService from '../../public/illustration-service.svg';
import { FadeInAnim } from '../ui/Animation';

function BenefitSection() {
  return (
    <section
      className='min-h-screen bg-black flex flex-col w-screen items-center justify-center bg-cover bg-no-repeat bg-[center_bottom_-10rem]'
      style={{
        backgroundImage: `url(${bgBenefit.src})`,
        backgroundSize: '90rem 37rem',
      }}
    >
      <div className='flex flex-col max-screen items-center justify-center gap-[4rem] md:py-40'>
        <FadeInAnim direction='up' duration={1.5}>
          <div className='flex flex-col items-center'>
            <p className='text-white'>We help to provide</p>
            <h2 className='text-white'>
              Everything you need to grow your bussiness
            </h2>
          </div>
        </FadeInAnim>

        <FadeInAnim direction='down' duration={1.5}>
          <div className='grid grid-cols-3 grid-rows-2 bento-grid'>
            <div
              className='.custom-design-card bg-green row-span-2 rounded-2xl px-6 py-6 h-[80vh] bg-cover bg-no-repeat bg-[center_bottom_30%]'
              style={{
                backgroundImage: `url(${bgDesign.src})`,
                backgroundSize: '30rem',
              }}
            >
              <h5 className='mb-2 font-semibold'>Custom Design</h5>
              <p>
                Each of your designs is made especially for you and is 100%
                yours.
              </p>
            </div>

            <div
              className='.unlimited-changes-card bg-tertiary rounded-2xl px-6 py-6 bg-cover bg-no-repeat bg-[right_bottom_0rem]'
              style={{
                backgroundImage: `url(${bgChanges.src})`,
                backgroundSize: '14rem',
              }}
            >
              <h5 className='mb-2 font-semibold'>Unlimited Changes</h5>
              <p>
                We'll continue to revise the design until you're 100% satisfied.
              </p>
            </div>

            <div
              className='.fixed-cost-card bg-[#E9E4E0] rounded-2xl px-6 py-6 flex flex-col justify-end bg-cover bg-no-repeat bg-[right_top_0rem]'
              style={{
                backgroundImage: `url(${bgCost.src})`,
                backgroundSize: '14rem',
              }}
            >
              <h5 className='mb-2 font-semibold'>Fixed Cost</h5>
              <p>
                Our agreements come with a guarantee: no surprises and no hidden
                fees. You pay exactly what we agree upon, with no additional
                costs.
              </p>
            </div>

            <div
              className='.exclusive-card bg-primary-100 col-span-2 rounded-2xl px-6 py-6 bg-cover bg-no-repeat bg-[right_bottom_0rem] flex flex-col justify-end'
              style={{
                backgroundImage: `url(${bgService.src})`,
                backgroundSize: '24.5rem',
              }}
            >
              <h5 className='mb-2 font-semibold'>Exclusive Service</h5>
              <p className='text-balance w-[60%]'>
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
