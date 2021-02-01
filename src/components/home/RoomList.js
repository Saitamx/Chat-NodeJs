import Room from "./Room";

export default function RoomList({ rooms }) {
  return (
    <div>
      {rooms && rooms.map((room) => <Room key={room._id} name={room.name} />)}
    </div>
  );
}
