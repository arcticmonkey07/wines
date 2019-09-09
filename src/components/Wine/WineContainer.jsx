import React from 'react';
import {connect} from "react-redux";
import Wines from "./Wines.jsx";
import {favoriteAC, setWinesAC, unfavoriteAC, setCurrentPageAC, setTotalWinesCountAC} from "../../redux/wine-reducer.js";
import * as axios from "axios/index";

class WinesContainer extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:3000/wines`)
      .then(response => {
        this.props.setTotalWinesCount(response.data);
      });
    axios.get(`http://localhost:3000/wines?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
      .then(response => {
        this.props.setWines(response.data);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:3000/wines?_limit=${this.props.pageSize}&_page=${pageNumber}`)
      .then(response => {
        this.props.setWines(response.data)
      });
  };

  render() {
    return (
      <Wines
        onPageChanged={this.onPageChanged}
        wines={this.props.wines}
        pageSize={this.props.pageSize}
        totalWinesCount={this.props.totalWinesCount}
        currentPage={this.props.currentPage}
        favorite={this.props.favorite}
        unfavorite={this.props.unfavorite}
      />
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(WinesContainer);