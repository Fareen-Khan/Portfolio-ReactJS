import React, { useState, useEffect } from "react";

function Spotify() {
  const [track, setTrack] = useState({
    artist: "",
    title: "",
    album: "",
    img: "",
    playing: false,
    link: "",
  });

  const fetchCurrentTrack = async () => {
    try {
      const musicResponse = await fetch(
        "https://beta-api.stats.fm/api/v1/users/mcstar123/streams/current"
      ).then((response) => response.json());

      if (musicResponse.status === 404) {
        const recentResponse = await fetch(
          "https://beta-api.stats.fm/api/v1/users/mcstar123/streams/recent"
        ).then((response) => response.json());

        const recentTrack = recentResponse.items[0].track;
        const artist = recentTrack.artists[0].name;
        const album = recentTrack.albums[0].name;
        const img = recentTrack.albums[0].image;
        const title = recentTrack.name;
        const link = `https://open.spotify.com/track/${recentTrack.externalIds.spotify[0]}`;

        setTrack({
          artist,
          album,
          img,
          title,
          link,
          playing: false,
        });
      } else {
        const currentTrack = musicResponse.item.track;
        const artist = currentTrack.artists[0].name;
        const album = currentTrack.albums[0].name;
        const img = currentTrack.albums[0].image;
        const title = currentTrack.name;
        const link = `https://open.spotify.com/track/${currentTrack.externalIds.spotify[0]}`;

        setTrack({
          artist,
          album,
          img,
          title,
          link,
          playing: true,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const redirect = () => {
    window.open(track.link, "_blank");
  };

  return (
    <div className="p-4 w-fit text-secondary hover:scale-110 transition-all italic" onClick={redirect}>
      <h1 className="pb-2 text-left">{track.playing ? "Listening to:" : "Recently Played:"}</h1>
      <div className="text-secondary flex items-center">
        <img
          className="inline-block rounded-md h-16"
          src={track.img}
          alt={track.title}
        />
        <div className="px-4 text-xs text-left">
          <p id="tracktitle">{track.title}</p>
          <p id="trackartist">by {track.artist}</p>
          <p id="trackalbum">on {track.album}</p>
        </div>
      </div>
    </div>
  );
}

export default Spotify;
