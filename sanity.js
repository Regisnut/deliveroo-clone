import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * @projectIdSonny "quoxusny"
 */

const client = sanityClient({
  projectId: "1s8s88az",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
