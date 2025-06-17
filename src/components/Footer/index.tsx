import { Typography, SystemIcon, Link } from "@/components/common";
import { SystemIconName } from "@/components/common/SystemIcon/types.tsx";

const icons: { to: string; iconName: SystemIconName }[] = [
  {
    iconName: "linkedin",
    to: "https://www.linkedin.com/in/bumkyu98/",
  },
  {
    iconName: "github",
    to: "https://github.com/Kwon-Bum-Kyu",
  },
  {
    iconName: "envelope-outline",
    to: "mailto:missing107@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-400 bg-white text-gray-800">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-5 md:py-12">
        {/* Left Logo and Icons */}
        <div className="md:col-span-1">
          <Link to="/" className="text-xl font-bold text-black">
            <img
              src="/logo.png"
              alt="Logo"
              className="order-1 h-[40px] w-[160px] flex-none grow-0"
            />
          </Link>
          <div className="mb-6 mt-6 flex space-x-4">
            {icons.map((icon) => (
              <Link key={icon.iconName} to={icon.to}>
                <SystemIcon
                  name={icon.iconName}
                  size={20}
                  className="text-gray-400"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="space-y-2">
            <Typography variant="h5" className="mb-2 text-gray-400">
              Title
            </Typography>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Nav Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Nav Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Nav Link
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex justify-end border-t border-gray-200 px-4 py-4 text-sm text-gray-500 md:px-10">
        <span className="hidden md:inline-block">© DEV KBK 2025</span>
      </div>
    </footer>
  );
}
