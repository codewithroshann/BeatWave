import Link from "next/link"

export function Beatcategory() {
  return (
    <div>
      <div className="container px-4 py-12 mx-auto relative z-10">
        <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-12 text-center ">Browse by Category</h2>
          <div className="grid grid-cols-2 mt-6 md:grid-cols-4 gap-4">

            <div className="bg-muted hover:bg-primary/10 transition-colors rounded-lg p-4 text-center cursor-pointer">
              <div className="bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🔊</span>
              </div>
              <h3 className="font-medium">Trap</h3>
            </div>

            <div className="bg-muted hover:bg-primary/10 transition-colors rounded-lg p-4 text-center cursor-pointer">
              <div className="bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🔊</span>
              </div>
              <h3 className="font-medium">Drill</h3>
            </div>

            <div className="bg-muted hover:bg-primary/10 transition-colors rounded-lg p-4 text-center cursor-pointer">
              <div className="bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🎹</span>
              </div>
              <h3 className="font-medium">R&B</h3>
            </div>

            <div className="bg-muted hover:bg-primary/10 transition-colors rounded-lg p-4 text-center cursor-pointer">
              <div className="bg-primary/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🎧</span>
              </div>
              <h3 className="font-medium">Lo-Fi</h3>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  )
}



