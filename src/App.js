import './App.css';
import Code from './components/Code';
import Preview from './components/Preview';
import Questions from './components/Questions';
import Template from './components/Template';
import useCSSQuery from './hooks/useCSSQuery';

function App() {
  const { query, onChange, parentContainer, question, queIdx } = useCSSQuery()
  const qNo = queIdx + 1
  return (
    <div className="App">
      <h1>CSS Selectors Quiz</h1>
      <div className='App-header'>
        <Code source={Template} />
        <Preview source={Template} parentRef={parentContainer} />
      </div>
      <Questions {...{ query, onChange, question, qNo }} />

    </div>
  );
}

export default App;
