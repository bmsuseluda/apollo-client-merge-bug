/*** SCHEMA ***/
import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Query {
    people: ExtendedPerson
    peopleWithStreet: ExtendedPerson2
  }

  interface Person {
    id: ID!
    name: String!
  }

  type ExtendedPerson implements Person {
    id: ID!
    name: String!
    age: Int
  }
  
  type ExtendedPerson2 implements Person {
    id: ID!
    name: String!
    street: String
  }
`);
