import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"
import partnersType from "./partners"
import infoType from "./info"
import categoryType from "./categories"
import realisationType from "./realisations"
import carouselType from "./carousel"
import articleType from "./article"
import estimationType from "./estimation"
import messageType from "./message"
import photoType from "./photo"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    estimationType,
    messageType,
    servicesType,
    teamsType,
    partnersType,
    infoType,
    realisationType,
    categoryType,
    photoType,
    carouselType,
    articleType,
  ],
}
