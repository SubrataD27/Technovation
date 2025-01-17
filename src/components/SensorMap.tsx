import React from 'react';
import { MapPin } from 'lucide-react';

export const SensorMap: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sensor Network Map</h2>
      <div className="relative h-[400px] bg-gray-100 rounded-lg">
        {/* Placeholder for actual map implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-gray-500">Map integration will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}