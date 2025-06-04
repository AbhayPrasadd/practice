import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const MachineryList = () => {
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterRentType, setFilterRentType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

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

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilterCategory = (e) => setFilterCategory(e.target.value);
  const handleFilterRentType = (e) => setFilterRentType(e.target.value);
  const handleFilterLocation = (e) => setFilterLocation(e.target.value);

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

  const filteredMachinery = machinery.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory ? item.category === filterCategory : true) &&
      (filterRentType ? item.rentType === filterRentType : true) &&
      (filterLocation ? item.location.toLowerCase().includes(filterLocation.toLowerCase()) : true)
    );
  });

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearchChange}
          className="border p-3 rounded w-full sm:w-[250px]"
        />
        <select value={filterCategory} onChange={handleFilterCategory} className="border p-3 rounded w-full sm:w-[200px]">
          <option value="">All Categories</option>
          <option value="Tractor">Tractor</option>
          <option value="Plough">Plough</option>
          <option value="Seeder">Seeder</option>
          <option value="Harvester">Harvester</option>
        </select>
        <select value={filterRentType} onChange={handleFilterRentType} className="border p-3 rounded w-full sm:w-[200px]">
          <option value="">All Rent Types</option>
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>
        <input
          type="text"
          placeholder="Filter by location..."
          value={filterLocation}
          onChange={handleFilterLocation}
          className="border p-3 rounded w-full sm:w-[200px]"
        />
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto"
        >
          {showForm ? "Close Form" : "List Your Equipment"}
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] sm:w-[500px] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Add Your Equipment</h2>
            <form onSubmit={handleAddMachinery} className="space-y-4">
              {Object.entries(newMachinery).map(([key, value]) => (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  onChange={handleInputChange}
                  className="border w-full p-3 rounded"
                  required
                />
              ))}
              <div className="flex justify-between pt-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
                <button type="button" onClick={() => setShowForm(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMachinery.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl overflow-hidden border">
            <img
              src={item.image || 'https://via.placeholder.com/400'}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-green-700 font-medium">₹{item.price} / {item.rentType}</p>
              <p className="text-sm text-gray-500">Location: {item.location}</p>
              <p className="text-sm text-gray-700 mt-1">Owner: {item.ownerName}</p>
              <a
                href={`tel:${item.contact}`}
                className="mt-3 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Call Owner
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineryList;
