import React from 'react';
import {connect} from "react-redux";
import Wines from "./Wines.jsx";
import {favorite, setWines, unfavorite, setCurrentPage, setTotalWinesCount, toggleIsFetching} from "../../redux/wine-reducer.js";
import * as axios from "axios/index";
import Preloader from "../_Common/Preloader/Preloader";

class WinesContainer extends React.Component {

  componentDidMount() {
    const { toggleIsFetching, pageSize, currentPage, setTotalWinesCount, setWines } = this.props;

    toggleIsFetching(true);
    axios.get(`https://arcticrest.herokuapp.com/wines?perPage=${pageSize}&page=${currentPage}`)
      .then(response => {
        setTotalWinesCount(response.data.total);
        toggleIsFetching(false);
        setWines(response.data.docs);
      });
  }

  onPageChanged = (pageNumber) => {
    const { toggleIsFetching, setCurrentPage, pageSize, setWines } = this.props;

    toggleIsFetching(true);
    setCurrentPage(pageNumber);
    axios.get(`https://arcticrest.herokuapp.com/wines?perPage=${pageSize}&page=${pageNumber}`)
      .then(response => {
        toggleIsFetching(false);
        setWines(response.data.docs)
      });
  };

  render() {
    return (
      <>
        { this.props.isFetching && <Preloader /> }
        <Wines
          onPageChanged={this.onPageChanged}
          wines={this.props.wines}
          pageSize={this.props.pageSize}
          totalWinesCount={this.props.totalWinesCount}
          currentPage={this.props.currentPage}
          favorite={this.props.favorite}
          unfavorite={this.props.unfavorite}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    wines: state.winePage.wines,
    pageSize: state.winePage.pageSize,
    totalWinesCount: state.winePage.totalWinesCount,
    currentPage: state.winePage.currentPage,
    isFetching: state.winePage.isFetching
  }
};

/*let mapDispatchToProps = (dispatch) => {
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
    ,
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
};*/

export default connect(mapStateToProps, {favorite, unfavorite, setWines, setCurrentPage, setTotalWinesCount, toggleIsFetching})(WinesContainer);