import React, { forwardRef, useEffect } from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';

export const PlayListContextMenu = forwardRef(
  ({ menuItems, classes, onClose: handleClose }, ref) => {
    useEffect(() => {
      if (!handleClose) return;
      function handleClickAway(event) {
        if (!ref.current.contains(event.target) && handleClose) {
          handleClose();
        }
      }

      function handleEsc(event) {
        if (event.keyCode === 27) {
          handleClose();
        }
      }

      document.addEventListener('mousedown', handleClickAway);
      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('mousedown', handleClickAway);
        document.removeEventListener('keydown', handleEsc);
      };
    });

    return (
      <ul className={classes} ref={ref}>
        {menuItems.map(({ label, subMenuItems }) => (
          <PlayListContextMenuItem key={label} subMenuItems={subMenuItems}>
            {label}
          </PlayListContextMenuItem>
        ))}
      </ul>
    );
  },
);
