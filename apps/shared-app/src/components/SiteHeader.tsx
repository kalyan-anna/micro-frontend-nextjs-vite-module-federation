export const SiteHeader = () => {
  return (
    <header className="bg-gray-500">
      <div className="flex justify-between px-3">
        <div className="inline-flex items-center">
          <img src="/logo.png" width={50} height={50} alt="Logo" />
        </div>
        <div className="p-1 flex flex-row items-center">
          <a
            href="https://github.com"
            className="text-white p-2 mr-2 no-underline hidden md:block lg:block"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <img src="/avatar.png" width={50} height={50} alt="Avatar" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};
