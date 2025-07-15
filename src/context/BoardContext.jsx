import React, {createContext, useContext, useState} from 'react';

const BoardContext = createContext(undefined);

export const BoardProvider = ({children}) => {
  const [blocks, setBlocks] = useState(
    [
      {"id": "block-1", "x": 7, "y": 5, "w": 2, "h": 2, "content": "Блок 1"},
      {"id": "block-2", "x": 7, "y": 0, "w": 5, "h": 5, "content": "Блок 2"},
      {"id": "1752553983115", "x": 9, "y": 5, "w": 3, "h": 2, "content": "3"},
      {"id": "1752554016460", "x": 4, "y": 0, "w": 3, "h": 7, "content": "4"},
      {"id": "1752554029382", "x": 0, "y": 5, "w": 4, "h": 2, "content": "5"},
      {"id": "1752554057373", "x": 0, "y": 0, "w": 4, "h": 5, "content": "6"}
    ]
  );
  const [dashboard, setDashboard] = useState([]);

  const addDashboard = (dashboard) => {
    const newDashboard = {id: Date.now().toString(), dashboard};
    setDashboard(prev => ({...prev, newDashboard}));
  }

  const addBlock = (block) => {
    const newBlock = {id: Date.now().toString(), ...block};
    setBlocks(prev => [...prev, newBlock]);
  };

  const updateBlock = (id, updates) => {
    setBlocks(prev =>
      prev.map(block => (block.id === id ? {...block, ...updates} : block))
    );
  };

  const removeBlock = (id) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
  };

  return (
    <BoardContext.Provider
      value={{
        blocks,
        addBlock,
        updateBlock,
        removeBlock,
        //---
        dashboard,
        addDashboard
      }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) throw new Error('useBoard must be used within BoardProvider');
  return context;
};
