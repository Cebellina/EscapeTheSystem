import "./Inventory.css";
import { useInventory } from "../context/InventoryContext";

export default function Inventory() {
  const { inventory } = useInventory();

  return (
    <aside className="inventory">
      <h2>Inventory</h2>

      <div className="inventory-list">
        {inventory.map((item) => (
          <article key={item.id} className="inventory-item">
            <img src={item.image} alt={item.item} />

            <div>
              <h3>{item.item}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}