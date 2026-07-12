import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-07-11",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

export async function GET() {
  try {
    // پاک کردن دوره‌های اشتباه قبلی
    const existingDocs = await writeClient.fetch('*[_type == "course"]._id');
    if (existingDocs.length > 0) {
      const transaction = writeClient.transaction();
      existingDocs.forEach((id: string) => transaction.delete(id));
      await transaction.commit();
    }

    // درج دقیق اطلاعات SOMMER KINDER-MALKURS
    await writeClient.create({
      _type: "course",
      title: "SOMMER KINDER-MALKURS",
      subtitle: "Juli & August | Bei gutem Wetter – 4 flexible Termine",
      description:
        "Ein kreativer Malkurs direkt am Starnberger See. Kinder malen frei, entdecken Farben und entwickeln spielerisch ihre künstlerischen Fähigkeiten. Am Ende erhalten alle Kinder ein Teilnahme-Zertifikat.",
      contactEmail: "info@atelier-starnberg.de",
      submitButtonText: "Kostenpflichtig Anmelden",
      details: [
        "Preis: 100 € für 4 Termine",
        "Farbe & Leinwand inklusive",
        "Alter: Ab 6 Jahre bis 14 Jahre",
        "Zeit von 11:00 bis 15:00 Uhr (1 Stunde Pause Mittagspause)",
        "Ort: Atelier am See, Starnberger See",
      ],
      organisation: [
        "Es stehen 8 Samstags Termine zur Verfügung",
        "Flexible Kurstermine / (Der 1 Termin muss fix gebucht werden)",
        "Kurs wird durch Stempelkarte Dokumentiert",
        "Kursstart: ab 5 Juni Anmeldung möglich ab: sofort",
        "Teilnahme nur mit Anmeldung",
      ],
      termins: [
        {
          _key: "t1",
          stepNumber: 1,
          title: "1. Termin – Einführung & Farben entdecken",
          description:
            "Begrüßung. Material kennenlernen: Pinsel, Farben, Leinwand. Spielerische Farbübungen und Pinselhaltung. Erste kleine Malaufgabe. Ziel: Kinder fühlen sich wohl und entdecken ihre Kreativität.",
        },
        {
          _key: "t2",
          stepNumber: 2,
          title: "2. Termin – Formen, Natur & kleine Motive",
          description:
            "Beobachtung der Natur am See. Malen einfacher Formen und Motive. Kleine Übungen zu Licht & Schatten. Individuelle Unterstützung für jedes Kind. Ziel: Kinder lernen, Motive bewusst wahrzunehmen.",
        },
        {
          _key: "t3",
          stepNumber: 3,
          title: "3. Termin – Eigenes Bild gestalten",
          description:
            "Auswahl eines eigenen Motivs. Schritt-für-Schritt Begleitung. Arbeiten mit Farbkombinationen. Ruhe, Konzentration und Freude am Prozess. Ziel: Ein persönliches Bild entsteht.",
        },
        {
          _key: "t4",
          stepNumber: 4,
          title: "4. Termin – Abschluss & Zertifikat",
          description:
            "Fertigstellen der Bilder. Kleine Ausstellung der Kinderwerke. Gemeinsame Abschlussrunde. Übergabe der Teilnahme-Zertifikate. Ziel: Stolz, Selbstvertrauen und ein schönes Erlebnis.",
        },
      ],
      formFields: [
        {
          _key: "f1",
          name: "childName",
          label: "Name des Kindes",
          type: "text",
          isRequired: true,
        },
        {
          _key: "f2",
          name: "age",
          label: "Alter",
          type: "text",
          isRequired: true,
        },
        {
          _key: "f3",
          name: "parentName",
          label: "Name der Eltern",
          type: "text",
          isRequired: true,
        },
        {
          _key: "f4",
          name: "email",
          label: "E-Mail Adresse",
          type: "email",
          isRequired: true,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "دوره کودکان با تمام ترمین‌ها با موفقیت جایگزین شد!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 },
    );
  }
}
