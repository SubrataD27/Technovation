import mqtt from 'mqtt';
import { SensorData } from '../types/dashboard';

class MQTTService {
  private client: mqtt.Client | null = null;
  private subscribers: ((data: SensorData) => void)[] = [];

  connect() {
    // In a real environment, this would connect to your MQTT broker
    // For demo, we'll simulate data
    this.startSimulation();
  }

  subscribe(callback: (data: SensorData) => void) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  private startSimulation() {
    setInterval(() => {
      const data: SensorData = {
        id: Math.random().toString(36).substring(7),
        type: ['pH', 'turbidity', 'oxygen', 'flow'][Math.floor(Math.random() * 4)] as any,
        value: Math.random() * 10,
        unit: 'mg/L',
        location: `Sector-${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`,
        timestamp: new Date().toISOString(),
        status: Math.random() > 0.8 ? 'warning' : 'normal'
      };
      
      this.subscribers.forEach(callback => callback(data));
    }, 2000); // Simulate new data every 2 seconds
  }
}

export const mqttService = new MQTTService();