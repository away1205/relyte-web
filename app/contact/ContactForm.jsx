"use client";
import { useForm } from "react-hook-form";
import Chip from "../_components/Chip";
import MagneticAnim from "../_ui/MagneticAnim";
import { useRouter } from "next/navigation";

function ContactForm() {
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();

  const { errors } = formState;

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Form submitted successfully", response);
        router.push("success");
      } else {
        // Handle server errors
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle network errors
      console.error("An error occurred:", error);
    }
  }

  return (
    <section className="flex w-screen justify-center bg-[#111]">
      <div className="max-screen relative w-full px-4 py-[4.5rem] sm:px-10 sm:py-[6.75rem]">
        <MagneticAnim>
          <div className="absolute right-6 top-0 h-16 w-16 -translate-y-1/2 rounded-full bg-white sm:h-[5rem] sm:w-[5rem]">
            <img
              src="/scroll-anim.gif"
              alt="scroll down"
              className="h-fit w-fit rotate-45"
            />
          </div>
        </MagneticAnim>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-[3.5rem] flex flex-col border-t border-[#888] pt-6 sm:flex-row sm:gap-6">
            <span className="font-h9 sm:font-h8 text-[#888888]">01</span>

            <div className="flex w-full flex-col gap-4">
              <label htmlFor="name" className="font-h7 sm:font-h6 text-white">
                What&apos;s your name? *
              </label>
              <input
                id="name"
                placeholder="Charlotte"
                required
                className="bg-transparent text-[#888]"
                aria-required
                name="name"
                {...register("name", { required: "Please enter your name" })}
              />
            </div>
          </fieldset>

          <fieldset className="mb-[3.5rem] flex w-full flex-col border-t border-[#888] pt-6 sm:flex-row sm:gap-6">
            <span className="font-h9 sm:font-h8 text-[#888888]">02</span>

            <div className="flex w-full flex-col gap-4">
              <label htmlFor="email" className="font-h7 sm:font-h6 text-white">
                What&apos;s your email? *
              </label>
              <input
                id="email"
                placeholder="Charlotte@relyte.space"
                required
                className="w-full bg-transparent text-[#888]"
                aria-required
                name="email"
                type="email"
                {...register("email", {
                  required: "Please enter your valid email address",
                })}
              />
            </div>
          </fieldset>

          <fieldset className="mb-[3.5rem] flex flex-col border-t border-[#888] pt-6 sm:flex-row sm:gap-6">
            <span className="font-h9 sm:font-h8 text-[#888888]">04</span>

            <div className="flex flex-col gap-4">
              <legend className="font-h7 sm:font-h6 text-white">
                What service are you looking for? *
              </legend>

              <div className="flex flex-wrap gap-3">
                <Chip
                  label="web"
                  text="Web design & build"
                  value="web"
                  uniqueNum={1}
                  type="checkbox"
                  defaultChecked={true}
                  register={register}
                  name={"service"}
                />
                <Chip
                  label="seo"
                  text="SEO"
                  value="seo"
                  uniqueNum={0}
                  type="checkbox"
                  register={register}
                  name={"service"}
                />
              </div>

              {errors?.service?.message && (
                <p className="text-red-400">{errors.service.message}</p>
              )}
            </div>
          </fieldset>

          <fieldset className="mb-[3.5rem] flex flex-col border-t border-[#888] pt-6 sm:flex-row sm:gap-6">
            <span className="font-h9 sm:font-h8 text-[#888888]">05</span>

            <div className="flex flex-col gap-4">
              <legend className="font-h7 sm:font-h6 text-white">
                How much is your budget? *
              </legend>

              <div className="flex flex-wrap gap-3">
                <Chip
                  type="radio"
                  label="100-500"
                  text={"$100 - $500"}
                  uniqueNum={2}
                  name="budget"
                  required={true}
                  defaultChecked={true}
                  register={register}
                  value={"$100 - $500"}
                />
                <Chip
                  type="radio"
                  label="500-1000"
                  text={"$500 - $1000"}
                  uniqueNum={3}
                  name="budget"
                  required={true}
                  register={register}
                  value={"$500 - $1000"}
                />
                <Chip
                  type="radio"
                  label="1000-3000"
                  text={"$1000 - $3000"}
                  uniqueNum={4}
                  name="budget"
                  required={true}
                  register={register}
                  value={"$1000 - $3000"}
                />
                <Chip
                  type="radio"
                  label="3000+"
                  text={"> $3000"}
                  uniqueNum={5}
                  name="budget"
                  required={true}
                  register={register}
                  value={"> $3000"}
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="flex flex-col border-b border-t border-[#888] pb-[2rem] pt-6 sm:flex-row sm:gap-4">
            <span className="font-h9 sm:font-h8 text-[#888888]">06</span>
            <div className="flex flex-grow flex-col gap-4">
              <label
                htmlFor="message"
                className="font-h7 sm:font-h6 text-white"
              >
                Your Message? *
              </label>

              <textarea
                id="message"
                name="message"
                className="h-[9rem] bg-transparent text-[#888]"
                placeholder="Hello, I’m looking for website with clean aesthetic and..."
                required
                aria-required
                {...register("message", {
                  required: "Please enter your message about this project",
                })}
              />
            </div>
          </fieldset>

          <MagneticAnim>
            <button
              className="mt-[2.5rem] w-full rounded-full bg-primary px-[3.5rem] py-2 text-[0.875rem] font-semibold uppercase text-white transition-colors duration-500 ease-in-out hover:bg-white hover:text-black-100 sm:py-4 sm:text-xl xl:mt-[4rem] xl:max-w-[15rem] xl:place-self-end"
              type="submit"
            >
              Lets start
            </button>
          </MagneticAnim>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
