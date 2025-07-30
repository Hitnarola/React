import React from "react";

const Todoitem = () => {
  let todoitem = "Buy Milk";
  let tododate = "04/10/2024";
  return (
    <div class="container ">
      <div class="row id_row">
        <div class="col-6">{todoitem}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button " class="btn btn-danger id_butt">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
// we do the value change in this with proops here we do two different file
export default Todoitem;
