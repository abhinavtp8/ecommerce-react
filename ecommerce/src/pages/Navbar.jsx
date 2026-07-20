import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/cart">
        Cart : {products.length}
      </Link>
    </nav>
  );
};

export default Navbar;