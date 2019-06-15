import React from 'react';
import {connect} from "react-redux";
import Wines from "./Wines.jsx";
import {favoriteAC, setWinesAC, unfavoriteAC} from "../../redux/wine-reducer.js";

let mapStateToProps = (state) => {
  return {
    wines: state.winePage.wines
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    favorite: (userId) => {
      dispatch(favoriteAC(userId));
    },
    unfavorite: (userId) => {
      dispatch(unfavoriteAC(userId));
    },
    setWines: (userId) => {
      dispatch(setWinesAC(userId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);