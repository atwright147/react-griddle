import { CSSProperties, ComponentPropsWithRef, FC, ReactNode, forwardRef } from 'react';

export interface Props extends ComponentPropsWithRef<'section'> {
  children?: ReactNode;
  columns: number;
  gap: number;
  rowHeight: number;
}

export const CssGrid: FC<Props> = forwardRef(({ columns, gap, rowHeight, children, ...props }, ref) => {
  const styles: CSSProperties = {
    display: 'grid',
    gap: `${gap}px`,
    gridAutoRows: `${rowHeight}px`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <section style={styles} {...props} ref={ref} data-columns={columns}>
      {children}
    </section>
  );
});
