const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <a href="index.html" className="text-2xl font-bold text-white">
              ZenBlog
            </a>
            <div className="space-y-1">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Hic solutasetp
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Molestiae accusamus iure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Excepturi dignissimos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Suscipit distinctio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dilecta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sit quas consectetur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Nobis illum
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Ipsam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Laudantium dolorum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dinera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trodelas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Flexo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center">
        <p>
          © Copyright <strong className="text-white">ZenBlog</strong> All
          Rights Reserved
        </p>
        <div className="text-sm">
          Designed by
          <a
            href="https://bootstrapmade.com/"
            className="hover:text-indigo-400"
          >
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
