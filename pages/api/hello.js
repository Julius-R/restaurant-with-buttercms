// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllPostsWithSlug } from "@/lib/api";

export default async function handler(req, res) {
	const response = await getAllPostsWithSlug();
	console.log(response);
	res.status(200).json(response);
}
