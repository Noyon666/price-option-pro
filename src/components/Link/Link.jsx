import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <list className="mr-10 hover:bg-yellow-500 px-6">
      <a href={route.path}>{route.name}</a>
    </list>
  );
};

Link.PropTypes = {
  route: PropTypes.object,
};

export default Link;
