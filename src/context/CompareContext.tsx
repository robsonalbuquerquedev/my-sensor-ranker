'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Sensor } from '../data/sensors';
import { sensors as sensorList } from '../data/sensors';

interface CompareContextType {
    comparedSensors: Sensor[];
    toggleCompare: (sensor: Sensor) => void;
    clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
    const [comparedSensors, setComparedSensors] = useState<Sensor[]>([]);

    // Restaurar sensores salvos ao iniciar
    useEffect(() => {
        const saved = localStorage.getItem('comparedSensors');
        if (saved) {
            try {
                const ids = JSON.parse(saved);
                const restored = sensorList.filter((s) => ids.includes(s.id));
                setComparedSensors(restored);
            } catch (e) {
                console.error('Erro ao restaurar sensores:', e);
            }
        }
    }, []);

    // Salvar sempre que mudar
    useEffect(() => {
        const ids = comparedSensors.map((s) => s.id);
        localStorage.setItem('comparedSensors', JSON.stringify(ids));
    }, [comparedSensors]);

    function toggleCompare(sensor: Sensor) {
        setComparedSensors((prev) => {
            const already = prev.find((s) => s.id === sensor.id);
            if (already) {
                return prev.filter((s) => s.id !== sensor.id);
            }
            if (prev.length >= 3) return prev;
            return [...prev, sensor];
        });
    }

    function clearCompare() {
        setComparedSensors([]);
    }

    return (
        <CompareContext.Provider value={{ comparedSensors, toggleCompare, clearCompare }}>
            {children}
        </CompareContext.Provider>
    );
}

export function useCompare() {
    const context = useContext(CompareContext);
    if (!context) throw new Error('useCompare precisa estar dentro do CompareProvider');
    return context;
}
