import React from 'react';
import { Activity, AlertTriangle, Droplet, Gauge } from 'lucide-react';
import { StatusCard } from './components/StatusCard';
import { WaterQualityChart } from './components/WaterQualityChart';
import { SensorMap } from './components/SensorMap';
import { AlertsList } from './components/AlertsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              WSCC Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-green-600">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                System Online
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatusCard
            title="Active Sensors"
            value="48/50"
            type="activity"
            trend="up"
          />
          <StatusCard
            title="Current Alerts"
            value="3"
            type="alert"
          />
          <StatusCard
            title="Water Quality"
            value="Good"
            type="water"
            trend="up"
          />
          <StatusCard
            title="System Efficiency"
            value="94%"
            type="efficiency"
            trend="up"
          />
        </div>

        {/* Charts and Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <WaterQualityChart />
          <SensorMap />
        </div>

        {/* Alerts */}
        <div className="mb-6">
          <AlertsList />
        </div>
      </main>
    </div>
  );
}

export default App;