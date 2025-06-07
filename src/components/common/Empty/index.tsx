import { FaImage, FaFont, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import { EmptyType, EmptyProps } from "@/components/common/Empty/types";

const iconMap: Record<EmptyType, JSX.Element> = {
  blank: <FaTimes className="text-2xl text-gray-400" />,
  image: <FaImage className="text-2xl text-gray-400" />,
  text: <FaFont className="text-2xl text-gray-400" />,
};

const Empty: React.FC<EmptyProps> = ({
  type = "blank",
  size = 64,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center border border-gray-300 bg-gray-100",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {iconMap[type]}
    </div>
  );
};

export default Empty;
