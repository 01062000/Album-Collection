import React, { useState } from "react";

function Album(props) {
  const [editMode, setEditMode] = useState(false);
  const { albumId } = props;
  const [albumTitle, setAlbumTitle] = useState(props.albumTitle);
  async function handelEdit(e) {
    e.preventDefault();
    setEditMode(false);
    const updatedAlbum = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          title: albumTitle,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(await updatedAlbum.json());
  }
  async function handelDelete(e) {
    e.preventDefault();
    const deletedAlbum = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`,
      {
        method: "DELETE",
      }
    );
    console.log(await deletedAlbum.json());
  }
  return (
    <>
      <div className="album">
        {editMode ? (
          <input
            type="text"
            name="albumTitle"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
          />
        ) : (
          <h2>{albumTitle}</h2>
        )}
        {editMode ? (
          <button onClick={(e) => handelEdit(e)}>Update</button>
        ) : (
          <>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={(e) => handelDelete(e)}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}

export default Album;
