'use client';
import { useCompare } from '../context/CompareContext';

export default function SensorCompare() {
    const { comparedSensors, clearCompare } = useCompare();

    if (comparedSensors.length < 2) return null;

    return (
        <div className="mt-10 bg-white shadow-lg rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#264D73]">🆚 Comparação lado a lado</h3>
                <button
                    onClick={clearCompare}
                    className="text-sm text-red-600 hover:underline cursor-pointer"
                >
                    Limpar comparação
                </button>
            </div>

            <div className="overflow-auto">
                <table className="w-full table-auto border text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 text-left">Propriedade</th>
                            {comparedSensors.map((s) => (
                                <th key={s.id} className="p-2 text-left">{s.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 font-semibold">Faixa de Medição</td>
                            {comparedSensors.map((s) => (
                                <td key={s.id} className="p-2">{s.range}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-2 font-semibold">Descrição</td>
                            {comparedSensors.map((s) => (
                                <td key={s.id} className="p-2">{s.description}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-2 font-semibold">Como usar</td>
                            {comparedSensors.map((s) => (
                                <td key={s.id} className="p-2">{s.usage}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-2 font-semibold">Nota</td>
                            {comparedSensors.map((s) => (
                                <td key={s.id} className="p-2">{s.rating.toFixed(1)} ⭐</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
