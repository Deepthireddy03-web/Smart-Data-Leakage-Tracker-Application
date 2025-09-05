import React from 'react';
import LogsTable from '../components/Logs/LogsTable';
import { mockLogs } from '../utils/mockData';

export default function Logs() {
  return (
    <div className="space-y-6">
      <LogsTable logs={mockLogs} />
    </div>
  );
}