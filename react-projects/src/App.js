import "./App.css";
import Header from "./components/Header";
import InfiniteScrollExample from "./components/InfiniteScroll";
import GridLayout from "./components/GridLayout";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <InfiniteScrollExample /> */}
      {/* <GridLayout /> */}
      <TodoApp />
    </div>
  );
}

export default App;
