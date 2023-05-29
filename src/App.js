import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNav from "./Layout/WithNav";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import MachineOperator from "./pages/ShiftOperation/MachineOperator";
import ServerInfo from "./pages/ServerInfo/ServerInfo";
import PrintLable from "./pages/ShiftOperation/PrintLable/PrintLable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="/home" element={<Home/>} />

        <Route element={<WithNav />}>
          <Route path="/machine" element={<Parentroute />}> 

          <Route path="/machine/machineOperator" element={<MachineOperator/>}/>
          <Route path="/machine/serverInfo" element={<ServerInfo/>}/>
          <Route path="/machine/printLable" element={<PrintLable/>}/>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
