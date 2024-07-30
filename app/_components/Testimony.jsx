function Testimony({ name, position, testimony, image }) {
  return (
    <div className="mb-28 border-b-2 border-t-2 border-[#ccc] py-[3.5rem] sm:mb-[8.75rem] sm:py-24 xl:mb-[10.88rem] xl:py-28">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="43"
        viewBox="0 0 46 43"
        fill="none"
        className="h-[21px] w-[23px] sm:h-[43px] sm:w-[46px]"
      >
        <path
          d="M46 43H28.4762V25.4873C28.4762 13.3951 34.3175 4.89939 46 0V10.1636C40.263 13.2909 37.3946 18.3988 37.3946 25.4873H46V43ZM17.5238 43H0V25.4873C0 13.3951 5.84127 4.89939 17.5238 0V10.1636C11.7868 13.2909 8.91837 18.3988 8.91837 25.4873H17.5238V43Z"
          fill="#111111"
        />
      </svg>

      <p className="font-b2 mt-4 sm:mt-6 sm:text-[1.75rem] xl:text-[2.5rem]">
        {testimony}
      </p>

      <div className="mt-9 flex items-center gap-3 sm:mt-12 xl:mt-[3.75rem]">
        <img
          src={image}
          alt={`${name} photo`}
          className="h-10 w-10 rounded-full sm:h-[2.75rem] sm:w-[2.75rem] xl:h-[3rem] xl:w-[3rem]"
        />

        <p className="font-b3 sm:font-b1 text-[#888]">
          <span className="font-medium">{name}</span>
          <br /> {position}
        </p>
      </div>
    </div>
  );
}

export default Testimony;
