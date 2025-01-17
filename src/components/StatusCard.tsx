import React from 'react';
import { Activity, AlertTriangle, Droplet, Gauge } from 'lucide-react';
import { useSensorData } from '../hooks/useSensorData';

interface StatusCardProps {
  title: string;
  value: string | number;
  type: 'activity' | 'alert' | 'water' | 'efficiency';
  trend?: 'up' | 'down';
}

const iconMap = {
  activity: Activity,
  alert: AlertTriangle,
  water: Droplet,
  efficiency: Gauge,
};

export const StatusCard: React.FC<StatusCardProps> = ({ 
  title, 
  type 
}) => {
  const sensorData = useSensorData();
  const Icon = iconMap[type];
  
  // Calculate real-time values based on sensor data
  const getValue = () => {
    if (type === 'alert') {
      return sensorData.filter(d => d.status === 'warning').length;
    }
    if (type === 'water') {
      const latest = sensorData.find(d => d.type === 'pH');
      return latest ? `pH ${latest.value.toFixed(1)}` : 'N/A';
    }
    if (type === 'efficiency') {
      const total = sensorData.length;
      const normal = sensorData.filter(d => d.status === 'normal').length;
      return total ? `${((normal / total) * 100).toFixed(0)}%` : 'N/A';
    }
    return `${sensorData.length} readings`;
  };

  const value = getValue();
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-full ${
            type === 'alert' ? 'bg-red-100' : 'bg-blue-100'
          }`}>
            <Icon className={`w-6 h-6 ${
              type === 'alert' ? 'text-red-500' : 'text-blue-500'
            }`} />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}