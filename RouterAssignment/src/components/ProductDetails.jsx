import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setData(data);
    });
  });
// if(id !== data.id){
// console.log(id,data.id);

    // return (
    //     <h1>404 page NOT FOUND</h1>
    // )
// }
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px", margin: "10px" }}
        src={data.image}
        alt=""
      />
      <p>Title: {data.title}</p>
      <p>Price: {data.price}</p>
    </div>
  );
};
