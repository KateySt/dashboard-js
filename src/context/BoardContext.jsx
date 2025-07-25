import React, { createContext, useContext, useState } from 'react';

const BoardContext = createContext(undefined);

const defaultBoardId = 'default';

const initialBlocks = [
  { id: 'block-1', x: 7, y: 5, w: 2, h: 2, content: 'Блок 1' },
  { id: 'block-2', x: 7, y: 0, w: 5, h: 5, content: 'Блок 2' },
  { id: '1752553983115', x: 9, y: 5, w: 3, h: 2, content: '3' },
  { id: '1752554016460', x: 4, y: 0, w: 3, h: 7, content: '4' },
  { id: '1752554029382', x: 0, y: 5, w: 4, h: 2, content: '5' },
  { id: '1752554057373', x: 0, y: 0, w: 4, h: 5, content: '6' },
];

const generateId = () => Date.now().toString();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState({ [defaultBoardId]: initialBlocks });
  const [currentBoardId, setCurrentBoardId] = useState(defaultBoardId);

  const blocks = boards[currentBoardId] || [];

  const addBlock = (block) => {
    const newBlock = { id: generateId(), ...block };
    setBoards(prev => ({
      ...prev,
      [currentBoardId]: [...prev[currentBoardId], newBlock],
    }));
  };

  const updateBlock = (id, updates) => {
    setBoards(prev => ({
      ...prev,
      [currentBoardId]: prev[currentBoardId].map(b =>
        b.id === id ? { ...b, ...updates } : b
      ),
    }));
  };

  const updateBlockOnBoard = (boardId, id, updates) => {
    setBoards(prev => ({
      ...prev,
      [boardId]: prev[boardId]?.map(b =>
        b.id === id ? { ...b, ...updates } : b
      ),
    }));
  };

  const removeBlock = (id) => {
    setBoards(prev => ({
      ...prev,
      [currentBoardId]: prev[currentBoardId].filter(b => b.id !== id),
    }));
  };

  // Dashboards
  const createDashboardFromCurrent = () => {
    const newId = `board-${generateId()}`;
    setBoards(prev => ({
      ...prev,
      [newId]: [...(prev[currentBoardId] || [])],
    }));
    setCurrentBoardId(newId);
  };

  const createEmptyDashboard = () => {
    const newId = `board-${generateId()}`;
    setBoards(prev => ({
      ...prev,
      [newId]: [],
    }));
    setCurrentBoardId(newId);
  };

  const removeDashboard = (id) => {
    setBoards(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });

    if (id === currentBoardId) {
      const fallbackId = Object.keys(boards).find(bid => bid !== id) || defaultBoardId;
      setCurrentBoardId(fallbackId);
    }
  };

  const switchBoard = (id) => {
    if (boards[id]) {
      setCurrentBoardId(id);
    }
  };

  return (
    <BoardContext.Provider
      value={{
        blocks,
        boards,
        currentBoardId,
        addBlock,
        updateBlock,
        removeBlock,
        updateBlockOnBoard,
        createDashboardFromCurrent,
        createEmptyDashboard,
        removeDashboard,
        switchBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within BoardProvider');
  }
  return context;
};

