import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUsers from "./components/users/List";
import AlbumImages from "./components/images/AlbumImages";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-link">
            <Routes>
              <Route exact path="/" element={<ListUsers />} />
              <Route exact path="/albums/photos" element={<AlbumImages />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
