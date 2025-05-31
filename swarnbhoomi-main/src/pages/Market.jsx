import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Import Firestore config
import { collection, getDocs, addDoc } from "firebase/firestore";

const MachineryList = () => {
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newMachinery, setNewMachinery] = useState({
    name: "",
    category: "",
    price: "",
    rentType: "",
    location: "",
    ownerName: "",
    contact: "",
    image: "",
  });

  useEffect(() => {
    const fetchMachinery = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "machinery"));
        const machineryData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMachinery(machineryData);
      } catch (error) {
        console.error("Error fetching machinery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMachinery();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewMachinery({ ...newMachinery, [e.target.name]: e.target.value });
  };

  const handleAddMachinery = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "machinery"), newMachinery);
      setShowForm(false);
      setNewMachinery({
        name: "",
        category: "",
        price: "",
        rentType: "",
        location: "",
        ownerName: "",
        contact: "",
        image: "",
      });
      alert("Machinery added successfully!");
    } catch (error) {
      console.error("Error adding machinery:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="container mx-auto p-6 max-w-8xl">
      <div className="flex flex-col sm:flex-row  items-center mb-6">
        <input
          type="text"
          placeholder="Search machinery..."
          value={search}
          onChange={handleSearchChange}
          className="border p-3 rounded w-[500px] mb-2 sm:mb-0"
        />
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-5 py-2 ml-40 rounded-lg hover:bg-green-700"
        >
          {showForm ? "Cancel" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-500">
            
            <h2 className="text-xl font-bold mb-4">Add Machinery</h2>
            <form onSubmit={handleAddMachinery}>
              <div className="grid grid-cols-1 gap-4">
                <input type="text" name="name" placeholder="Name" value={newMachinery.name} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="category" placeholder="Category" value={newMachinery.category} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="price" placeholder="Price" value={newMachinery.price} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="rentType" placeholder="Rent Type" value={newMachinery.rentType} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="location" placeholder="Location" value={newMachinery.location} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="ownerName" placeholder="Owner Name" value={newMachinery.ownerName} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="contact" placeholder="Contact" value={newMachinery.contact} onChange={handleInputChange} className="border p-3 rounded" required />
                <input type="text" name="image" placeholder="Image URL" value={newMachinery.image} onChange={handleInputChange} className="border p-3 rounded" required />
              </div>
              <div className="flex justify-between mt-4">
                <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Add</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {machinery.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 border">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-green-600 font-bold">{item.price} ({item.rentType})</p>
            <p className="text-gray-500">{item.location}</p>
            <p className="text-gray-700">Owner: {item.ownerName}</p>
            <a
              href={`tel:${item.contact}`}
              className="mt-3 block bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-700"
            >
              Contact: {item.contact}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineryList;