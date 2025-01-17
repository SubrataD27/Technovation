import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface Alert {
  id: string;
  type: 'warning' | 'critical';
  message: string;
  location: string;
  timestamp: string;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    message: 'High turbidity levels detected',
    location: 'Sector A-1',
    timestamp: '2024-03-10 14:30',
  },
  {
    id: '2',
    type: 'critical',
    message: 'pH levels outside acceptable range',
    location: 'Sector B-3',
    timestamp: '2024-03-10 14:15',
  },
];

export const AlertsList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.type === 'critical' 
                ? 'border-red-200 bg-red-50' 
                : 'border-yellow-200 bg-yellow-50'
            }`}
          >
            <div className="flex items-start">
              <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                alert.type === 'critical' ? 'text-red-500' : 'text-yellow-500'
              }`} />
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  alert.type === 'critical' ? 'text-red-800' : 'text-yellow-800'
                }`}>
                  {alert.message}
                </h3>
                <div className="mt-1 text-sm text-gray-600">
                  <p>Location: {alert.location}</p>
                  <p>Time: {alert.timestamp}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}