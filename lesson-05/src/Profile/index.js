import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { changeStatus } from "./ProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => ({}));

const Profile = (props) => {
  const classes = useStyles();

  const { checked } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (checked) => {
    dispatch(changeStatus({ checked }));
  };

  return (
    <>
      <h3>
        Здесь должна быть страница с информацией о профиле пользователя и всякие
        штуки имеющие к ней отношение:
      </h3>
      <FormControlLabel
        control={
                  <Checkbox checked={checked} onChange={handleChange} color="primary" />
        }
        label="<<< Чекбокс сохраняет состояние при переключении вкладок."
      />
    </>
  );
};

export default Profile;
