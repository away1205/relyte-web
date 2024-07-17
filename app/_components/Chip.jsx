function Chip({
  label,
  value,
  text,
  uniqueNum,
  required = false,
  type = "checkbox" || "radio",
  name = null,
  defaultChecked = false,
  register = () => {},
}) {
  const peerVariant = [
    {
      peerCheckedBg: "peer-checked/chip1:bg-green",
      peerCheckedColor: "peer-checked/chip1:text-black",
      peerName: "peer/chip1",
    },
    {
      peerCheckedBg: "peer-checked/chip2:bg-green",
      peerCheckedColor: "peer-checked/chip2:text-black",
      peerName: "peer/chip2",
    },
    {
      peerCheckedBg: "peer-checked/chip3:bg-green",
      peerCheckedColor: "peer-checked/chip3:text-black",
      peerName: "peer/chip3",
    },
    {
      peerCheckedBg: "peer-checked/chip4:bg-green",
      peerCheckedColor: "peer-checked/chip4:text-black",
      peerName: "peer/chip4",
    },
    {
      peerCheckedBg: "peer-checked/chip5:bg-green",
      peerCheckedColor: "peer-checked/chip5:text-black",
      peerName: "peer/chip5",
    },
    {
      peerCheckedBg: "peer-checked/chip6:bg-green",
      peerCheckedColor: "peer-checked/chip6:text-black",
      peerName: "peer/chip6",
    },
    {
      peerCheckedBg: "peer-checked/chip7:bg-green",
      peerCheckedColor: "peer-checked/chip7:text-black",
      peerName: "peer/chip7",
    },
    {
      peerCheckedBg: "peer-checked/chip8:bg-green",
      peerCheckedColor: "peer-checked/chip8:text-black",
      peerName: "peer/chip8",
    },
    {
      peerCheckedBg: "peer-checked/chip9:bg-green",
      peerCheckedColor: "peer-checked/chip9:text-black",
      peerName: "peer/chip9",
    },
  ];

  return (
    <>
      <input
        type={type}
        id={label}
        value={value}
        className={`${peerVariant[uniqueNum].peerName} hidden`}
        required={required}
        aria-required={required}
        name={name}
        defaultChecked={defaultChecked}
        {...register(
          name,
          type === "checkbox"
            ? {
                validate: (value) =>
                  value.length > 0 || "Please select at least one service",
              }
            : {
                required: "Please select your budget",
              },
        )}
      />
      <label
        className={`font-b2 w-fit rounded-full border px-6 py-[0.25rem] text-[#888] transition-all duration-300 ${peerVariant[uniqueNum].peerCheckedBg} ${peerVariant[uniqueNum].peerCheckedColor}`}
        htmlFor={label}
      >
        {text}
      </label>
    </>
  );
}

export default Chip;
