import React from 'react';
import FileList from '../components/Files/FileList';
import { mockFiles } from '../utils/mockData';

export default function Files() {
  return (
    <div className="space-y-6">
      <FileList files={mockFiles} />
    </div>
  );
}