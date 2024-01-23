import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function Banner() {
  return (
    <Container maxWidth="80%">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 400,
          },
        }}
      >
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="270"
            image="/bilder/burrito.jpg"
            alt="burrito"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Burrito
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Die Feinsten Burritos Baby!!!!
            </Typography>
            <Link href="/">Home</Link>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="270"
            image="/bilder/pizza.jpg"
            alt="pizza"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pizza con Titty!!!
            </Typography>
            <Link href="/">Home</Link>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="270"
            image="/bilder/burger.jpg"
            alt="burger"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Burger
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Burger me please!!!
            </Typography>
            <Link href="/">Home</Link>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
