import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"
import partnersType from "./partners"
import infoType from "./info"
import galleryType from "./gallery"
import carouselType from "./carousel"
import articleType from "./article"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    servicesType,
    teamsType,
    partnersType,
    infoType,
    galleryType,
    carouselType,
    articleType,
  ],
}
