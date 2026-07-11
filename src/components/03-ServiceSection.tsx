import { getServicesData } from "@/src/lib/dataService";
import ServicesClient from "./ServicesClient";

export default async function ServicesSection() {
  const services = await getServicesData();

  if (!services || services.length === 0) {
    return null;
  }

  return <ServicesClient data={services} />;
}
