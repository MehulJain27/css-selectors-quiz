import './App.css';
import Code from './components/Code';
import MyTabs from './components/MyTabs';
import Output from './components/Output';
import Output1 from './components/Output1';
import MyTabs1 from './components/MyTabs1';
import MyTabs2 from './components/MyTabs2';
import Output2 from './components/Output2';
import Preview from './components/Preview';
import Questions from './components/Questions';
import Template from './components/Template';
import useCSSQuery from './hooks/useCSSQuery';

function App() {
  const { query, onChange, parentContainer, question, queIdx } = useCSSQuery()
  const qNo = queIdx + 1
  return (
    <div className="App">
      <h1>CSS Positioning and Z-index Quiz</h1>
      <div className='App-header'>
        <Code source={Template} />
        <Preview source={Template} parentRef={parentContainer} />
      </div>
      <Questions {...{ query, onChange, question, qNo }} />
      <br/>
      <div className="App">
      <h5> Below are some positioning tasks, click Run to load. </h5> 
      <h6>Position the green target box in the top right of the display box.</h6>
      <div className="playground">
        <MyTabs />
        <Output />
      </div>
      <button id="runBtn">Run</button>
    </div>
    <br></br>
    <div className="App">
    <h6>Position the green target box such that it remains in a constant position when scrolled.</h6>
      <div className="playground">
        <MyTabs1 />
        <Output1 />
      </div>
      <button id="runBtn1">Run</button>
    </div>
    <br></br>
    <div className="App">
    <h6>Reverse the order of overlapping boxes, the new order should be box1 {'>'} box2 {'>'} box3</h6>
      <div className="playground">
        <MyTabs2 />
        <Output2 />
      </div>
      <button id="runBtn2">Run</button>
    </div>
    </div>
  );
}

export default App;
