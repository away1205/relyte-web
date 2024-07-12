import Image from "next/image";

function HeroBlog() {
  return (
    <section className="dot-bg my-auto mt-[4.5rem] flex w-screen items-center justify-center px-8 py-16">
      <div className="relative flex border border-dashed border-black-100 px-8 py-5">
        <div className="relative h-[4.5rem] w-[11.5rem] sm:h-[5rem] sm:w-[16.3rem] lg:h-[6.5rem] lg:w-[21.75rem]">
          <Image
            src={"./relyte-logo.svg"}
            alt="Relyte"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1 className="absolute bottom-0 right-6 -rotate-6 rounded-[0.25rem] bg-primary px-2 py-[0.2rem] text-[0.75rem] font-medium uppercase text-white sm:-bottom-2 sm:rounded-[0.35rem] sm:text-[1.125rem] lg:-bottom-4 lg:rounded-[0.5rem] lg:text-[1.5rem]">
          Blog Page
        </h1>

        <div className="absolute -left-[0.25rem] -top-[0.25rem] h-2 w-2 bg-[#111111]"></div>
        <div className="absolute -bottom-[0.25rem] -left-[0.25rem] h-2 w-2 bg-[#111111]"></div>
        <div className="absolute -right-[0.25rem] -top-[0.25rem] h-2 w-2 bg-[#111111]"></div>
        <div className="absolute -bottom-[0.25rem] -right-[0.25rem] h-2 w-2 bg-[#111111]"></div>
      </div>
    </section>
  );
}

export default HeroBlog;
