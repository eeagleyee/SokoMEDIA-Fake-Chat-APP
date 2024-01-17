import PropTypes from "prop-types";

import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${import.meta.env.VITE_API_URL}/assets/${image}`}
      />
    </Box>
  );
};

UserImage.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string, // size is not required since it has a default value
};

export default UserImage;
