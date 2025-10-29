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
        <h1 style={{ textAlign: "center", marginBottom: 20 }}>Test de despliegue</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'
        
        >
          {images.map((src, i) => (
            <figure
              key={src}
              className="m-0 relative w-full overflow-hidden rounded-lg aspect-video"
            >
              <Image
              src={src}
              alt={`Imagen ${i + 1}`}
              fill
              sizes="(max-width: 600px) 100vw, 45vw"
              className="object-cover block"
              loading={i === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
