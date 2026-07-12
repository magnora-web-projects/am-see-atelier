import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export async function getArchivesData() {
  const query = `*[_type == "archive"]`;
  const archives = await client.fetch(query);

  return archives.map((arch: any) => ({
    id: arch._id,
    title: arch.title,
    subtitle: arch.subtitle,
    description: arch.description,
    linkText: arch.linkText,
    linkHref: arch.linkHref,
    imageSrc: arch.image ? urlFor(arch.image).url() : "/contactBG.png",
    imageAspect: arch.imageAspect,
    imageMaxWidth: arch.imageMaxWidth,
  }));
}

export async function getServicesData() {
  const query = `*[_type == "service"]`;
  return await client.fetch(query);
}
