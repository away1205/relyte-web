import HoverFlipWords from "../_ui/HoverFlipWords";

function ContactAddress() {
  return (
    <div className={`flex flex-col gap-2`}>
      <a href="tel:6289677900900" className="max-sm:font-l4">
        <HoverFlipWords inText="+6289677900900" />
      </a>
      <a href="mailto:hello@relyte.space" className="max-sm:font-l4 uppercase">
        <HoverFlipWords inText="hello@relyte.space" />
      </a>
    </div>
  );
}

export default ContactAddress;
