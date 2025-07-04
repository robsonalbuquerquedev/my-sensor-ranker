'use client';
import Image from 'next/image';
import { Sensor } from '../data/sensors';
import RatingStars from './RatingStars';
import { useCompare } from '../context/CompareContext';

interface SensorCardProps {
    sensor: Sensor;
}

export default function SensorCard({ sensor }: SensorCardProps) {
    const { comparedSensors, toggleCompare } = useCompare();
    const isSelected = comparedSensors.find((s) => s.id === sensor.id);
    return (
        <div className="border rounded-2xl p-4 shadow-md bg-white hover:scale-[1.01] transition-all">
            <div className="w-full h-48 relative rounded-xl overflow-hidden bg-gray-100 mb-3">
                <Image
                    src={sensor.image}
                    alt={sensor.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <h2 className="text-xl font-semibold text-[#264D73]">{sensor.name}</h2>

            {/* Estrelas de avaliação */}
            <div className="mb-2">
                <RatingStars rating={sensor.rating} />
            </div>

            <p className="text-gray-800 text-sm mb-2">
                <strong>Descrição:</strong> {sensor.description}
            </p>

            <p className="text-gray-800 text-sm mb-2">
                <strong>Faixa de Medição:</strong> {sensor.range}
            </p>

            <p className="text-gray-800 text-sm">
                <strong>Como usar:</strong> {sensor.usage}
            </p>

            <p className="text-sm font-medium text-green-600 mb-2">💰 {sensor.price}</p>

            <a
                href={sensor.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors cursor-pointer"
            >
                Comprar
            </a>

            <button
                onClick={() => toggleCompare(sensor)}
                className={`mt-3 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border
    ${isSelected
                        ? 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300'
                    }
    cursor-pointer
  `}
            >
                {isSelected ? 'Remover da comparação' : 'Comparar'}
            </button>
        </div>
    );
}