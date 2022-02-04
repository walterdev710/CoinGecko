import React from "react";
import { Tbody } from "./Tbody";
import { Thead } from "./Thead";


export const Table = ({data}) => {

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped text-center table-hover">
        <Thead/>
        <Tbody data={data}/>
      </table>
    </div>
  );
};
