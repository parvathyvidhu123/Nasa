import React from 'react';
import { HardwareStatus, Destination } from '../types/hardware';

interface StatusBadgeProps {
  status: HardwareStatus;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const config = {
    'operational': {
      label: 'Operational',
      dotClass: 'bg-space-success animate-pulse',
      badgeClass: 'bg-emerald-950/40 text-space-success border-emerald-500/30',
    },
    'partially-operational': {
      label: 'Partially Operational',
      dotClass: 'bg-space-warning',
      badgeClass: 'bg-amber-950/40 text-space-warning border-amber-500/30',
    },
    'inactive': {
      label: 'Inactive Artifact',
      dotClass: 'bg-slate-400',
      badgeClass: 'bg-slate-900/60 text-slate-300 border-slate-700/50',
    },
    'mission-completed': {
      label: 'Mission Completed',
      dotClass: 'bg-space-accent',
      badgeClass: 'bg-sky-950/40 text-space-accent border-sky-500/30',
    },
    'unverified': {
      label: 'Status Unverified',
      dotClass: 'bg-rose-500',
      badgeClass: 'bg-rose-950/40 text-rose-300 border-rose-500/30',
    }
  }[status] || {
    label: status,
    dotClass: 'bg-slate-400',
    badgeClass: 'bg-slate-900 text-slate-300 border-slate-700',
  };

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2'
  }[size];

  return (
    <span className={`inline-flex items-center font-mono font-medium rounded-full border shadow-sm backdrop-blur-sm ${config.badgeClass} ${sizeClasses}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotClass}`} />
      {config.label}
    </span>
  );
};

interface DestinationBadgeProps {
  destination: Destination | string;
  size?: 'sm' | 'md';
}

export const DestinationBadge: React.FC<DestinationBadgeProps> = ({ destination, size = 'md' }) => {
  const destinationStyles: Record<string, string> = {
    'Moon': 'bg-slate-800/80 text-slate-200 border-slate-600/40',
    'Mars': 'bg-red-950/50 text-red-300 border-red-500/30',
    'Deep Space': 'bg-purple-950/50 text-purple-300 border-purple-500/30',
    'Saturn': 'bg-amber-950/40 text-amber-200 border-amber-500/30',
    'Jupiter': 'bg-orange-950/40 text-orange-200 border-orange-500/30',
    'Asteroids': 'bg-teal-950/40 text-teal-200 border-teal-500/30',
    'Venus': 'bg-yellow-950/40 text-yellow-200 border-yellow-500/30',
    'Mercury': 'bg-stone-800/60 text-stone-300 border-stone-600/40',
  };

  const style = destinationStyles[destination] || 'bg-space-card text-space-muted border-space-border';
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-0.5';

  return (
    <span className={`inline-flex items-center font-mono uppercase tracking-wider rounded-md border ${style} ${sizeClasses}`}>
      {destination}
    </span>
  );
};

