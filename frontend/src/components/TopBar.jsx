const TopBar = () => {
  return (
    <div className="w-full bg-black text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center sm:flex-row sm:justify-center sm:gap-4">
        <p>
          Get 10% off on your first order. Use code: <strong>FIRST10</strong>
        </p>
        <a
          href="/signup"
          className="underline hover:text-gray-300 transition mt-1 sm:mt-0"
        >
          Signup Now
        </a>
      </div>
    </div>
  );
};

export default TopBar;
