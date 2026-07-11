import { getArchivesData } from "@/src/lib/dataService";
import OurArchivesClient from "./OurArchivesClient";

export default async function OurArchivesSection() {
  const archives = await getArchivesData();

  if (!archives || archives.length === 0) {
    return null;
  }

  return <OurArchivesClient data={archives} />;
}
