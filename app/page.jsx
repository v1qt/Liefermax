import { PrintDisabled } from "@mui/icons-material";
import Banner from "./components/Banner";
import ProduktListe from "./components/ProduktListe";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProduktListe />
    </div>
  );
}
