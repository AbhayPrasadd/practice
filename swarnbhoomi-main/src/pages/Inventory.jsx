import React, { useState } from "react";
import { PlusCircle, Trash2, Edit3 } from "lucide-react";

const Inventory= () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Urea Fertilizer", quantity: "50 kg", type: "Fertilizer" },
    { id: 2, name: "Wheat Seeds", quantity: "30 kg", type: "Seeds" },
    { id: 3, name: "Pesticide A", quantity: "10 Liters", type: "Pesticide" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: "", type: "" });

  const addItem = () => {
    if (newItem.name && newItem.quantity && newItem.type) {
      setInventory([...inventory, { ...newItem, id: Date.now() }]);
      setNewItem({ name: "", quantity: "", type: "" });
    }
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Inventory Management</h1>

      {/* Add New Item */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-3">Add Inventory Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <input
            type="text"
            placeholder="Type (Fertilizer, Seed, etc.)"
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={addItem}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded flex items-center"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> Add Item
        </button>
      </div>

      {/* Inventory List */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Current Inventory</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2 flex justify-center space-x-2">
                  <button className="text-blue-500">
                    <Edit3 className="h-5 w-5" />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;