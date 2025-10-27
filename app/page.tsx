import Image from 'next/image';

export default function Home() {
  const images = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
  ];

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ width: "min(900px, 95vw)" }}>
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Galería</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            alignItems: "center",
          }}
        >
          {images.map((src, i) => (
            <figure
              key={src}
              style={{
                margin: 0,
                position: "relative",
                width: "100%",
                height: 200,
                overflow: "hidden",
                borderRadius: 8,
              }}
            >
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, 45vw"
                style={{ objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
