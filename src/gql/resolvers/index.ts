import { db } from '../../db.js';

export const resolvers = {
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
		},

		categories: () => db.categories,
		category: (
			parent: any,
			args: {
				categoryId: string;
			},
			context: any
		) => {
			return db.categories.find((category) => category.id === args.categoryId);
		},
		reviews: () => db.reviews,
		review: (parent: any, args: { reviewId: string }, context: any) => {
			return db.reviews.find((review) => review.id === args.reviewId);
		}
	},

	Product: {
		category: (parent: any, args: any, context: any) => {
			return db.categories.find((category) => category.id === parent.categoryId);
		},
		reviews: (parent: any, args: any, context: any) => {
			return db.reviews.filter((review) => review.productId === parent.id);
		}
	},
	Category: {
		products: (parent: any, args: any, context: any) => {
			return db.products.filter((product) => product.categoryId === parent.id);
		}
	}
};
