import { createContext, useContext, useState, type ReactNode } from "react";
import items from "../data/items.json";
import type { Item } from "../types";

type InventoryContextType = {
  inventory: Item[];
  addItem: (itemId: number) => void;
  hasItem: (itemId: number) => boolean;
};

const InventoryContext = createContext<InventoryContextType | null>(null);

const typedItems = items as Item[];

export function InventoryProvider({ children }: { children: ReactNode }) {
  const startingItem = typedItems.find((item) => item.id === 1);

  if (!startingItem) {
    throw new Error("Startföremålet UV Light saknas i items.json");
  }

  const [inventory, setInventory] = useState<Item[]>([startingItem]);

  function addItem(itemId: number) {
    const itemToAdd = typedItems.find((item) => item.id === itemId);

    if (!itemToAdd) {
      return;
    }

    setInventory((currentInventory) => {
      const alreadyExists = currentInventory.some((item) => item.id === itemId);

      if (alreadyExists) {
        return currentInventory;
      }

      return [...currentInventory, itemToAdd];
    });
  }

  function hasItem(itemId: number) {
    return inventory.some((item) => item.id === itemId);
  }

  return (
    <InventoryContext.Provider value={{ inventory, addItem, hasItem }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useInventory must be used inside InventoryProvider");
  }

  return context;
}