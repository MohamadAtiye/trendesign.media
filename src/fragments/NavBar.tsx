import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { CATEGORIES } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const PAGES = [
  { label: "Home", to: "/" },
  // { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const MobileCats = isHome
    ? [
        <Divider key="cat_devider" />,
        ...CATEGORIES.map((cat) => (
          <MenuItem
            key={cat.label}
            onClick={() => {
              const element = document.getElementById(cat.anchorID);
              if (element) element.scrollIntoView({ behavior: "smooth" });
              handleMobileMenuClose();
            }}
          >
            <p>{cat.label}</p>
          </MenuItem>
        )),
      ]
    : [];

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {PAGES.map((page) => (
        <MenuItem
          key={page.label}
          component={Link}
          to={page.to}
          onClick={handleMobileMenuClose}
        >
          <p>{page.label}</p>
        </MenuItem>
      ))}
      {MobileCats.map((i) => i)}
    </Menu>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          background: "black",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          width: "100%",
          height: "64px",
        }}
      >
        {/* <Typography
          id="back-to-top-anchor"
          variant="h3"
          component="h1"
          sx={{ flexGrow: 1, fontWeight: 600, textAlign: "center", my: 2 }}
        >
          Trendesign
        </Typography> */}
        <img src={"./trendLogoHorizon.jpg"} alt="trendesign" />
      </Toolbar>

      {!isMobile && (
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
            height: "64px",
          }}
        >
          {PAGES.map((page) => (
            <MenuItem
              component={Link}
              to={page.to}
              key={page.label}
              sx={{
                transition: "all 0.2s ease-in",
                "&:hover": {
                  background: "#CFB095",
                },
              }}
            >
              <Typography variant="h6">{page.label}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      )}

      <Divider />
      {isMobile ? (
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
            height: "64px",
          }}
        >
          <IconButton
            edge="end"
            sx={{ marginRight: 2 }}
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          {renderMobileMenu}
        </Toolbar>
      ) : (
        isHome && (
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              width: "100%",
              height: "64px",
            }}
          >
            {CATEGORIES.map((cat) => (
              <MenuItem
                key={cat.label}
                sx={{
                  transition: "all 0.2s ease-in",
                  "&:hover": {
                    background: "#CFB095",
                  },
                }}
                onClick={() => {
                  const element = document.getElementById(cat.anchorID);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Typography variant="h6">{cat.label}</Typography>
              </MenuItem>
            ))}
          </Toolbar>
        )
      )}
    </AppBar>
  );
}
