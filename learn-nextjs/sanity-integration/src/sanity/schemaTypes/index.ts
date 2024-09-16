import { type SchemaTypeDefinition } from 'sanity'
import { petType } from './pet'
import { BlogType } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petType, BlogType],
}
