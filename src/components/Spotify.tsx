// src/components/Spotify.tsx
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Track {
  artist: string;
  title: string;
  album: string;
  img: string;
  playing: boolean;
  link: string;
}

const Spotify: React.FC = () => {
  const [track, setTrack] = useState<Track>({
    artist: "",
    title: "",
    album: "",
    img: "",
    playing: false,
    link: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchCurrentTrack = async () => {
    try {
      const musicResponse = await fetch(
        "https://api.stats.fm/api/v1/users/mcstar123/streams/current"
      ).then((r) => r.json());

      const dataTrack = musicResponse.item.isPlaying
        ? musicResponse.item.track
        : (
            await fetch(
              "https://api.stats.fm/api/v1/users/mcstar123/streams/recent"
            ).then((r) => r.json())
          ).items[0].track;

      setTrack({
        artist: dataTrack.artists[0].name,
        album: dataTrack.albums[0].name,
        img: dataTrack.albums[0].image,
        title: dataTrack.name,
        link: `https://open.spotify.com/track/${dataTrack.externalIds.spotify[0]}`,
        playing: musicResponse.item.isPlaying,
      });
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  };

  useEffect(() => {
    fetchCurrentTrack();
    const intervalId = setInterval(fetchCurrentTrack, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const redirect = () => {
    if (track.link) window.open(track.link, "_blank");
  };

  if (!isLoaded) return null;

  return (
    <Card
      onClick={redirect}
      className="w-full cursor-pointer text-gray-300 bg-transparent border-none shadow-none"
    >
      <CardContent className="p-5 mt-0 flex items-center space-x-4 hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out">
        <Avatar className="w-28 h-28 rounded-lg overflow-hidden">
          <AvatarImage src={track.img} alt={track.title} />
          <AvatarFallback>🎵</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="font-medium  m-0">{track.title}</p>
          <p className="text-sm m-0">by {track.artist}</p>
          <p className="text-sm italic m-0">on {track.album}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Spotify
