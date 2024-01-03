import { useDroppable } from '@dnd-kit/core';
import { FC } from 'react';
import { CssGrid } from './CssGrid';
import styles from './Droppable.module.scss';

interface Props {
  id: string;
}

export const Droppable: FC<Props> = ({ id }): JSX.Element => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'green' : undefined,
  };

  return (
    <CssGrid id={id} ref={setNodeRef} className={styles.droppable} columns={12} gap={10} rowHeight={50}>
      {/* ... */}
    </CssGrid>
  );
};
