import React, { forwardRef } from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';

export const PlayListContextMenu = forwardRef(({ menuItems, classes }, ref) => {
  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlayListContextMenuItem>
      ))}
    </ul>
  );
});
