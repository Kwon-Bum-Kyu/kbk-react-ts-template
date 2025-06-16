import {
  SystemIconName,
  SystemIconProps,
} from "@/components/common/SystemIcon/types";
import React from "react";
import {
  FaBars,
  FaSearch,
  FaInfoCircle,
  FaTimes,
  FaCircle,
  FaRegCircle,
  FaEye,
  FaEyeSlash,
  FaChevronRight,
  FaChevronLeft,
  FaChevronUp,
  FaChevronDown,
  FaToggleOn,
  FaToggleOff,
  FaUser,
  FaUserCircle,
  FaRegUser,
  FaEnvelope,
  FaRegEnvelope,
  FaCaretDown,
  FaCaretUp,
  FaArrowDown,
  FaArrowUp,
  FaArrowLeft,
  FaArrowRight,
  FaCheckSquare,
  FaRegCheckSquare,
  FaCheckCircle,
  FaRegCheckCircle,
  FaSquare,
  FaRegSquare,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const iconMap: Record<
  SystemIconName,
  React.FC<{ className?: string; size?: number | string }>
> = {
  bars: FaBars,
  search: FaSearch,
  info: FaInfoCircle,
  close: FaTimes,
  circle: FaRegCircle,
  "circle-filled": FaCircle,
  eye: FaEye,
  "eye-slash": FaEyeSlash,
  "chevron-right": FaChevronRight,
  "chevron-left": FaChevronLeft,
  "chevron-up": FaChevronUp,
  "chevron-down": FaChevronDown,
  "toggle-on": FaToggleOn,
  "toggle-off": FaToggleOff,
  user: FaUser,
  "user-circle": FaUserCircle,
  "user-outline": FaRegUser,
  envelope: FaEnvelope,
  "envelope-outline": FaRegEnvelope,
  "caret-up": FaCaretUp,
  "caret-down": FaCaretDown,
  "arrow-up": FaArrowUp,
  "arrow-down": FaArrowDown,
  "arrow-left": FaArrowLeft,
  "arrow-right": FaArrowRight,
  "check-square": FaCheckSquare,
  "check-square-outline": FaRegCheckSquare,
  "check-circle": FaCheckCircle,
  "check-circle-outline": FaRegCheckCircle,
  square: FaSquare,
  "square-outline": FaRegSquare,
  linkedin: FaLinkedin,
  github: FaGithub,
  globe: FaGlobe,
};

const SystemIcon: React.FC<SystemIconProps> = ({
  name,
  size = 16,
  className = "",
}) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

export default SystemIcon;
