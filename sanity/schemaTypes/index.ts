import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"
import partnersType from "./partners"
import infoType from "./info"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType, teamsType, partnersType, infoType],
}
