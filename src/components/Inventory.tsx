import { useInventory } from "../context/InventoryContext";

export default function Inventory() {
  const { inventory } = useInventory();

  return (
    <aside className="inventory">
      <h2>Inventory</h2>

      <div className="inventory-list">
        {inventory.map((item) => (
          <div key={item.id} className="inventory-item">
            <img src={item.image} alt={item.item} />
            <strong>{item.item}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}