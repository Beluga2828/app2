import logo from './logo.svg';
import './App.css';
import { Example } from './components/refexample';
import { RefExam } from './components/refexample2';
import { Reefexample } from './components/reefexample';
import { Myvideo } from './components/video';
import { Connection } from './components/connection';
import { Accordian } from './components/accordian';
import { Exam } from './components/exam';
function App() {
  return (
  
      <>
      <div style={{display:'flex',flexDirection:'column'}}>
        <div><Accordian /></div>
     <div> <Exam /></div>
     </div>
      </>
  
  );
}

export default App;
