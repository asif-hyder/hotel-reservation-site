import React from "react";
import { SectionTilte } from "..";
// import RoomContext from "../../context/rooms/roomContext";

// get all unique value
const uniqueValue = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ context }) => {
  const { rooms, type, handleChange } = context;

  // const t = useContext(RoomContext)
  // console.log(type)
  // console.log(context)

  let types = uniqueValue(rooms, "type");
  types = ["all", ...types];
  return (
    <div className="room__filter">
      <SectionTilte title="Search rooms" />
      <form className="room__filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default RoomFilter;
