import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';

const typeDefs = `
  type Product {
  id:ID!
	name: String
	image: String
	description: String
	price: Float
	quantity: Int
	onStock: Boolean
	category: String
  }

  type Query {
    products: [Product]
    product(productId: ID!): Product
  }
`;

const resolvers = {
	Query: {
		products: () => db.products,
		product: (
			parent: any,
			args: {
				productId: string;
			},
			context: any
		) => {
			return db.products.find((product) => product.id === args.productId);
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
