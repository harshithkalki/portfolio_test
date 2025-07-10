import NavBar from "./components/navBar";
import Body from "./components/body";
import { useScrollRefs } from "./hooks/useScrollRef";
import Footer from "./components/footer";
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
