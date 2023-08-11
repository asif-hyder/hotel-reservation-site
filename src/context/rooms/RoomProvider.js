import React, { useEffect, useState } from "react";
import RoomContext from "./roomContext";
import items from "../../data";

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
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

    setState({
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featurRooms,
      loading: false,
    });
  }, []);

  const getRoom = (slug) => {
    // copy of orginal rooms array
    let tempRooms = [...state.rooms];
    // finding the single room
    let room = tempRooms.find((room) => room.slug === slug);
    console.log(room);
    return room;
  };

  return (
    <RoomContext.Provider value={{ ...state, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
