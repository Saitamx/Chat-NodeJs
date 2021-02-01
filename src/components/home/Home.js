import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import RoomList from "./RoomList";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const rooms = [
    {
      name: "room1",
      _id: "123",
    },
    {
      name: "room2",
      _id: "456",
    },
  ];

  const setAsUser_1 = () => {
    const user_1 = {
      name: "User 1",
      email: "user_1@email.cl",
      password: "123",
      id: "123",
    };
    setUser(user_1);
  };

  const setAsUser_2 = () => {
    const user_2 = {
      name: "User 2",
      email: "user_2@email.cl",
      password: "321",
      id: "321",
    };
    setUser(user_2);
  };

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Welcome {user && user.name}</span>

              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="room"
                      type="text"
                      className="validate"
                      placeholder="Enter a room name"
                    />
                    <label htmlFor="room">Room</label>
                  </div>
                </div>
                <button className="btn">Create Room</button>
              </form>
            </div>
            <div className="card-action">
              <a href="#" onClick={setAsUser_1}>
                set as user_1
              </a>
              <a href="#" onClick={setAsUser_2}>
                set as user_2
              </a>
            </div>
          </div>
        </div>
        <div className="col s6 m5 oofset-1">
          <RoomList rooms={rooms} />
        </div>
      </div>
      <Link to="/chat">
        <button>Go to chat</button>
      </Link>
    </div>
  );
}
