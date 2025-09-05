import React from 'react';
import SettingsPanel from '../components/Settings/SettingsPanel';
import { mockKeywords } from '../utils/mockData';

export default function Settings() {
  return (
    <div className="space-y-6">
      <SettingsPanel keywords={mockKeywords} />
    </div>
  );
}