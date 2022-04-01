import React, {useState, useEffect} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const API_KEY = "0436e293a6c33ea78bc300f56aa63242";

export const WeatherData = () => {
const [isLoading, setLoading] = useState(false)
	const [data, setData] = useState(null);

	 useEffect(() => {
     async function fetchData() {
		 const requestOption = {
				method: "GET",
				 redirect: "follow"
			}
  const api_url = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=${API_KEY}`);

const data = await api_url.json();
console.log(data);
const chartData = data.list.map (item => {

		return {
			tempMin: item.main.temp_min,
			tempMax: item.main.temp_max,
			clouds: item.clouds.all,
			dt: item.dt,
		}
	});
	setData(chartData);
  setLoading(false);
 }
fetchData();
}, []);

	return(
		<div className='chart'>
			   {isLoading ? (
        <div>loading...</div>
           )  : (
 <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tempMin" stroke="#6b68a7" strokeWidth={3} fill="#8884d8"/>
          <Line type="monotone" dataKey="tempMax" stroke="#ccc"  strokeWidth={3}/>
		  <Line type="monotone" dataKey="clouds" stroke="#e1d767"  strokeWidth={3}/>
        </LineChart>
        </ResponsiveContainer>
            ) }
		</div>
	)
};