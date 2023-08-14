import React, { useEffect, useState } from "react";
import RoomContext from "./roomContext";
import items from "../../data";

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  });

  const formatData = (items) => {
    let tempData = items.map((item) => {
      // extracting id from items
      let id = item.sys.id;
      // extracting images from items
      let images = item.fields.images.map((img) => img.fields.file.url);
      // putting all data in room
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempData;
  };

  useEffect(() => {
    let rooms = formatData(items);
    let featurRooms = rooms.filter((room) => room.featured === true);

    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));
    setState((state) => ({
      ...state,
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featurRooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize,
    }));
  }, []);

  const getRoom = (slug) => {
    // copy of orginal rooms array
    let tempRooms = [...state.rooms];
    // finding the single room
    let room = tempRooms.find((room) => room.slug === slug);
    console.log(room);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filterRooms = () => {
    let { rooms, type, capacity } = state;

    let tempRooms = [...rooms];

    //
    capacity = parseInt(capacity);

    // filtering the rooms by types
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filtering the rooms by capacity

    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    return tempRooms;
  };

  useEffect(() => {
    // Call filterRooms and update sortedRooms when dependencies change
    const filteredRooms = filterRooms();
    setState((prevState) => ({
      ...prevState,
      sortedRooms: filteredRooms,
    }));
    // eslint-disable-next-line
  }, [state.type, state.capacity, state.rooms]);

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
