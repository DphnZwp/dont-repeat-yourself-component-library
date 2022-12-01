import type { PageServerLoad } from './$types';
import { client } from '../../../vendors/utils';

export const load: PageServerLoad = async ({ params }) => {
	const query = `
    query Assets($id: ID) {
        story(where: {id: $id}) {
          slug
          id
          title
          content {
            html
          }
        }
      }`;
	const data = await client({ query, variables: { id: params.id }, fetch: fetch });

	return { ...data.story };
};