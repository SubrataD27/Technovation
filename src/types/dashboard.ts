export interface SensorData {
  id: string;
  type: 'pH' | 'turbidity' | 'oxygen' | 'flow';
  value: number;
  unit: string;
  location: string;
  timestamp: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface SystemStatus {
  totalSensors: number;
  activeSensors: number;
  alerts: number;
  efficiency: number;
}

export interface WaterQualityMetrics {
  pH: number;
  turbidity: number;
  dissolvedOxygen: number;
  flowRate: number;
}