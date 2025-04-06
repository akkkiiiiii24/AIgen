
// Type definitions for the mockData
export interface CategoryDistribution {
  name: string;
  count: number;
}

export interface SourceDistribution {
  name: string;
  count: number;
}

export interface WeeklyTrend {
  week: string;
  count: number;
}

export interface PopularTag {
  name: string;
  count: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  subscription: 'free' | 'pro' | 'pro+';
  avatar?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  date: string;
  type: 'update' | 'digest' | 'subscription';
}
