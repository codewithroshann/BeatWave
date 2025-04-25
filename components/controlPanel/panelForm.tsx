import React from 'react'

const panelForm = () => {
  return (
    <div className='container'>

      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>

        <div className='mb-5'>

          <label htmlFor="genre" className="sr-only">Underline select</label>
          <select id="genre " name='genre' className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-gray-400 dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer">
            <option className='px-3' defaultValue="Ganre">Genre</option>
            <option className='px-3' value="Drill">Drill</option>
            <option className='px-3' value="Trap">Trap</option>
            <option className='px-3' value="Hardcore">Hardcore</option>
            <option className='px-3' value="R&B">R&B</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="number" name="bpm" id="bpm" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="BPM" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">BPM</label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="producer" id="producer" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="producer" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Producer/Artist</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="number" name="ammount" id="ammount" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="ammount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
          </div>
        </div>

        <div className='mt-5'>
          <label htmlFor="file-input" className="sr-only">Choose file</label>
          <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-primary file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-primary dark:file:text-white" required />

        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-8 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8">Submit</button>
      </form>

    </div>
  )
}

export default panelForm
