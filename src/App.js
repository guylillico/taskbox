import { Provider } from "react-redux";
import store from "./lib/redux";

import Inbox from "./views/Inbox";

import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Inbox />
    </Provider>
  );
};
export default App;
