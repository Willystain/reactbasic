import React from "react";

const Item = (props) => {
  return (
    <div key={props.user.id}>
      <img src={props.user.image} style={{ width: "150px" }}></img>
      <h4>{props.user.name}</h4>
      <h4>{props.user.age}</h4>
    </div>
  );
};

export default Item;
