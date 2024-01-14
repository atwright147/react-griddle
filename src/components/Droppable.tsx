import { useDroppable } from '@dnd-kit/core';
import { FC, useEffect } from 'react';
import { CssGrid } from './CssGrid';
import styles from './Droppable.module.scss';

interface Props {
  id: string;
}

export const Droppable: FC<Props> = ({ id }): JSX.Element => {
  const { isOver, setNodeRef, node } = useDroppable({
    id,
  });

  useEffect(() => {
    // // biome-ignore lint/style/noNonNullAssertion: <explanation>
    // const styles = getComputedStyle(node.current!);
    // console.info(styles.display);
    // console.info(styles.gap);
    // console.info(styles.gridAutoRows);
    // console.info(styles.gridTemplateColumns);
    // console.info(node.current?.dataset.columns);
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
