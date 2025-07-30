import React from "react";

const Apptodo = () => {
  return (
    <div class="container ">
      <div class="row id_row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here.." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2 ">
          <button type="button " class="btn btn-success id_butt">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apptodo;
