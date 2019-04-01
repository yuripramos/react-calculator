import { connect } from "redux-zero/react";

import Calculator from "./Calculator";
import newsActions from "../../actions/News";

export default connect(
  ({ isFilled, FeedArray }) => ({
    isFilled,
    FeedArray
  }),
  newsActions
)(Calculator);
