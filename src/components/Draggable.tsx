import { useDraggable } from '@dnd-kit/core';
import { FC, PropsWithChildren } from 'react';

import styles from './Draggable.module.scss';

interface Props {
  id: string;
  name: string;
}

export const Draggable: FC<PropsWithChildren<Props>> = ({ id, name, children }): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button type="button" id={id} ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div className={styles.icon}>{children}</div>
      <p className={styles.iconLabel}>{name}</p>
    </button>
  );
};
