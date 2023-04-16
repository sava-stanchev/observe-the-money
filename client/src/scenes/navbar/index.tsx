import { useState } from "react";
import { Link } from "react-router-dom";
import SavingsIcon from "@mui/icons-material/Savings";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <SavingsIcon sx={{ fontSize: "28px" }} />
        <Typography
          variant="h4"
          sx={
            isMobileScreen
              ? {
                  fontSize: "14px",
                }
              : {
                  fontSize: "16px",
                }
          }
        >
          Observe the Money
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[600],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[600],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
