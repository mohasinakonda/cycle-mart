import React, { useEffect, useState } from "react"
import {
	Area,
	AreaChart,
	CartesianGrid,
	Line,
	LineChart,
	Pie,
	PieChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

const Dashboard = () => {
	const [chartData, setChartData] = useState([])
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setChartData(data))
	}, [])

	const renderLineChart = (
		<LineChart
			width={700}
			height={300}
			data={chartData}
			// margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
		>
			<Line type="monotone" dataKey="investment" stroke="#8884d8" />
			<Line type="monotone" dataKey="sell" stroke="orange" />
			<Line type="monotone" dataKey="revenue" stroke="green" />
			<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
			<XAxis dataKey="month" />
			<YAxis dataKey="investment" />
			<Tooltip />
		</LineChart>
	)
	const pieChart = (
		<PieChart width={730} height={250}>
			<Pie
				data={chartData}
				dataKey="investment"
				nameKey="month"
				cx="50%"
				cy="50%"
				outerRadius={70}
				fill="#8884d8"
			/>
			<Pie
				data={chartData}
				dataKey="sell"
				nameKey="month"
				cx="50%"
				cy="50%"
				innerRadius={70}
				outerRadius={90}
				fill="#82ca9d"
				label
			/>
			<Pie
				data={chartData}
				dataKey="revenue"
				nameKey="month"
				cx="50%"
				cy="50%"
				innerRadius={90}
				outerRadius={100}
				fill="red"
				label
			/>
			<Tooltip></Tooltip>
		</PieChart>
	)
	const areaChart = (
		<AreaChart
			width={730}
			height={250}
			data={chartData}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
		>
			<defs>
				<linearGradient id="investmentColor" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
				</linearGradient>
				<linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
				</linearGradient>
				<linearGradient id="sellColor" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#62e293" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#9b90d9" stopOpacity={0} />
				</linearGradient>
			</defs>
			<XAxis dataKey="month" />
			<YAxis />
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<Area
				type="monotone"
				dataKey="investment"
				stroke="#8884d8"
				fillOpacity={1}
				fill="url(#investmentColor)"
			/>
			<Area
				type="monotone"
				dataKey="revenue"
				stroke="#82ca9d"
				fillOpacity={1}
				fill="url(#revenueColor)"
			/>
			<Area
				type="monotone"
				dataKey="sell"
				stroke="green"
				fillOpacity={1}
				fill="url(#sellColor)"
			/>
		</AreaChart>
	)
	return (
		<div
			className="d-flex flex-column justify-content-center
		"
		>
			{renderLineChart}

			{pieChart}
			{areaChart}
		</div>
	)
}

export default Dashboard
