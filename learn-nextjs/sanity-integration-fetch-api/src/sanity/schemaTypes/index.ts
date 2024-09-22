import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { person } from "./person";
import { movies } from "./movies";
import { user } from "./user";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, person, movies, user],
};
