import React, { useEffect, useState } from "react";
import Album from "./Album";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  async function getAlbums() {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await data.json();
    setAlbums(albums);
  }
  useEffect(() => {
    getAlbums();
  }, []);
  return (
    <>
      {albums.map((album) => (
        <Album key={album.id} albumId={album.id} albumTitle={album.title} />
      ))}
    </>
  );
};
export default AlbumList;
