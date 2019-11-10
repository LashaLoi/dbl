import { useState } from "react";

export const useModal = defaultValue => {
  const [open, setOpen] = useState(defaultValue || false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(open => !open);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle
  };
};
