import { useEffect, useState } from "react";
import axios from "axios"

const Data = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);

  const fetchData = async () => {
    try {
      let data = await axios.get("http://localhost:8000/");
      setRes(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>this is data component</h1>

      {res}
    </>
  );
};

export default Data;
