import React from "react";
import Container from "../Shared/Container/Container";
import Header from "../Rooms/Header";
import RoomInfo from "../Rooms/RoomInfo";
import Reservation from "../Rooms/Reservation";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const roomData = useLoaderData();

  return (
    <Container>
      <div className="max-w-screen-lg max-auto">
        <div className="flex flex-col gap-6">
          <Header roomData={roomData}></Header>
          <div className="grid grid-flow-cols-1 md:grid-cols-7 md:gap-10 mt-6 ">
            <RoomInfo roomData={roomData}></RoomInfo>
            <div className="mb-10 md:col-span-3 order-first md:order-last">
              <Reservation roomData={roomData}></Reservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
