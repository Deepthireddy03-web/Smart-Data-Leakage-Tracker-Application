import React from 'react';
import { Users, FileText, Activity, AlertTriangle, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import ChartCard from '../components/Dashboard/ChartCard';
import AlertsPanel from '../components/Dashboard/AlertsPanel';
import { mockStats, mockChartData, mockMonthlyData, mockRiskDistribution, mockAlerts } from '../utils/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatsCard
          title="Total Files"
          value={mockStats.totalFiles}
          icon={FileText}
          color="bg-blue-600"
          change="+12% from last month"
          changeType="positive"
        />
        <StatsCard
          title="Active Users"
          value={mockStats.totalUsers}
          icon={Users}
          color="bg-green-600"
          change="+5% from last month"
          changeType="positive"
        />
        <StatsCard
          title="Today's Access"
          value={mockStats.todayAccess}
          icon={Activity}
          color="bg-purple-600"
          change="+8% from yesterday"
          changeType="positive"
        />
        <StatsCard
          title="Suspicious Activities"
          value={mockStats.suspiciousActivities}
          icon={AlertTriangle}
          color="bg-orange-600"
          change="-15% from last week"
          changeType="positive"
        />
        <StatsCard
          title="Active Alerts"
          value={mockStats.activeAlerts}
          icon={TrendingUp}
          color="bg-red-600"
          change="2 new today"
          changeType="negative"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard
          title="Weekly Data Access Activity"
          data={mockChartData}
          type="bar"
          colors={['#3B82F6']}
        />
        <ChartCard
          title="Monthly Leakage Attempts"
          data={mockMonthlyData}
          type="line"
          colors={['#EF4444']}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ChartCard
            title="Risk Level Distribution"
            data={mockRiskDistribution}
            type="pie"
            colors={['#10B981', '#F59E0B', '#EF4444', '#7C2D12']}
          />
        </div>
        <div className="lg:col-span-2">
          <AlertsPanel alerts={mockAlerts} />
        </div>
      </div>
    </div>
  );
}