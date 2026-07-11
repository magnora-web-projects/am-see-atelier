import { getCourseData } from "@/src/lib/courseService";
import RegistrationClient from "./RegistrationClient";

export default async function RegistrationSection() {
  const courseData = await getCourseData("sommer-kinder-malkurs");

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return <RegistrationClient data={courseData} />;
}
