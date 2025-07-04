import SensorCard from '../components/SensorCard';
import { sensors } from '../data/sensors';
import SensorCompare from '../components/SensorCompare';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#264D73]">
        🔍 DS18B20 Alternatives Ranker
      </h1>
      <p className="text-gray-700 mb-6">
        Compare, avalie e descubra sensores de temperatura similares ao DS18B20.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
      {/* componente de comparação */}
      <SensorCompare />
    </main>
  );
}
