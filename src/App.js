import { createStore } from "redux";
import { Provider } from "react-redux";
import { calendarReducer } from './_reducers/btn_reducer'
import Calendar from './Components/Calendar/Calendar'

const calendarStore = createStore(calendarReducer);

function App() {
  return (
    <div className="App">
      <Provider store={calendarStore}>
        <Calendar />
      </Provider>
    </div>
  );
}

export default App;
