import "./App.css";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="flex flex-col items-center w-138.5 h-151.5 bg-[#282726] py-12 px-10 space-y-5">
          <Header />
          <StatusBar/>
        </div>
      </div>
    </>
  );
}

export default App;
