import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

//run sanity
export const client = createClient({
    projectId: "9rkkkbyg",
    dataset: 'portfolio_data',
    apiVersion: "2024-10-01",
    useCdn: true,
    token:"skFma5S4CfJrFD7QdIsbrTctdWqsfN2swTxTpW5PNbs0Y0tp1qrQB1RjNIv4AUGXCuDXT0TR8zSXhIJkSUmDoDL1pmb6Gqx0EBoHAj6oOXCUlQ8nN8bsR9q3Ta8QSRVyvVooybP2TXtpjsh907jb4koxwFaQhJBTaBsLWfgSOeOgMJJft7eC",
});

const builder= imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);