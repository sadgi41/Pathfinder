import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import React from 'react';

const ProgressChart = ({data}) => {
  return (
    <div className="p-6 rounded-xl border border-gray-300 dark:border-gray-700 h-72">
      <h3 className="text-lg font-semibold mb-4">
        Progress Trend
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="progress" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProgressChart
