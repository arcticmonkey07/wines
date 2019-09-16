import Header from "./Header";
import {updateTextActionCreator} from "../../redux/header-reducer";
import {setWines} from "../../redux/wine-reducer.js";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    findWinePage: state.findWinePage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => {
      dispatch(updateTextActionCreator(text));
    },
    setWines: (wine) => {
      dispatch(setWines(wine));
    }
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;