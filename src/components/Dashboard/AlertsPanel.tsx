import React from 'react';
import { AlertTriangle, Clock, User } from 'lucide-react';
import { Alert } from '../../types';
import { formatDistanceToNow } from 'date-fns';

interface AlertsPanelProps {
  alerts: Alert[];
}

const severityColors = {
  LOW: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  MEDIUM: 'bg-orange-100 text-orange-800 border-orange-200',
  HIGH: 'bg-red-100 text-red-800 border-red-200',
  CRITICAL: 'bg-red-200 text-red-900 border-red-300',
};

export default function AlertsPanel({ alerts }: AlertsPanelProps) {
  const unreadAlerts = alerts.filter(alert => !alert.isRead);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
          {unreadAlerts.length} new
        </span>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {alerts.slice(0, 5).map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.isRead ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300 shadow-sm'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <AlertTriangle className={`h-5 w-5 ${
                  alert.severity === 'CRITICAL' ? 'text-red-600' :
                  alert.severity === 'HIGH' ? 'text-red-500' :
                  alert.severity === 'MEDIUM' ? 'text-orange-500' :
                  'text-yellow-500'
                }`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${severityColors[alert.severity]}`}>
                    {alert.severity}
                  </span>
                  {!alert.isRead && (
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  )}
                </div>
                
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {alert.message}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{alert.username}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatDistanceToNow(alert.timestamp, { addSuffix: true })}</span>
                  </div>
                </div>
                
                {alert.fileName && (
                  <p className="text-xs text-gray-600 mt-2">
                    File: {alert.fileName}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors">
          View All Alerts
        </button>
      </div>
    </div>
  );
}