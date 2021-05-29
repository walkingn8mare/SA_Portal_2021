import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { listEvent } from "../../../actions/event";
import { listEventCategories } from "../../../actions/eventcategory";
import { eventallCards } from "./eventutil";
import CatFilter from "./EventCatfilter";
// import "./Event.css";

const  Event = () => {

  const events = useSelector((state) => state.events);
    const categories = useSelector((state) => state.eventscategory);
    const [allCategory, setAllCategory] = useState("all");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listEvent());
        dispatch(listEventCategories());
    }, [dispatch]);

    const filterHandler = (e) => {
      let selectedCat = e.target.value;
      setAllCategory(selectedCat);
    };

  return (
    <div
      id="home_events"
      className="text-white"
      style={{ backgroundColor: "#1E2532" }}
    >
      <div
        className=" sm:ml-32 mr-24 pt-10 mb-12 flex justify-between"
        style={{ width: "65%" }}
      >
        <div className="text-lg md:text-4xl text-semibold ml-10 md:ml-0">Events at IIT Guwahati</div>
        <div className="ml-20 md:ml-0 px-6 py-1.5 font-medium">
         
            <CatFilter categories={categories} filterHandler={filterHandler} />
        </div>
      </div>
      <div
        className=" overflow-x-auto mx-10 md:mx-24  flex gap-4 pb-4"
      >
        
        {eventallCards(events, allCategory)}
        
      </div>
    </div>
  );
}

export default Event;
