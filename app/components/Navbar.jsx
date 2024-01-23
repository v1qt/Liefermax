import Link from "next/link";
import Image from "next/image";

/*import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";*/
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Link href="/">
            <Image
              src={"/bilder/logo.png"}
              alt="logo"
              width={180}
              height={75}
            ></Image>
          </Link>
          <Link href="/warenkorb">
            <Image
              src={"/bilder/warenkorb.png"}
              alt="warenkorb"
              width={30}
              height={30}
            ></Image>
          </Link>

          <Typography
            variant="h8"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
