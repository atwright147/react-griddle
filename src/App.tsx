import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useState } from 'react';
import { createSnapModifier } from './snap-modifier';

import { CssGrid } from './components/CssGrid';
import { Draggable } from './components/Draggable';
import { Droppable } from './components/Droppable';

import styles from './App.module.scss';

const snapModifier = createSnapModifier(50);

function App() {
  const [items, setItems] = useState<string[]>([]);

  const handleDragEnd = (event: DragEndEvent): void => {
    if (!event.active || !event.over) {
      return;
    }

    setItems((state) => [...state, event.active.id as string]);
    console.info(event);

    // https://github.com/clauderic/dnd-kit/issues/1261#issuecomment-1873329965
    const draggableElement = document.getElementById(event.active.id as string);
    const droppableElement = document.getElementById(event.over?.id as string);
    const dragPos = { x: 0, y: 0 };

    const droppableDimensions = droppableElement?.getBoundingClientRect();
    if (event.active.rect.current.translated && droppableDimensions) {
      dragPos.x = event.active.rect.current.translated?.left - droppableDimensions?.x;
      dragPos.y = event.active.rect.current.translated?.top - droppableDimensions?.y;
    }

    // console.info(draggableElement, droppableElement);
    // console.info(droppableDimensions);
    // console.info(dragPos);
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} modifiers={[snapModifier, restrictToWindowEdges]}>
        <div className={styles.toolbox}>
          <Draggable id="item01" name="Item 01" />
          <Draggable id="item02" name="Item 02" />
          <Draggable id="item03" name="Item 03" />
        </div>

        <hr />

        <Droppable id="droppable" />

        <DragOverlay modifiers={[snapModifier, restrictToWindowEdges]} className={styles.dragOverlay}>
          <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', width: '100%', height: '100%' }} />
        </DragOverlay>

        <pre className={styles.items}>{JSON.stringify(items, null, 2)}</pre>
      </DndContext>

      <CssGrid columns={12} gap={10} rowHeight={100}>
        <div style={{ outline: '1px solid red' }} />
        <div style={{ outline: '1px solid red' }} />
        <div style={{ outline: '1px solid red' }} />
        <div style={{ outline: '1px solid red' }} />
      </CssGrid>
    </>
  );
}

export default App;
