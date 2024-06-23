function Header() {
  const navList = [
    { label: 'How it works', value: 'how' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Contact', value: 'contact' },
    { label: 'FAQ', value: 'faq' },
  ];

  return (
    <header
      className='fixed bg-white w-full border-b border-[#e0e0e0] z-40'
      id='header'
    >
      <div className='flex justify-between items-center max-screen mx-auto py-6'>
        <img src='relyte-logo.svg' alt='Relyte Logo' />

        <ul className='flex gap-14'>
          {navList.map((item) => {
            return (
              <li key={item.value}>
                <a href={`#${item.value}`}>{item.label}</a>
              </li>
            );
          })}
        </ul>

        <button className='px-6 py-2 border-black border rounded-3xl'>
          Start A Project
        </button>
      </div>
    </header>
  );
}

export default Header;
