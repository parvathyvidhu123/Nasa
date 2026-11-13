import React, { useState, useEffect } from 'react';
import { Radio, Satellite, Compass, Activity, ShieldCheck } from 'lucide-react';
import { NASA_HARDWARE } from '../data/nasaHardware';

export const TelemetryHUD: React.FC = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    // Simulated live telemetry counter
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const totalHardware = NASA_HARDWARE.length;
  const operationalCount = NASA_HARDWARE.filter(h => h.operational_status === 'operational').length;
  const inactiveCount = NASA_HARDWARE.filter(h => h.operational_status === 'inactive').length;
  const completedCount = NASA_HARDWARE.filter(h => h.operational_status === 'mission-completed').length;

  return (
    <div className="w-full bg-space-card/80 border-y border-space-border/80 backdrop-blur-md py-3 px-4 scanline">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs font-mono">
        {/* Left Telemetry Group */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-space-success">
            <Radio className="w-4 h-4 animate-pulse" />
            <span className="font-semibold tracking-wide">DSN NETWORK: LOCK ESTABLISHED</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-space-muted">
            <Satellite className="w-3.5 h-3.5 text-space-accent" />
            <span>FARTHEST PROBE: VOYAGER 1 (163.6 AU)</span>
          </div>
        </div>

        {/* Right Status Counters */}
        <div className="flex items-center gap-4 text-space-muted flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-space-muted">TRACKED ARTIFACTS:</span>
            <span className="text-space-text font-bold">{totalHardware}</span>
          </div>
          <div className="w-px h-3 bg-space-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-space-success animate-pulse" />
            <span className="text-space-success font-semibold">{operationalCount} OPERATIONAL</span>
          </div>
          <div className="w-px h-3 bg-space-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>{inactiveCount} INACTIVE ARTIFACTS</span>
          </div>
          <div className="w-px h-3 bg-space-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-space-accent" />
            <span>{completedCount} COMPLETED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

