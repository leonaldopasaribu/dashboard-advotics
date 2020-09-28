import React from "react";
import Item from "./Item";
import ItemTop from "./ItemTop";

const ListITem = () => {
  const iniList = [1, 2, 3, 4, 5];
  return iniList.map((data, index) =>
    index === 0 ? <ItemTop key={index} /> : <Item key={index} />
  );
};

export default ListITem;
