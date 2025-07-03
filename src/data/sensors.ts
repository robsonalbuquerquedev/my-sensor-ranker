export interface Sensor {
    id: string;
    name: string;
    description: string;
    range: string;
    usage: string;
    image: string;
    rating: number;
}

export const sensors: Sensor[] = [
    {
        id: 'dht22',
        name: 'DHT22 (AM2302)',
        description:
            'O DHT22 é um sensor que mede temperatura e umidade, com boa precisão e uma versão à prova d’água. Ideal para ambientes externos.',
        range: '-40°C a +80°C (±0.5°C)',
        usage:
            'Conecte ao Arduino usando a biblioteca DHT. Saída digital, fácil leitura.',
        image: '/sensor-images/dht22.png',
        rating: 4.3,
    },
    {
        id: 'am2301',
        name: 'AM2301',
        description:
            'Sensor similar ao DHT22 com capa à prova d’água. Perfeito para projetos externos ou ambientes úmidos.',
        range: '-40°C a +80°C (±0.5°C)',
        usage:
            'Usa a mesma biblioteca DHT do DHT22. Instalação simples com saída digital.',
        image: '/sensor-images/am2301.png',
        rating: 4.1,
    },
    {
        id: 'tmp36',
        name: 'TMP36',
        description:
            'Sensor analógico de temperatura. Pode ser protegido contra água com encapsulamento.',
        range: '-40°C a +125°C (±1°C)',
        usage:
            'Use analogRead() no Arduino. Necessário encapsulamento estanque para proteção.',
        image: '/sensor-images/tmp36.png',
        rating: 3.8,
    },
    {
        id: 'thermocouple',
        name: 'K-type Thermocouple',
        description:
            'Termopar robusto para uso industrial. Existe em versões hermeticamente fechadas e resistentes à água.',
        range: '-200°C a +1372°C (varia conforme o tipo)',
        usage:
            'Requer amplificador como MAX6675/MAX31855 para leitura no Arduino. Sinal de saída é fraco.',
        image: '/sensor-images/thermocouple.png',
        rating: 4.9,
    },
    {
        id: 'lm35',
        name: 'LM35 (Cápsula estanque)',
        description:
            'Sensor analógico comum. Pode ser encapsulado para ficar à prova d’água.',
        range: '-55°C a +150°C (±0.5°C)',
        usage:
            'Conecte ao Arduino e use analogRead(). Para proteção, encapsule com tubo estanque.',
        image: '/sensor-images/lm35.png',
        rating: 4.0,
    },
];
