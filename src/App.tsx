import "./App.css";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Timer from "./Timer/Timer";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-5 space-x-5">
        <div className="flex flex-col items-center w-138.5 h-151.5 bg-[#282726] py-8 px-8 space-y-6">
          <Header />
          <Keyboard />
        </div>
        <Timer />
      </div>
    </>
  );
}

export default App;
