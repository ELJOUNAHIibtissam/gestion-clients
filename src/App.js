/* eslint-disable no-unreachable */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientListing from "./ClientListing";
import AddClient from "./AddClient";
import Detail from "./Details";
import EditClient from "./EditClient";

function App() {
  return (
    <div className="App">
      <h1>App CRUD gestion clients</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientListing />}></Route>
          <Route path="/client/add" element={<AddClient />}></Route>
          <Route path="/client/edit/:clientid" element={<EditClient />}></Route>
          <Route path="/client/detail/:clientid" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
