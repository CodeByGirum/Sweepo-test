import { type ClientSchema, a } from '@aws-amplify/backend';

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((rules) => [
      rules.publicApiKey().to(['create', 'read', 'update', 'delete'])
    ]),
});

export type Schema = ClientSchema<typeof schema>;
export default schema;
