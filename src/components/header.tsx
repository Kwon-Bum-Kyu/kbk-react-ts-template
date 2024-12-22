const Header = () => {
  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container relative mx-auto flex items-center justify-between py-4">
        <a href="index.html" className="flex items-center">
          <img src="assets/img/logo.png" alt="" className="h-8" />
          <h1 className="text-2xl font-bold text-gray-800">ZenBlog</h1>
        </a>

        <nav id="navmenu" className="hidden space-x-6 md:flex">
          <ul className="flex space-x-6">
            <li>
              <a
                href="index.html"
                className="text-gray-700 hover:text-gray-900 active:text-indigo-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="about.html"
                className="text-gray-700 hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="single-post.html"
                className="text-gray-700 hover:text-gray-900"
              >
                Single Post
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Categories
                <i className="bi bi-chevron-down ml-1"></i>
              </a>
              <ul className="absolute mt-2 hidden w-48 space-y-2 rounded-md bg-white py-2 shadow-lg group-hover:block">
                <li>
                  <a
                    href="category.html"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 1
                  </a>
                </li>
                <li className="group relative">
                  <a
                    href="#"
                    className="block items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Deep Dropdown
                    <i className="bi bi-chevron-down ml-1"></i>
                  </a>
                  <ul className="absolute left-full top-0 mt-2 hidden w-48 rounded-md bg-white py-2 shadow-lg group-hover:block">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Deep Dropdown 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Deep Dropdown 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Deep Dropdown 3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Deep Dropdown 4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Deep Dropdown 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="category.html"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 2
                  </a>
                </li>
                <li>
                  <a
                    href="category.html"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 3
                  </a>
                </li>
                <li>
                  <a
                    href="category.html"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Category 4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="contact.html"
                className="text-gray-700 hover:text-gray-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-500">
            <i className="bi bi-linkedin"></i>
          </a>
          <div className="text-gray-600 md:hidden">
            <i className="bi bi-list text-2xl"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
