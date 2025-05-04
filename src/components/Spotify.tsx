// src/components/Spotify.tsx
import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Track {
  artist: string;
  title: string;
  album: string;
  img: string;
  playing: boolean;
  link: string;
}

const Spotify: React.FC = () => {
  const [track, setTrack] = useState<Track>({ artist: "", title: "", album: "", img: "", playing: false, link: "" });
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchCurrentTrack = async () => {
    try {
      const musicResponse = await fetch(
        "https://api.stats.fm/api/v1/users/mcstar123/streams/current"
      ).then((r) => r.json());

      const dataTrack = musicResponse.item.isPlaying
        ? musicResponse.item.track
        : (await fetch(
          "https://api.stats.fm/api/v1/users/mcstar123/streams/recent"
        ).then((r) => r.json())).items[0].track;

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
    const id = setInterval(fetchCurrentTrack, 5000);
    return () => clearInterval(id);
  }, []);

  if (!isLoaded) return null;

  return (
    <Alert
      onClick={() => window.open(track.link, "_blank")}
      className="mt-4 hover:bg-zinc-800 transition-colors duration-200"
    >
      <AlertDescription>
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20 rounded-lg overflow-hidden">
            <AvatarImage src={track.img} alt={track.title} />
            <AvatarFallback>🎵</AvatarFallback>
          </Avatar>
          <div className="text-left text-gray-300">
            <p className="font-medium text-base">{track.title}</p>
            <p className="text-sm">by {track.artist}</p>
            <p className="text-sm italic">on {track.album}</p>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default Spotify;
