import React from 'react'
import {UserButton} from '@clerk/clerk-react'
import AddProperty from './AddProperty'
const Dashboard = () => {
  return (
    <>
      <div className="w-full">
        <section className="bg-secondaryBg shadow-lg flex justify-center sticky top-0 z-10 px-5">
          <div className="flex py-5 justify-between items-center max-w-[1440px] w-full">
            <img src="./logo.png" alt="" className="max-w-[40px]" />
            <section className="flex justify-center items-center gap-5">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-primaryHead   hover:text-primaryBtn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </span>
              <span className="shaodow-lg">
                <UserButton />
              </span>
            </section>
          </div>
        </section>

        <section className="w-full flex justify-center">
          <section className='w-full flex'>
            <section className='min-w-[200px] hidden sm:block'>
              tab bar
              </section>
            <section className="flex items-center w-full">
              <AddProperty />
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default Dashboard