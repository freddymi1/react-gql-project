import React from 'react';
import Stage from './Stage/Stage';

const ModuleCatalogComponent = ({ allStageData, stageData }) => {
  return (
    <>
      <div className="block px-6 py-5">
        <h1 className="text-gray-500 text-xl font-bold">CATALOGUE</h1>
        <div className="float-right">
          <select className="float-right -mt-5 relative w-full border-2 border-gray-200 h-12 text-lg font-bold text-gray-500 bg-transparent mt-2 outline-none focus:outline-none">
            <option value="">Filtrer par stage...</option>
            {allStageData.allStages.map((allstage) => (
              <option value={allstage.id}>{allstage.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="block mt-5 overflow-auto" style={{ height: '100vh' }}>
        {stageData.stages.map((stage) => (
          <Stage key={stage.id} stage={stage} />
        ))}
      </div>
    </>
  );
};

export default ModuleCatalogComponent;
