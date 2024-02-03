import AlbumList from "./components/AlbumList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>Album List App</header>
      <div className="albumContainer">
        <AlbumList />
      </div>
    </div>
  );
}
