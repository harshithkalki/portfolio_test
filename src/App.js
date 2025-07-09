import NavBar from "./components/navBar";
import Body from "./components/body";
function App() {
  return (
    <div className="App"
    style={{
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    }}
    >
      <div>
        <NavBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
