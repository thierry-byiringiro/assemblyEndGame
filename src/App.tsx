import "./App.css";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import StatusBar from "./components/StatusBar";
import Words from "./components/Words";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col items-center w-138.5 h-151.5 bg-[#282726] py-12 px-8 space-y-6">
          <Header />
          <StatusBar/>
          <Languages/>
          <Words/>
          <Keyboard/>
        </div>
      </div>
    </>
  );
}

export default App;
