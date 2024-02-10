import React from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';

export const PlayListContextMenu = ({ menuItems, classes }) => {
  return (
    <ul className={classes}>
      {menuItems.map(({ label, subMenuItems }) => (
        <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
          {label}
        </PlayListContextMenuItem>
      ))}
    </ul>
  );
};
