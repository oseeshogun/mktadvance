import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"
import partnersType from "./partners"
import infoType from "./info"
import galleryType from "./gallery"
import carouselType from "./carousel"
import articleType from "./article"
import estimationType from "./estimation"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    estimationType,
    servicesType,
    teamsType,
    partnersType,
    infoType,
    galleryType,
    carouselType,
    articleType,
  ],
}
