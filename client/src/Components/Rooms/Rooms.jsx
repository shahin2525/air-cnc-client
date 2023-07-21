import React, { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "./Card";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("./room.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filterData = data.filter((room) => room.category === category);
          console.log(filterData);
          setRooms(filterData);
        } else {
          setRooms(data);
        }

        setLoading(false);
      });
  }, [category]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {rooms.map((room, index) => (
            <Card key={index} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="pt-10">
          <Heading
            title="NO Rooms Available in this category"
            subtitle="Please Select Other Category"
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
