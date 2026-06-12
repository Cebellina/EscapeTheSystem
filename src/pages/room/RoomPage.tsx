import { useParams } from "react-router-dom";
import rooms from "../../data/rooms.json";

const RoomPage = () => {
  const { roomPath } = useParams();
  const room = rooms.find((r) => r.roomPath === roomPath);

  return (
    <div>
      <img src={room?.unsolvedImage} />
    </div>
  );
};

export default RoomPage;
