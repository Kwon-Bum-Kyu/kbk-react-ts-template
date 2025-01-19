import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8 shadow-inner">
      <div className="container mx-auto px-4">
        {/* 로고 및 소셜 미디어 */}
        <div className="desktop:flex-row desktop:items-center flex flex-col items-start justify-between">
          <div className="desktop:mb-0 mb-8">
            <h1 className="mb-4 text-xl font-bold">logologo</h1>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-primary text-gray-600"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                aria-label="Github"
                className="hover:text-primary text-gray-600"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                aria-label="Email"
                className="hover:text-primary text-gray-600"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* 네비게이션 링크 */}
          <div className="desktop:grid-cols-4 grid grid-cols-1 gap-8">
            <div>
              <h2 className="mb-4 font-semibold text-gray-700">Title</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-gray-700">Title</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-gray-700">Title</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-primary text-gray-600">
                    Nav Link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          © Sonia Liou 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
