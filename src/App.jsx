import Header from "./Components/Header.jsx";

import CoreCocepts from "./Components/CoreConcepts/CoreCocepts.jsx";
import Examples from "./Components/Examples/Examples.jsx";
function App() {
  return (
    <div className="app" >
      <Header></Header>
        <main>
        <CoreCocepts/>
       <Examples/>
        
      </main>
    </div>
  );
}

export default App;
 