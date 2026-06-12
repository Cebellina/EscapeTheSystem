import { Navigate, useParams } from "react-router-dom";
import rooms from "../../data/rooms.json";

const RoomPage = () => {
  const { roomPath } = useParams();
  const room = rooms.find((r) => r.roomPath === roomPath);

  //byt ut roomIsSolved mot en global i context när den finns
  const roomIsSolved = true;

  if (!room) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <img src={roomIsSolved ? room.solvedImage : room.unsolvedImage} />
      <p>{roomIsSolved ? room.solvedInstruction : room.unsolvedInstruction}</p>
    </div>
  );
};

export default RoomPage;
