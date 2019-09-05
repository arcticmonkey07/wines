import React from 'react';
import {connect} from "react-redux";
import Wines from "./Wines.jsx";
import {favoriteAC, setWinesAC, unfavoriteAC, setCurrentPageAC, setTotalWinesCountAC} from "../../redux/wine-reducer.js";

let mapStateToProps = (state) => {
  return {
    wines: state.winePage.wines,
    pageSize: state.winePage.pageSize,
    totalWinesCount: state.winePage.totalWinesCount,
    currentPage: state.winePage.currentPage
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
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalWinesCount: (totalWinesCount) => {
      dispatch(setTotalWinesCountAC(totalWinesCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);