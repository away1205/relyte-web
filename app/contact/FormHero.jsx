function FormHero() {
  return (
    <section className="dot-bg flex w-screen justify-center">
      <div className="max-screen flex w-full justify-start">
        <div className="relative mt-[4.25rem] px-4 py-16 sm:px-12 sm:py-[6rem] xl:py-[7.5rem]">
          <h1 className="font-h4 sm:font-h1 xl:font-d3 text-nowrap font-semibold uppercase">
            Let&apos;s start <br /> a project together
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 617 24"
            fill="none"
            className="w-[21rem] sm:w-[617px] xl:w-[38rem]"
          >
            <path
              d="M8 15.058C87.0556 15.058 166.235 8.84965 245.333 8.10202C322.99 7.36801 400.407 10.8375 478.024 10.8375C518.971 10.8375 641.7 16.4648 900.753 16.4648"
              stroke="#C1E693"
              strokeWidth="14.108"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute bottom-[7.5rem] right-2 h-2 w-2 rounded-full bg-primary sm:bottom-[11rem] sm:right-14 sm:h-[1.125rem] sm:w-[1.125rem] lg:bottom-[13rem] lg:right-4 lg:h-6 lg:w-6" />
        </div>
      </div>
    </section>
  );
}

export default FormHero;
