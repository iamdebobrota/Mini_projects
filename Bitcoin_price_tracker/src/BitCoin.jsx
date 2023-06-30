import React, { useState, useEffect } from "react";
// import axios from "axios";

// function BitcoinDashboard() {
//   const [price, setPrice] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       axios
//         .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
//         .then((response) => {
//           setPrice(response.data.data.amount);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>Bitcoin Price: {price}</h1>
//     </div>
//   );
// }

// export {BitcoinDashboard};
// Visualize data: We can use a charting library like Recharts to display the Bitcoin price over time. Here's an example:

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from "axios";

function BitcoinDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
        .then((response) => {
          const newData = {
            time: new Date().toLocaleTimeString(),
            price: response.data.data.amount
          };
          setData([...data, newData]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export { BitcoinDashboard };

// Update data in real-time: To receive real-time updates, we can use websockets. Here's an example:
// import { io } from "socket.io-client";

// function BitcoinDashboard() {
//   const [price, setPrice] = useState(null);

//   useEffect(() => {
//     const socket = io("https://ws-feed.pro.coinbase.com");
//     socket.emit("subscribe", {})
//   }, [])
// }
// export {BitcoinDashboard}
