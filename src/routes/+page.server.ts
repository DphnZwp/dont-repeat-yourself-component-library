
import type { PageServerLoad } from './$types';
import { client } from '../vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
  query Assets {
    stories {
      slug
      id
      title
      content {
        html
      }
      image {
        url
      }
    }
  }`;
	const data = await client({ query, fetch: fetch });

	return {
		stories: data.stories
	};
};