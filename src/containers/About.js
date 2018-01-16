import { connect } from "react-redux";

import { getItems } from "../reducers/items";
import About from "../components/About";

const MapStateToProps = (state, props) => {
  return {
    items: getItems(state, props)
  };
};

export default connect(MapStateToProps)(About);
