import { useDispatch, useSelector } from "react-redux";
import { addContent } from "./redux/actionCreators/contentActions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="m-10">
      <p>{state.test}</p>
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => dispatch(addContent())}
      >
        Button
      </button>
    </div>
  );
}

export default App;
