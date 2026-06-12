import "./RoomPage.css";
import { useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import rooms from "../../data/rooms.json";
import type { Room } from "../../types";
import { useInventory } from "../../context/InventoryContext";

export default function RoomPage() {
  const { roomPath } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { inventory, addItem, hasItem } = useInventory();
  const [exitSolved, setExitSolved] = useState(false);
  const typedRooms = rooms as Room[];
  const foundRoom = typedRooms.find((room) => room.roomPath === roomPath);

  if (!foundRoom) {
    return <Navigate to="/" replace />;
  }

  const room = foundRoom;
  const isExitRoom = room.itemToAdd === null;

  const roomIsSolved = isExitRoom
    ? exitSolved
    : inventory.some((item) => item.id === room.itemToAdd);

  const showHint = searchParams.get("hint") === "true";

  function toggleHint() {
    if (showHint) {
      setSearchParams({});
    } else {
      setSearchParams({ hint: "true" });
    }
  }

  function handleUseItem(itemId: number) {
    if (roomIsSolved) return;
    if (!hasItem(itemId)) return;

    if (itemId !== room.itemToSolve) {
      alert("That item doesn't work here.");
      return;
    }

    if (room.itemToAdd !== null) {
      addItem(room.itemToAdd);
    } else {
      setExitSolved(true);
    }
  }

  return (
    <section className="room">
      <h2>{room.roomName}</h2>

      <img
        className="room-image"
        src={roomIsSolved ? room.solvedImage : room.unsolvedImage}
        alt={room.roomName}
      />

      <p>{roomIsSolved ? room.solvedInstruction : room.unsolvedInstruction}</p>

      <button onClick={toggleHint}>
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>

      {showHint && <p className="hint">Hint: {room.hint}</p>}

      {!roomIsSolved && (
        <>
          <h3>Use an Item</h3>

          <div className="item-actions">
            {inventory.map((item) => (
              <button key={item.id} onClick={() => handleUseItem(item.id)}>
                Use {item.item}
              </button>
            ))}
          </div>
        </>
      )}

      {isExitRoom && roomIsSolved && (
        <button className="button" onClick={() => navigate("/victory")}>
          Escape Facility
        </button>
      )}
    </section>
  );
}