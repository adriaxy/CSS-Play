'use client'
import { useGame } from '@/app/GameContext';

export default function OverallProgress({ className = 'main__overall-progress' }) {
  const { sublevelState } = useGame();

  const totalSublevels = sublevelState.reduce((sum, level) => sum + level.length, 0);
  const totalCompleted = sublevelState.reduce((sum, level) => sum + level.filter(s => s.completed).length, 0);
  const progressPercent = totalSublevels > 0 ? Math.round((totalCompleted / totalSublevels) * 100) : 0;

  return (
    <div className={className}>
      <span className="overall-progress__label">Overall progress</span>
      <div className="overall-progress__bar">
        <div className="overall-progress__fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <span className="overall-progress__stats">{totalCompleted}<span className="overall-progress__total">/{totalSublevels}</span></span>
    </div>
  );
}
