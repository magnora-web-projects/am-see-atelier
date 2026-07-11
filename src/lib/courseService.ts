import { sql } from "@vercel/postgres";

export async function getCourseData(courseId: string) {
  try {
    const infoResult =
      await sql`SELECT * FROM course_info WHERE id = ${courseId};`;
    const info = infoResult.rows[0];

    if (!info) return null;

    const featuresResult =
      await sql`SELECT category, content FROM course_features WHERE course_id = ${courseId} ORDER BY sort_order ASC;`;

    const terminsResult =
      await sql`SELECT step_number, title, description FROM course_termins WHERE course_id = ${courseId} ORDER BY step_number ASC;`;

    const formFieldsResult =
      await sql`SELECT name, label, type, is_required FROM form_fields WHERE course_id = ${courseId} ORDER BY sort_order ASC;`;

    return {
      ...info,
      details: featuresResult.rows
        .filter((f) => f.category === "details")
        .map((f) => f.content),
      organisation: featuresResult.rows
        .filter((f) => f.category === "organisation")
        .map((f) => f.content),
      termins: terminsResult.rows,
      formFields: formFieldsResult.rows,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch course data.");
  }
}
