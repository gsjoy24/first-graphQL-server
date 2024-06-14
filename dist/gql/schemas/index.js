export const typeDefs = `
  type Product {
  id:ID!
	name: String
	image: String
	description: String
	price: Float
	quantity: Int
	onStock: Boolean
	category: Category
  reviews: [Review]
  }

  type Category {
    id: ID!
    name: String
    products: [Product]
    }

  type Review {
    id: ID!
    date: String
    review: String
    rating: Float
    product: Product
    }

  type Query {
    products: [Product]
    product(productId: ID!): Product

    categories: [Category]
    category(categoryId: ID!): Category

    reviews: [Review]
    review(reviewId: ID!): Review
  }
`;
