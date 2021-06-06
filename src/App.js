import Noteform from "./Components/Noteform";
import Notelist from "./Components/Notelist";


function App() {
  return (
    
      <div className="container">
            <div className="col-md-4 formcontainer">
              <Noteform/>
            </div>
            <div className="col-md-8 notecontainer">
              
                <h1 className="head2 text-center"><strong>Notes</strong></h1>
                
                <Notelist/>
              
            </div>
      </div>
    
  );
}

export default App;
