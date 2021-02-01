import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function Chat() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Chat {JSON.stringify(user)}</h1>
      <Link to={"/"}>
        <button>Go to home</button>
      </Link>
    </div>
  );
}
