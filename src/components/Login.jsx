import React from "react";
import styled from "styled-components";


export default function Login() {
  const handleClick = async () => {
    const client_id = "6ca09e36618940a6ae3dcba9adac39e5";
    const redirect_uri = "https://final-project-gigih-2-0.vercel.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
      "playlist-modify-private",
      "playlist-read-private"
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container data-testid="test-pageLogin">
      <div data-testid = "test-login">
      <img
        src="src\components\img\spotify.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(32, 87, 100);
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #49f585;
    color: black;
    border: none;
    font-size: 1.9rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
