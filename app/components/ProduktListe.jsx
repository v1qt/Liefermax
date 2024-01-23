import { productionBrowserSourceMaps } from "@/next.config";
import jsondb from "./jsondb/produkte";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function ProduktListe() {
  return (
    <div>
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
        <div className="row row-cols-3">
          {jsondb.produkte.map((produkt) => (
            <div key={produkt.name} className="mt-3 col">
              <Card
                display="flex"
                justifyContent="center"
                alignItems="right"
                sx={{
                  maxWidth: 600,
                }}
              >
                <Link href={"/produkte/${produkt.url}"} passHref>
                  <CardMedia
                    component="img"
                    height="270"
                    image={produkt.bild}
                    alt="burrito"
                  />
                </Link>
                <CardContent
                  display="flex"
                  justifyContent="right"
                  alignItems="right"
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {produkt.name} {produkt.preis}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {produkt.beschreibung}
                  </Typography>
                  <p></p>
                  <Typography
                    display="flex"
                    justifyContent="center"
                    variant="h5"
                  >
                    <Button variant="contained" color="secondary" size="large">
                      Zum Warenkorb
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
