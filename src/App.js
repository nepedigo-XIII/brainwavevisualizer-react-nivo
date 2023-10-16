
import './App.css';
import { createRoot } from 'react-dom/client'

// import json_data from './data/data'
// import json_data2 from './data/data2'

import json_data from './data/bwData'

import LineGraph from './components/LineGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button id = "d1">Click me to visualize</button>
      </header>
    </div>
  );
}

export default App; 

let root = null;

let createEventListener = function (id, callback) {
    document.getElementById(id).onclick = callback;
};


let handleEvents = function () {
    createEventListener("d1", () => {updateData(json_data)});
};

// Fix for getBBox error https://github.com/plouc/nivo/issues/2162#issuecomment-1467184517
HTMLCanvasElement.prototype.getBBox = function () {
    return { width: this.offsetWidth, height: this.offsetHeight };
};

let initData = function(){
    let data = [ json_data ]
    root = createRoot(document.getElementById('component'))
    root.render(<LineGraph data={data} />)
}

let updateData = function (dataset) {
    let data = [ dataset ]
    root.render(<LineGraph data={data} />)
    console.log("loading")
}

initData()
handleEvents()


