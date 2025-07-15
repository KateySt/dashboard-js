import React, { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-all.js';
import { createRoot } from 'react-dom/client';
import { useBoard } from '../context/BoardContext.jsx';

const BlockItem = ({ id, content, onRemove }) => {
  return (
    <div className="w-full h-full bg-purple-900 text-white rounded-lg p-3 flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">{content}</span>
        <button
          onClick={() => onRemove(id)}
          className="text-red-400 hover:text-red-600 text-sm"
        >
          х
        </button>
      </div>
    </div>
  );
};

const GridBoard = () => {
  const gridRef = useRef(null);
  const gridInstance = useRef(null);
  const renderedRoots = useRef({});
  const renderedIds = useRef(new Set());

  const { blocks, addBlock, removeBlock, updateBlock } = useBoard();
console.log(JSON.stringify(blocks));

  useEffect(() => {
    if (!gridInstance.current && gridRef.current) {
      const grid = GridStack.init({ column: 12, float: true }, gridRef.current);
      gridInstance.current = grid;

      grid.on('removed', (e, items) => {
        items.forEach(item => {
          const id = item.id;
          if (renderedRoots.current[id]) {
            renderedRoots.current[id].unmount();
            delete renderedRoots.current[id];
            renderedIds.current.delete(id);
          }
        });
      });

      grid.on('change', (e, items) => {
        items.forEach(item => {
          if (item.id) {
            updateBlock(item.id, {
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
            });
          }
        });
      });

      GridStack.renderCB = (el, widget) => {
        const wrapper = el.closest('.grid-stack-item');
        const id = widget.id;
        const root = createRoot(el);

        root.render(
          <BlockItem
            id={id}
            content={widget.content}
            onRemove={() => {
              grid.removeWidget(wrapper);
              removeBlock(id);
            }}
          />
        );

        renderedRoots.current[id] = root;
      };

      blocks.forEach(block => {
        grid.addWidget({
          x: block.x,
          y: block.y,
          w: block.w,
          h: block.h,
          id: block.id,
          content: block.content,
        });
        renderedIds.current.add(block.id);
      });
    }
  }, []);

  useEffect(() => {
    const grid = gridInstance.current;
    if (grid) {
      blocks.forEach(block => {
        if (!renderedIds.current.has(block.id)) {
          grid.addWidget({
            x: block.x,
            y: block.y,
            w: block.w,
            h: block.h,
            id: block.id,
            content: block.content,
          });
          renderedIds.current.add(block.id);
        }
      });
    }
  }, [blocks]);

  const handleAddBlock = () => {
    addBlock({ x: 0, y: 0, w: 3, h: 2, content: '➕ Новый блок' });
  };

  return (
    <>
      <div className="mb-2">
        <button onClick={handleAddBlock} className="px-4 py-2 bg-blue-600 text-white rounded">
          ➕ Добавить
        </button>
      </div>
      <div
        ref={gridRef}
        className="grid-stack bg-black p-4 rounded-lg"
        style={{ minHeight: '500px' }}
      />
    </>
  );
};

export default GridBoard;
