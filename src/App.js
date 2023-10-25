// import logo from './logo.svg';
import './App.css';
import EditPannel from './components/EditPannel';
import EmailBody from './components/EmailBody';
import ComponentPannel from './components/ComponentPannel';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <div className="body">
        <ComponentPannel />
        <DndProvider backend={HTML5Backend}>
        </DndProvider>
        {/* <EditPannel /> */}
      </div>
      {/* <MyComponent /> */}
      {/* <EmailBody /> */}
    </>
  );
}

export default App;
