import { HomeScreen } from 'app/features/home/screen'
import { Fragment } from 'react'

export default function Home() {
  return (
    <>
      <header className="">
        <div className="mx-auto flex w-11/12 justify-between">
          <h1>Where in the world?</h1>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white">
            button
          </button>
        </div>
      </header>
      <div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="block w-full rounded-lg p-2.5 text-sm shadow-lg"
              placeholder="Search for a country"
            />

            <div>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-2"
                >
                  <option>Africa</option>
                  <option>America</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="max-w-sm rounded ">
            {/* <img className="w-full" src="" alt="Flag" /> */}
            <div className="px-8 py-4">
              <div className="mb-2 text-xl font-bold">Country</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
