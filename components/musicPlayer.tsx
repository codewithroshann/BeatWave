import React from 'react'

const musicPlayer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
          <div className="bg-gray-900 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-4">
              <img alt="Album cover" className="rounded-full w-12 h-12" src="https://placehold.co/50x50" />
              <div>
                <h3 className="text-white text-lg font-semibold">UPAR</h3>
                <p className="text-gray-400 text-sm">spreedt</p>
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">00:09</span>
                  <div className="w-full bg-gray-700 h-1 rounded-full">
                    <div className="bg-green-500 h-1 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-gray-400 text-sm">02:12</span>
                </div>
              </div>
              <button className="text-white text-lg">
                <i className="fas fa-play"></i>
              </button>
              <button className="text-white text-lg">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-white text-lg">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="text-white text-lg">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
  )
}

export default musicPlayer
