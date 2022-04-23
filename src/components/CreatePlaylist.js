import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../helper/StateProvider";
import { reducerCases } from "../helper/Constants";

export default function CreatePlaylist({
  createPlaylistBackground,
  handleSearch,
}) {
  const [{ userInfo, token }, dispatch] = useStateProvider();
  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    description: "",
    public: false,
  });

  const createNewPlaylist = async () => {
    await axios({
      method: "POST",
      url: `https://api.spotify.com/v1/users/${userInfo.userId}/playlists`,
      data: newPlaylist,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    await getPlaylistData();
    handleSearch();
  };

  const getPlaylistData = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const { items } = response.data;
    const playlists = items.map(({ name, id }) => {
      return { name, id };
    });
    dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setNewPlaylist({
      ...newPlaylist,
      [evt.target.name]: value,
    });
  }

  return (
    <Container>
      <div className="row">
        <h1 className="title">Create Playlist</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className={"input_playlist"}>
            <input
              name="name"
              placeholder={"Playlist Name"}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className={"input_playlist"}>
            <input
              name="description"
              placeholder={"Description"}
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            onClick={createNewPlaylist}
            style={{
              padding: "0.55rem 2rem",
              fontSize: "16px",
              backgroundColor: "#2BE62D",
              borderRadius: "1rem",
              outline: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Create
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 50%;
  width: 50%;
  background-color: rgb(170 145 39);
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 10fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  margin-left: 15%;
  position: absolute;
  .input_playlist {
    background-color: white;
    width: 70%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .row {
    display: flex;
    margin: 0.1em;
    padding: 0.4rem 1rem;
  }
  .column {
    flex: 100%;
    height: 100%;
    padding: 0.1em;
    margin: 0.1em;
  }
  .title {
    color: white;
  }
`;
