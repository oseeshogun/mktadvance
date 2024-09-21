import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"
import partnersType from "./partners"
import infoType from "./info"
import galleryType from "./gallery"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType, teamsType, partnersType, infoType, galleryType],
}
