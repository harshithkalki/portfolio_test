import NavBar from "./components/navBar";
import Body from "./components/body";
import { useScrollRefs } from "./hooks/useScrollRef";
function App() {
  const { section1Ref, section2Ref, section3Ref, handleScroll } = useScrollRefs();
  return (
    <div className="App"
    style={{
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    }}
    >
      <div>
        <NavBar handleScroll={handleScroll} refs={{ section1Ref, section2Ref, section3Ref }} />
        <Body refs={{ section1Ref, section2Ref, section3Ref }} />
      </div>
    </div>
  );
}

export default App;
