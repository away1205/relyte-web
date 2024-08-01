/* eslint-disable react/no-unescaped-entities */
import bgBenefit from "../../public/bg-benefit-fade.svg";
import bgDesign from "../../public/illustration-custom-design2.svg";
import bgChanges from "../../public/illustration-changes.svg";
import bgCost from "../../public/illustration-cost.svg";
import bgService from "../../public/illustration-service.svg";
import { FadeInAnim } from "../_ui/Animation";

function BenefitSection() {
  return (
    <section
      className="max-lg:px-glob-25 flex min-h-screen w-screen flex-col items-center justify-center bg-[#111] bg-[length:48rem_20rem] bg-[center_bottom_-4rem] bg-no-repeat lg:mx-8 lg:bg-[length:90rem_37rem] lg:bg-[center_bottom_-10rem]"
      style={{
        backgroundImage: `url(${bgBenefit.src})`,
      }}
    >
      <div className="max-screen flex flex-col items-center justify-center gap-8 pb-28 pt-12 sm:gap-[4rem] sm:py-28 lg:mx-8 lg:py-40">
        <FadeInAnim direction="" duration={1.5}>
          <div className="flex flex-col items-center gap-2">
            <p className="max-sm:font-b5 text-white max-sm:text-[0.75rem]">
              We help to provide
            </p>
            <h2 className="max-sm:font-h7 text-balance text-center text-white max-sm:text-[1.5rem]">
              Everything you need to grow your bussiness
            </h2>
          </div>
        </FadeInAnim>

        <FadeInAnim direction="down" duration={1.5}>
          <div className="grid grid-cols-2 gap-4 max-sm:w-[20rem] sm:grid-rows-2 sm:gap-6 lg:grid-cols-3">
            <div
              className=".custom-design-card h-fit rounded-[0.4rem] bg-green bg-[length:10rem_10rem] bg-[right_top_45%] bg-no-repeat px-2 py-4 max-sm:col-span-2 sm:row-span-2 sm:h-[35rem] sm:rounded-2xl sm:bg-[length:24rem] sm:bg-[center_bottom_30%] sm:px-6 sm:py-6 lg:h-[80vh] lg:max-h-[40rem]"
              style={{
                backgroundImage: `url(${bgDesign.src})`,
              }}
            >
              <h3 className="max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]">
                Custom Design
              </h3>
              <p className="max-sm:font-b5 max-sm:w-[7.4rem] lg:w-[16rem]">
                Each of your designs is made especially for you and is 100%
                yours.
              </p>
            </div>

            <div
              className=".unlimited-changes-card rounded-[0.4rem] bg-tertiary bg-[length:8rem_6.4rem] bg-[right_bottom_0.6rem] bg-no-repeat px-2 py-4 max-sm:h-[13rem] sm:rounded-2xl sm:bg-[length:12rem] sm:bg-[right_bottom_-3rem] sm:px-6 sm:py-6 lg:bg-[right_bottom_0rem]"
              style={{
                backgroundImage: `url(${bgChanges.src})`,
              }}
            >
              <h3 className="max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]">
                Unlimited Changes
              </h3>
              <p className="max-sm:font-b5 max-sm:w-[7.4rem]">
                We'll continue to revise the design until you're 100% satisfied.
              </p>
            </div>

            <div
              className=".fixed-cost-card flex flex-col justify-end rounded-[0.4rem] bg-[#E9E4E0] bg-[length:7rem] bg-[right_top_-.8rem] bg-no-repeat px-2 py-4 sm:rounded-2xl sm:bg-[length:14rem] sm:bg-[right_top_-1.3rem] sm:px-6 sm:py-6 lg:bg-[right_top_0rem]"
              style={{
                backgroundImage: `url(${bgCost.src})`,
              }}
            >
              <h3 className="max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]">
                Fixed Cost
              </h3>
              <p className="max-sm:font-b5 max-sm:w-[8rem]">
                Our agreements come with a guarantee: no surprises and no hidden
                fees. You pay exactly what we agree upon, with no additional
                costs.
              </p>
            </div>

            <div
              className=".exclusive-card col-span-2 flex flex-col justify-end rounded-[0.4rem] bg-primary-100 bg-[length:15rem] bg-[top_right_-3.8rem] bg-no-repeat px-2 py-4 sm:rounded-2xl sm:bg-[length:20rem_20rem] sm:bg-[right_top_-3rem] sm:px-6 sm:py-6 lg:bg-[length:24.5rem_24.5rem] lg:bg-[right_top_-4rem]"
              style={{
                backgroundImage: `url(${bgService.src})`,
              }}
            >
              <h3 className="max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]">
                Exclusive Service
              </h3>
              <p className="max-sm:font-b5 w-[60%] text-pretty max-sm:w-[9rem]">
                <span className="max-sm:hidden">
                  We limit our service to only a handful of clients per month,
                  ensuring each client receives the personalized attention and
                  quality they deserve. We're not just another website agency —
                  we're your dedicated digital partner.
                </span>

                <span className="sm:hidden">
                  We limit our service to a few clients each month, ensuring
                  personalized attention and top quality. We're not just another
                  agency — we're your dedicated digital partner.
                </span>
              </p>
            </div>
          </div>
        </FadeInAnim>
      </div>
    </section>
  );
}

export default BenefitSection;
