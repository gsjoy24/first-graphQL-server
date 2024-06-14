export const typeDefs = `
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
