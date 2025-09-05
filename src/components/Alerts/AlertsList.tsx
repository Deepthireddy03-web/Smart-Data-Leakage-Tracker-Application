import React, { useState } from 'react';
import { AlertTriangle, Clock, User, Filter, Eye, Check, X } from 'lucide-react';
import { Alert } from '../../types';
import { formatDistanceToNow } from 'date-fns';

interface AlertsListProps {
  alerts: Alert[];
}

const severityColors = {
  LOW: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  MEDIUM: 'bg-orange-100 text-orange-800 border-orange-200',
  HIGH: 'bg-red-100 text-red-800 border-red-200',
  CRITICAL: 'bg-red-200 text-red-900 border-red-300',
};

const typeIcons = {
  DATA_LEAKAGE: '🔒',
  UNAUTHORIZED_ACCESS: '🚫',
  SUSPICIOUS_DOWNLOAD: '⬇️',
  KEYWORD_DETECTED: '🔍',
};

export default function AlertsList({ alerts }: AlertsListProps) {
  const [filter, setFilter] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'unread') return !alert.isRead;
    if (filter === 'critical') return alert.severity === 'CRITICAL';
    return true;
  });

  const handleMarkAsRead = (alertId: string) => {
    // In a real app, this would update the backend
    console.log('Marking alert as read:', alertId);
  };

  const handleDismiss = (alertId: string) => {
    // In a real app, this would update the backend
    console.log('Dismissing alert:', alertId);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Security Alerts</h2>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Alerts</option>
                <option value="unread">Unread</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-6 hover:bg-gray-50 transition-colors ${
              !alert.isRead ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    alert.severity === 'CRITICAL' ? 'bg-red-100' :
                    alert.severity === 'HIGH' ? 'bg-orange-100' :
                    alert.severity === 'MEDIUM' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    <span className="text-lg">{typeIcons[alert.type]}</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${severityColors[alert.severity]}`}>
                      {alert.severity}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {alert.type.replace('_', ' ')}
                    </span>
                    {!alert.isRead && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {alert.message}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    {alert.details}
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
                    {alert.fileName && (
                      <div className="flex items-center space-x-1">
                        <span>📄</span>
                        <span className="truncate max-w-xs">{alert.fileName}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setSelectedAlert(alert)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                  title="View Details"
                >
                  <Eye className="h-4 w-4" />
                </button>
                
                {!alert.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(alert.id)}
                    className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded"
                    title="Mark as Read"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                )}
                
                <button
                  onClick={() => handleDismiss(alert.id)}
                  className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded"
                  title="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12">
          <AlertTriangle className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No alerts found</h3>
          <p className="mt-1 text-sm text-gray-500">
            All clear! No security alerts match your current filter.
          </p>
        </div>
      )}

      {/* Alert Detail Modal */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Alert Details</h3>
              <button
                onClick={() => setSelectedAlert(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded text-sm font-medium border ${severityColors[selectedAlert.severity]}`}>
                  {selectedAlert.severity} - {selectedAlert.type.replace('_', ' ')}
                </span>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{selectedAlert.message}</h4>
                <p className="text-gray-600">{selectedAlert.details}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">User:</span>
                  <p className="text-gray-600">{selectedAlert.username}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Time:</span>
                  <p className="text-gray-600">
                    {formatDistanceToNow(selectedAlert.timestamp, { addSuffix: true })}
                  </p>
                </div>
                {selectedAlert.fileName && (
                  <div className="col-span-2">
                    <span className="font-medium text-gray-700">File:</span>
                    <p className="text-gray-600">{selectedAlert.fileName}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setSelectedAlert(null)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Take Action
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}