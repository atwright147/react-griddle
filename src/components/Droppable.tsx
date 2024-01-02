import { useDroppable } from '@dnd-kit/core';
import { FC } from 'react';
import styles from './Droppable.module.scss';

interface Props {
  id: string;
}

export const Droppable: FC<Props> = ({ id }): JSX.Element => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div id={id} ref={setNodeRef} className={styles.droppable} style={style}>
      {/* ... */}
    </div>
  );
};
