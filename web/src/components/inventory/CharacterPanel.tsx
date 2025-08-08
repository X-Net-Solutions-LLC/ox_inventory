import React, { useMemo } from 'react';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import WeightBar from '../utils/WeightBar';
import { getTotalWeight } from '../../helpers';

const CharacterPanel: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const totalWeight = useMemo(
    () => (leftInventory.maxWeight ? Math.floor(getTotalWeight(leftInventory.items) * 1000) / 1000 : 0),
    [leftInventory]
  );

  return (
    <div className="character-panel">
      <div className="character-header">
        <div className="character-title-group">
          <span className="character-title">Body</span>
          <span className="character-weight">
            {totalWeight / 1000}/{(leftInventory.maxWeight || 0) / 1000}kg
          </span>
        </div>
        <WeightBar percent={leftInventory.maxWeight ? (totalWeight / leftInventory.maxWeight) * 100 : 0} />
      </div>
      <div className="character-body">
        {/* Silhouette placeholder area */}
        <div className="body-silhouette" />
        {/* Future: equipment slots can be added here */}
      </div>
      <div className="character-footer">
        <div className="character-personal-info-title">Personal Information</div>
        <div className="character-personal-info-list">
          {/* Placeholder personal info entries sourced from additional metadata if available */}
          {/* Keep light and generic to avoid depending on server specifics */}
        </div>
      </div>
    </div>
  );
};

export default CharacterPanel;