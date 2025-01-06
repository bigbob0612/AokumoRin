import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="container max-w-screen-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Music Player</h1>
          <p className="text-gray-600">Play your favorite songs</p>
        </div>
        <MusicPlayer />
      </div>
    </main>
  );
}
