import React from "react";
import { SectionTilte } from "..";
// import RoomContext from "../../context/rooms/roomContext";

// get all unique value
const uniqueValue = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ context }) => {
  const { rooms, type, handleChange, capacity , price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

  // const t = useContext(RoomContext)
  // console.log(type)
  // console.log(context)



  let types = uniqueValue(rooms, "type");
  types = ["all", ...types];

  let guest = uniqueValue(rooms, 'capacity')
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
        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity"> guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guest.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
         {/* select guest */}
         <div className="form-group">
          <label htmlFor="price"> room price ${price}</label>
          <input
          type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          />
       
          </div>

          {/* Room size*/ }

          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input type="number" name="minSize" id="size" value={minSize} className="size-input"  onChange={handleChange}/>
              <input type="number" name="maxSize" id="size" value={maxSize} className="size-input"  onChange={handleChange}/>
            </div>
          </div>

             {/* Room size*/ }

             <div className="form-group">
              <div className="single-extras">
                <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                <label htmlFor="breakfast">breakfast</label>
              </div>
              <div className="single-extras">
                <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                <label htmlFor="pets">pets</label>
              </div>
          </div>
      </form>
    </div>
  );
};

export default RoomFilter;
