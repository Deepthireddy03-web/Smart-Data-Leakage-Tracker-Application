import { File, DataLog, Alert, Keyword, DashboardStats, ChartData } from '../types';

export const mockFiles: File[] = [
  {
    id: '1',
    name: 'employee_salaries_confidential.xlsx',
    type: 'spreadsheet',
    size: 2048000,
    uploadedBy: 'john.doe',
    uploadedAt: new Date('2024-12-15'),
    accessCount: 15,
    lastAccessed: new Date('2024-12-19'),
    hasSensitiveContent: true,
    sensitiveKeywords: ['salary', 'confidential'],
    path: '/documents/hr/',
  },
  {
    id: '2',
    name: 'project_specs.pdf',
    type: 'document',
    size: 1024000,
    uploadedBy: 'jane.smith',
    uploadedAt: new Date('2024-12-14'),
    accessCount: 8,
    lastAccessed: new Date('2024-12-18'),
    hasSensitiveContent: false,
    sensitiveKeywords: [],
    path: '/documents/projects/',
  },
  {
    id: '3',
    name: 'user_passwords_backup.txt',
    type: 'text',
    size: 512000,
    uploadedBy: 'admin',
    uploadedAt: new Date('2024-12-13'),
    accessCount: 3,
    lastAccessed: new Date('2024-12-19'),
    hasSensitiveContent: true,
    sensitiveKeywords: ['password', 'credentials'],
    path: '/system/security/',
  },
];

export const mockLogs: DataLog[] = [
  {
    id: '1',
    userId: '2',
    username: 'john.doe',
    action: 'DOWNLOAD',
    fileName: 'employee_salaries_confidential.xlsx',
    fileId: '1',
    timestamp: new Date('2024-12-19T10:30:00'),
    ipAddress: '192.168.1.45',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    isSuspicious: true,
    riskLevel: 'HIGH',
  },
  {
    id: '2',
    userId: '3',
    username: 'jane.smith',
    action: 'VIEW',
    fileName: 'project_specs.pdf',
    fileId: '2',
    timestamp: new Date('2024-12-19T09:15:00'),
    ipAddress: '192.168.1.32',
    userAgent: 'Mozilla/5.0 (Mac; Intel Mac OS X)',
    isSuspicious: false,
    riskLevel: 'LOW',
  },
  {
    id: '3',
    userId: '2',
    username: 'john.doe',
    action: 'SHARE',
    fileName: 'user_passwords_backup.txt',
    fileId: '3',
    timestamp: new Date('2024-12-19T08:45:00'),
    ipAddress: '192.168.1.45',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    isSuspicious: true,
    riskLevel: 'CRITICAL',
  },
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'DATA_LEAKAGE',
    severity: 'CRITICAL',
    message: 'Sensitive file shared externally',
    userId: '2',
    username: 'john.doe',
    fileName: 'user_passwords_backup.txt',
    timestamp: new Date('2024-12-19T08:45:00'),
    isRead: false,
    details: 'User attempted to share password backup file via external email',
  },
  {
    id: '2',
    type: 'SUSPICIOUS_DOWNLOAD',
    severity: 'HIGH',
    message: 'Multiple sensitive file downloads',
    userId: '2',
    username: 'john.doe',
    fileName: 'employee_salaries_confidential.xlsx',
    timestamp: new Date('2024-12-19T10:30:00'),
    isRead: false,
    details: 'User downloaded 3 sensitive files within 10 minutes',
  },
  {
    id: '3',
    type: 'KEYWORD_DETECTED',
    severity: 'MEDIUM',
    message: 'Sensitive keywords detected in uploaded file',
    userId: '4',
    username: 'mike.wilson',
    fileName: 'financial_report_confidential.docx',
    timestamp: new Date('2024-12-19T07:20:00'),
    isRead: true,
    details: 'Keywords: confidential, financial data, internal only',
  },
];

export const mockKeywords: Keyword[] = [
  { id: '1', word: 'confidential', category: 'Security', riskLevel: 'HIGH', isActive: true, createdAt: new Date('2024-12-01') },
  { id: '2', word: 'password', category: 'Security', riskLevel: 'HIGH', isActive: true, createdAt: new Date('2024-12-01') },
  { id: '3', word: 'salary', category: 'HR', riskLevel: 'MEDIUM', isActive: true, createdAt: new Date('2024-12-01') },
  { id: '4', word: 'internal', category: 'Business', riskLevel: 'LOW', isActive: true, createdAt: new Date('2024-12-01') },
];

export const mockStats: DashboardStats = {
  totalFiles: 156,
  totalUsers: 23,
  todayAccess: 47,
  suspiciousActivities: 8,
  activeAlerts: 5,
};

export const mockChartData: ChartData[] = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 8 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 18 },
  { name: 'Sat', value: 5 },
  { name: 'Sun', value: 3 },
];

export const mockMonthlyData: ChartData[] = [
  { name: 'Jan', value: 45 },
  { name: 'Feb', value: 52 },
  { name: 'Mar', value: 38 },
  { name: 'Apr', value: 61 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 67 },
];

export const mockRiskDistribution: ChartData[] = [
  { name: 'Low', value: 45 },
  { name: 'Medium', value: 25 },
  { name: 'High', value: 20 },
  { name: 'Critical', value: 10 },
];