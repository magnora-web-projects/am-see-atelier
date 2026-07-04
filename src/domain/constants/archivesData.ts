export interface ArchiveItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAspect: string;
  imageMaxWidth: string;
}

export const archiveData: ArchiveItem[] = [
  {
    id: "galerie",
    title: "KÜNSTLERISCHE HANDSCHRIFTEN",
    subtitle: "Ausgewählte Werke",
    description:
      "Die Galerie des Atelier am See zeigt eine Auswahl an Arbeiten der Künstlerinnen und Künstler, die seit vielen Jahren am Starnberger See tätig sind. Die Werke spiegeln unterschiedliche künstlerische Handschriften wider – von Naturstudien über abstrakte Arbeiten bis hin zu farbintensiven Kompositionen.",
    linkText: "Werke entdecken",
    linkHref: "#",
    imageSrc: "/arch/1.jpg",
    imageAspect: "aspect-[4/5]",
    imageMaxWidth: "max-w-[550px]",
  },
  {
    id: "austausch",
    title: "EIN ORT DES AUSTAUSCHS",
    subtitle: "Mehr als ein Arbeitsraum",
    description:
      "Das Atelier ist nicht nur ein Arbeitsraum, sondern ein Ort des Austauschs: Besucherinnen und Besucher kommen vorbei, schauen zu, stellen Fragen, entdecken Kunst und finden Inspiration. Die offene Atmosphäre lädt dazu ein, die Entstehung der Werke aus nächster Nähe zu erleben.",
    linkText: "Besuchen Sie uns",
    linkHref: "#",
    imageSrc: "/arch/2.webp",
    imageAspect: "aspect-[16/11]",
    imageMaxWidth: "max-w-[600px]",
  },
  {
    id: "kinder",
    title: "KINDER-MALKURS",
    subtitle: "Sommer im Atelier",
    description:
      "Im Sommer öffnet das Atelier zusätzlich seine Türen für den Kinder‑Malkurs, bei dem junge Künstlerinnen und Künstler die Grundlagen der Malerei spielerisch entdecken und ein eigenes Abschlussbild gestalten.",
    linkText: "Kurs anfragen",
    linkHref: "#",
    imageSrc: "/arch/3.webp",
    imageAspect: "aspect-square",
    imageMaxWidth: "max-w-[500px]",
  },
  {
    id: "oeffnungszeiten",
    title: "ÖFFNUNGSZEITEN",
    subtitle: "Jederzeit willkommen",
    description:
      "Das Atelier ist sowohl unter der Woche als auch am Wochenende geöffnet und heißt Interessierte jederzeit herzlich willkommen. Alle ausgestellten Arbeiten können vor Ort angesehen werden, und die Galerie wird regelmäßig aktualisiert, sodass immer neue Werke zu entdecken sind.",
    linkText: "Anfahrt ansehen",
    linkHref: "#",
    imageSrc: "/arch/4.jpg",
    imageAspect: "aspect-[4/3]",
    imageMaxWidth: "max-w-[600px]",
  },
  {
    id: "kuenstler",
    title: "UNSERE KÜNSTLER",
    subtitle: "Dr. Jawid Mamasani · Andrea Zanardi · Mahi Shaban",
    description:
      "Drei Kunstschaffende prägen das Atelier am See. Sie arbeiten seit vielen Jahren am Starnberger See und verbinden professionelle Ausbildung, langjährige Erfahrung und eine zeitgenössische Haltung zur Malerei. Gemeinsam gestalten sie einen offenen, modernen Raum, in dem Kunst entsteht, gezeigt wird und im Austausch weiterwächst.",
    linkText: "Künstlerprofile ansehen",
    linkHref: "#",
    imageSrc: "/arch/5.jpg",
    imageAspect: "aspect-[4/5]",
    imageMaxWidth: "max-w-[500px]",
  },
];
