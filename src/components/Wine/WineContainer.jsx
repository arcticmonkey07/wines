import {connect} from "react-redux";
import Wines from "./Wines.jsx";

let mapStateToProps = (state) => {
  return {
    winePage: state.winePage
  }
}

const WineContainer = connect(mapStateToProps)(Wines);

export default WineContainer;