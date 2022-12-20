import './App.css';
import {DisplaySpaceMission} from "./graphql/index"
function App() {
  return (
    <div className="App ">
      <h1 className='bg-gray-200 font-bold text-2xl mx-auto my-10 w-1/4 p-4 rounded' >SpaceX Missions</h1>
      <div className='flex justify-center items-center gap-2 flex-wrap'>
        <DisplaySpaceMission/>
      </div>
    </div>
  );
}

export default App;
