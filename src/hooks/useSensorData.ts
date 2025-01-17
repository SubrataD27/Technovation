import { useState, useEffect } from 'react';
import { SensorData } from '../types/dashboard';
import { mqttService } from '../services/mqtt';

export function useSensorData() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);

  useEffect(() => {
    mqttService.connect();
    
    const unsubscribe = mqttService.subscribe((newData) => {
      setSensorData(prev => {
        const updated = [...prev, newData];
        // Keep only last 50 readings
        return updated.slice(-50);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return sensorData;
}