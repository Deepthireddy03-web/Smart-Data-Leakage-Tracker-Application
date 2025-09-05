import React from 'react';
import AlertsList from '../components/Alerts/AlertsList';
import { mockAlerts } from '../utils/mockData';

export default function Alerts() {
  return (
    <div className="space-y-6">
      <AlertsList alerts={mockAlerts} />
    </div>
  );
}