import { Route, Routes } from "react-router-dom";
import "./scss/main.scss"
import {ErrorPage, Home, Rooms, SingleRoom} from "./pages"

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/rooms" element={<Rooms />}/>
      <Route path="/rooms/:slug" element={<SingleRoom />}/>
      <Route path="*" element={<ErrorPage/>}/>
   </Routes>
   </>
  );
}

export default App;
