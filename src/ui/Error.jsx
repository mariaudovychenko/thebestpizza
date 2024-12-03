import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log("Error received:", error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>

      <p>{error?.data || error?.message || "Unknown error"}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
