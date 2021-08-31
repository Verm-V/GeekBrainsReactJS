import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() => ({}));

const Profile = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <h3>Здесь должна быть страница с информацией о профиле пользователя и всякие штуки имеющие к ней отношение:</h3>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label="Я доволен этой программой."
      />
    </>
  );
};

export default Profile;
