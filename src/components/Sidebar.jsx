import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch,MdSmartDisplay } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import Playlists from "./Playlists";

export default function Sidebar({ handleHome, handleSearch, handleCreatePlaylist, handlePlaylist }) {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <FaHeadphonesAlt color={"white"} size={"100px"}></FaHeadphonesAlt>
          <span>
            <h1>Awesome Playlist Music</h1>
          </span>
        </div>
        <ul>
          <li onClick={handleHome}>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li onClick={handleCreatePlaylist}>
            <IoAdd />
            <span>Create Playlist</span>
          </li>
          <li onClick={handleSearch}>
            <MdSearch />
            <span>Search</span>
          </li>
        </ul>
      </div>
      <Playlists handlePlaylist={handlePlaylist}/>
    </Container>
  );
}



const Container = styled.div`
  background-color: #A28C2E;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
