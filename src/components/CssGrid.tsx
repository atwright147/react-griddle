import { CSSProperties, FC, PropsWithChildren } from 'react';

interface Props {
  columns: number;
  gap: number;
  rowHeight: number;
}

// TODO: add forwardRef
export const CssGrid: FC<PropsWithChildren<Props>> = ({ columns, gap, rowHeight, children }): JSX.Element => {
  const styles: CSSProperties = {
    display: 'grid',
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridAutoRows: `${rowHeight}px`,
  };

  return <div style={styles}>{children}</div>;
};
