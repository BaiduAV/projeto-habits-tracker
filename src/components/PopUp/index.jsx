import * as React from "react";
import PropTypes from "prop-types";
import { DialogTitle, Dialog, Typography } from "@material-ui/core";
import { useState } from "react";
import { Button } from "./styles";

function SimpleDialog(props) {
  const { onClose, filterhabit, open } = props;

  const handleClose = () => {
    onClose(filterhabit);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [filterhabit, setFilterHabit] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setFilterHabit(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        search habit
      </Button>
      <SimpleDialog
        selectedValue={setFilterHabit}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
