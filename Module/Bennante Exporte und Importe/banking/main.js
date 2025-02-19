import { objekt_anzeigen } from "./utils/helper.js";
import { max, sabrina } from "./utils/settings.js";
import { Konto as K} from "./classes/Konto.js";
import { Pusteblume } from "./classes/Kinderkonto.js";

objekt_anzeigen(new K("DE6206752564419854", max.name, max.vermoegen));
objekt_anzeigen(new Pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));