interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  phone: string;
  city: string;
  state: string;
  lat?: number;
  lng?: number;
  url: string;
  serviceType?: string;
  areaServed?: string[];
}

export default function LocalBusinessSchema({
  name,
  description,
  phone,
  city,
  state,
  lat,
  lng,
  url,
  serviceType = "Chimney Services",
  areaServed = [],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name,
    description,
    url,
    telephone: `+1${phone}`,
    image: "https://chimmerjim.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    ...(lat && lng ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } } : {}),
    areaServed: areaServed.map((a) => ({ "@type": "City", name: a })),
    serviceType,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "18:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: 500,
      bestRating: "5",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
