import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const CheckBoxComponent = ({isCheck, editCheck}) => {
  return (
    <Checkbox
    icon={<FavoriteBorderIcon />}
    checkedIcon={<FavoriteIcon />}
    checked={isCheck}
    onChange={() => editCheck()} />
    )
}

export default CheckBoxComponent;