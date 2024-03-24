import React from "react";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";

const RestaurantDetails = () => {
  return <div>
    <div className=" top flex justify-between items-center mt-10 mb-8">
      <h3 className="text-base font-semibold text-grey3 "> Restaurant Details</h3>
      <div className="pagination flex justify-between items-center gap-x-4">
        <p className="pages text-grey3 font-medium">1-10 of 20</p>
        <div className="pagination-btns flex justify-between items-center gap-x-2 text-primary ">
          <button className="font-semibold"> <LiaLessThanSolid /></button>
          <button className="font-semibold"> <LiaGreaterThanSolid /></button>
        </div>
      </div>
    </div>

    

  </div>;
};

export default RestaurantDetails;
