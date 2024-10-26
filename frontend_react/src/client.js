import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

//run sanity
export const client = createClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'portfolio_data',
    apiVersion: "2024-10-01",
    useCdn: true,
    token:process.env.REACT_APP__SANITY_TOKEN,
});

const builder= imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);