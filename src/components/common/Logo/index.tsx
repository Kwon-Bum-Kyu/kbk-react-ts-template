import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="Logo"
        className="order-1 h-[40px] w-[160px] flex-none grow-0"
      />
    </Link>
  );
};

export default Logo;
