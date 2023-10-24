/* eslint-disable react/no-unknown-property */
const Test = () => {
  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-transparent supports-backdrop-blur:bg-white/60 dark:bg-transparent">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center2">
              <button
                type="button"
                className="lg:hidden text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <i className="bx bx-menu text-[24px] text-white flex items-center pl-1.5 sm:pl-4"></i>
              </button>

              <h2 className="text-white font-bold font-Poppins text-[20px]">
                EzaMovies
              </h2>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        class="hover:text-sky-500 dark:hover:text-sky-400 text-white"
                        href="/docs/installation"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/?ref=top"
                        class="hover:text-sky-500 dark:hover:text-sky-400 text-white"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        class="hover:text-sky-500 dark:hover:text-sky-400 text-white"
                        href="/blog"
                      >
                        Service
                      </a>
                    </li>
                    <li>
                      <a
                        class="hover:text-sky-500 dark:hover:text-sky-400 text-white"
                        href="/showcase"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <label
                    class="sr-only"
                    id="headlessui-listbox-label-:Rpkcr6:"
                    data-headlessui-state=""
                  >
                    Theme
                  </label>
                  <button
                    type="button"
                    id="headlessui-listbox-button-:R19kcr6:"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                    aria-labelledby="headlessui-listbox-label-:Rpkcr6: headlessui-listbox-button-:R19kcr6:"
                  >
                    <span class="dark:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6"
                      >
                        <path
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          class="fill-sky-400/20 stroke-sky-500"
                        ></path>
                        <path
                          d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                          class="stroke-sky-500"
                        ></path>
                      </svg>
                    </span>
                    <span class="hidden dark:inline">
                      <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                          class="fill-sky-400/20"
                        ></path>
                        <path
                          d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                          class="fill-sky-500"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                          class="fill-sky-500"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <span class="sr-only">Tailwind CSS on GitHub</span>
                    <img
                      src="https://i.pinimg.com/736x/f4/1b/5f/f41b5f37588c6c0fd9e6b8df4c3adc01.jpg "
                      className="w-5 h-5 rounded-full object-cover"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <button
                type="button"
                class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span class="sr-only">Search</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    class="fill-sky-400/20 stroke-sky-500"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    class="stroke-sky-500"
                  ></path>
                </svg>
              </button>
              <div className="-my-1 flex items-center justify-center lg:hidden w-8 h-8">
                <img
                  src="https://i.pinimg.com/736x/f4/1b/5f/f41b5f37588c6c0fd9e6b8df4c3adc01.jpg "
                  className="w-4 h-4 rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;
