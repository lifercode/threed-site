export default function HeaderApp() {
  return (
    <header className="z-45-global-topbar w-full fixed z-50 z-45-global-topbar border-b border-gray-800 bg-black bg-opacity-90">
      <div className="mx-auto w-full px-4 md:px-8 lg:px-8 max-w-screen-1.5xl flex items-center justify-between h-16">
        <div className="flex items-center space-x-2.5">
          <a href="" className="flex items-center space-x-2.5 font-bold text-gray-800 no-underline dark:text-white">
            Threed Studio
          </a>
        </div>
        <div className="lg:hidden">
          <button type="button" aria-label="Toggle menu" className="flex h-8 w-8 items-center justify-end text-gray-600 dark:text-gray-300">
            <span className="inline-block w-4">
              <svg viewBox="0 0 32 32" fill="current" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.28571C0 3.02357 1.02357 2 2.28571 2H29.7143C30.9786 2 32 3.02357 32 4.28571C32 5.55 30.9786 6.57143 29.7143 6.57143H2.28571C1.02357 6.57143 0 5.55 0 4.28571ZM0 15.7143C0 14.45 1.02357 13.4286 2.28571 13.4286H29.7143C30.9786 13.4286 32 14.45 32 15.7143C32 16.9786 30.9786 18 29.7143 18H2.28571C1.02357 18 0 16.9786 0 15.7143ZM29.7143 29.4286H2.28571C1.02357 29.4286 0 28.4071 0 27.1429C0 25.8786 1.02357 24.8571 2.28571 24.8571H29.7143C30.9786 24.8571 32 25.8786 32 27.1429C32 28.4071 30.9786 29.4286 29.7143 29.4286Z"></path></svg>
            </span>
          </button>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            <a href="https://twitter.com/lifercode/status/1674461318269612040" target="_blank" className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-gray-200">
              <span>Twitter</span>
            </a>
            <a href="https://github.com/lifercode/studio-threed" target="_blank" className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-gray-200">
              <span>GitHub</span>
            </a>
            <a href="https://discord.gg/hxbwuDckeg" target="_blank" className="group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-850 dark:hover:text-gray-200">
              <span>Discord</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}