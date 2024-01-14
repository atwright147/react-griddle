import type { Modifier } from '@dnd-kit/core';

export function createSnapModifier(gridSize: number): Modifier {
  return ({ over, transform }) => {
    if (over) {
      const droppableElement = document.getElementById(over.id as string);
      let styles: CSSStyleDeclaration | undefined;
      if (droppableElement) {
        styles = getComputedStyle(droppableElement);
      }

      const columnWidth = Number(styles?.gridTemplateColumns.split(' ')[0].replace('px', '')) ?? 0;
      const paddingTop = Number(styles?.paddingTop.replace('px', ''));
      const paddingLeft = Number(styles?.paddingLeft.replace('px', ''));

      // biome-ignore format: I know better :)
      return {
        ...transform,
        x: (Math.ceil(transform.x / columnWidth) * columnWidth) - paddingLeft,
        y: (Math.ceil(transform.y / columnWidth) * columnWidth) - paddingTop,
        scaleX: 2,
        scaleY: 2,
      };
    }
    return transform;
  };
}
