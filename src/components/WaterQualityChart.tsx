import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSensorData } from '../hooks/useSensorData';

export const WaterQualityChart: React.FC = () => {
  const sensorData = useSensorData();

  // Process data for chart
  const chartData = sensorData.map(reading => ({
    time: new Date(reading.timestamp).toLocaleTimeString(),
    [reading.type]: reading.value
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Water Quality Metrics (Real-time)</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pH" stroke="#3B82F6" />
            <Line type="monotone" dataKey="turbidity" stroke="#10B981" />
            <Line type="monotone" dataKey="oxygen" stroke="#6366F1" />
            <Line type="monotone" dataKey="flow" stroke="#EC4899" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}