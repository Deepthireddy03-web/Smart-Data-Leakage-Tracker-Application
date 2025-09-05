export interface User {
  id: string;
  username: string;
  email: string;
  role: 'ADMIN' | 'EMPLOYEE';
  firstName: string;
  lastName: string;
  lastLogin?: Date;
  isActive: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedBy: string;
  uploadedAt: Date;
  accessCount: number;
  lastAccessed?: Date;
  hasSensitiveContent: boolean;
  sensitiveKeywords: string[];
  path: string;
}

export interface DataLog {
  id: string;
  userId: string;
  username: string;
  action: 'UPLOAD' | 'DOWNLOAD' | 'VIEW' | 'SHARE' | 'DELETE';
  fileName: string;
  fileId: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  isSuspicious: boolean;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface Alert {
  id: string;
  type: 'DATA_LEAKAGE' | 'UNAUTHORIZED_ACCESS' | 'SUSPICIOUS_DOWNLOAD' | 'KEYWORD_DETECTED';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  message: string;
  userId: string;
  username: string;
  fileName?: string;
  timestamp: Date;
  isRead: boolean;
  details: string;
}

export interface Keyword {
  id: string;
  word: string;
  category: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  isActive: boolean;
  createdAt: Date;
}

export interface DashboardStats {
  totalFiles: number;
  totalUsers: number;
  todayAccess: number;
  suspiciousActivities: number;
  activeAlerts: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}