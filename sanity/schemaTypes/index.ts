import { type SchemaTypeDefinition } from "sanity"
import servicesType from "./services"
import teamsType from "./teams"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType, teamsType],
}
