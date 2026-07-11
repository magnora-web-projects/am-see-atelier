import { sql } from "@vercel/postgres";
import { client } from "@/src/sanity/lib/client";

export async function getArchivesData() {
  try {
    const { rows } = await sql`SELECT * FROM archives;`;

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      subtitle: row.subtitle,
      description: row.description,
      linkText: row.link_text,
      linkHref: row.link_href,
      imageSrc: row.image_src,
      imageAspect: row.image_aspect,
      imageMaxWidth: row.image_max_width,
    }));
  } catch (error) {
    console.error("Failed to fetch archives:", error);
    return [];
  }
}

export async function getServicesData() {
  const query = `*[_type == "service"]`;
  return await client.fetch(query);
}
