import React, { useState } from 'react';
import { Film, Upload, Wand2, Play, Download } from 'lucide-react';

interface MovieData {
  title: string;
  description: string;
}

function App() {
  const [movieData, setMovieData] = useState<MovieData>({
    title: '',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setPreviewUrl('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Film className="w-8 h-8 text-green-400" />
            <h1 className="text-2xl font-bold">AI Movie Trailer Generator</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Movie Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Movie Title</label>
                  <input
                    type="text"
                    value={movieData.title}
                    onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
                    placeholder="Enter movie title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={movieData.description}
                    onChange={(e) => setMovieData({ ...movieData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none h-32"
                    placeholder="Enter movie description"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => document.getElementById('file-upload')?.click()}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Clips</span>
                  </button>
                  <input id="file-upload" type="file" className="hidden" multiple accept="video/*" />
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Wand2 className="w-5 h-5" />
              <span>{isGenerating ? 'Generating...' : 'Generate Trailer'}</span>
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            {previewUrl ? (
              <div className="space-y-4">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition">
                    <Play className="w-16 h-16" />
                  </button>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition">
                  <Download className="w-5 h-5" />
                  <span>Download Trailer</span>
                </button>
              </div>
            ) : (
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Generated trailer will appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;