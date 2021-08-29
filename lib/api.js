import Butter from "buttercms";
const butter = Butter(process.env.BUTTERCMS_API_KEY);

export async function getAllPostsWithSlug() {
	// https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
	const response = await butter.post.list();
	return response?.data?.data;
}
