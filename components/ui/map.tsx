type MapProps = {
  latitude: number;
  longitude: number;
  scale?: number;
  className?: string;
};

export default function Map({ latitude, longitude, scale, className }: MapProps) {
  const lat = latitude || 35.76764734535941;
  const lng = longitude || 50.06351515804299;
  const zoom = scale || 15;

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.001}%2C${lat - 0.001}%2C${lng + 0.001}%2C${lat + 0.001}&layer=mapnik&marker=${lat}%2C${lng}&zoom=${zoom}`;

  return (
    <div className={`${className} overflow-hidden`}>
      <iframe
        title="لوکیشن"
        src={mapUrl}
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
