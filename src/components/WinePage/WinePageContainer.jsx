import React from 'react';
import WinePage from "./WinePage";
import {connect} from "react-redux";
import * as axios from "axios/index";
import {setWinePage} from "../../redux/winePage-reducer";
import {favorite, unfavorite} from "../../redux/wine-reducer";
import {withRouter} from "react-router-dom";

class WinePageContainer extends React.Component {

  componentDidMount() {
    let wineId = this.props.match.params.wineId;
    axios.get(`http://localhost:3000/wines?wine=${wineId}`)
      .then(response => {
        this.props.setWinePage(response.data);
      });
  }

  render() {
    return (
      <WinePage {...this.props} favorite={this.props.favorite}
                unfavorite={this.props.unfavorite} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    winePage: state.wineProfilePage.winePage
  }
};

let WithUrlDataContainerComponent = withRouter(WinePageContainer);

export default connect(mapStateToProps, {setWinePage, favorite, unfavorite,})(WithUrlDataContainerComponent);