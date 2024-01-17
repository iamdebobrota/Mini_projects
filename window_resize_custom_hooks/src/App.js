import "./styles.css";
import useWindowDimensions from "./UseWindowDimention";

export default function App() {
  const { width, height } = useWindowDimensions();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h4>Width: {width}px</h4>
      <br />
      <h4>Height: {height}px</h4>
    </div>
  );
}
