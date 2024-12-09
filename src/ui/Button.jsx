import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "rounded-full inline-block uppercase font-semibold bg-yellow-400 py-3 px-4 tracking-wide text-stone-800 transition-colors focus:outline-none hover:bg-yellow-300 duration-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabledd={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
