import OA from "./utils/helper.js";
// import {default as OA}  from "./utils/helper.js"
import { max, sabrina } from "./utils/settings.js";
import { Konto as K} from "./classes/Konto.js";
import Pusteblume  from "./classes/Kinderkonto.js";

OA(new K("DE6206752564419854", max.name, max.vermoegen));
OA(new Pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500));