import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export async function getCourseData(courseId?: string) {
  const query = `*[_type == "course"][0]`;

  const data = await client.fetch(query, {}, { cache: "no-store" });

  if (!data) return null;

  return {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    imageSrc: data.image ? urlFor(data.image).url() : "/kid.jpg",
    contactEmail: data.contactEmail,
    submitButtonText: data.submitButtonText,
    details: data.details || [],
    organisation: data.organisation || [],
    termins: data.termins || [],
    formFields: data.formFields || [],
  };
}
