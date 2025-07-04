export interface Sensor {
    id: string;
    name: string;
    description: string;
    range: string;
    usage: string;
    image: string;
    rating: number;
    price: string;
    buyLink: string;
}

export const sensors: Sensor[] = [
    {
        id: 'ds18b20',
        name: 'DS18B20',
        description:
            'Sensor digital de temperatura conhecido por sua precisão, facilidade de uso e versão à prova d’água.',
        range: '-55°C a +125°C (±0.5°C)',
        usage:
            'Pode ser conectado ao Arduino usando o protocolo 1-Wire com a biblioteca OneWire.',
        image: '/sensor-images/ds18b20.png',
        rating: 4.7,
        price: 'R$ 10,90',
        buyLink: 'https://www.eletrogate.com/sensor-de-temperatura-ds18b20-a-prova-dagua'
    },
    {
        id: 'dht22',
        name: 'DHT22 (AM2302)',
        description: 'O DHT22 é um sensor que mede temperatura e umidade, com boa precisão e uma versão à prova d’água.',
        range: '-40°C a +80°C (±0.5°C)',
        usage: 'Conecte ao Arduino usando a biblioteca DHT. Saída digital, fácil leitura.',
        image: '/sensor-images/dht22.png',
        rating: 4.3,
        price: 'R$ 30,90',
        buyLink: 'https://www.saravati.com.br/sensor-de-temperatura-e-umidade-digital-dht22.html'
    },
    {
        id: 'am2301',
        name: 'AM2301',
        description: 'Sensor similar ao DHT22 com capa à prova d’água. Perfeito para projetos externos ou ambientes úmidos.',
        range: '-40°C a +80°C (±0.5°C)',
        usage: 'Usa a mesma biblioteca DHT do DHT22. Instalação simples com saída digital.',
        image: '/sensor-images/am2301.png',
        rating: 4.1,
        price: 'R$ 40,89',
        buyLink: 'https://curtocircuito.com.br/sensor-temperatura-e-umidade-am2301.html'
    },
    {
        id: 'tmp36',
        name: 'TMP36',
        description: 'Sensor analógico de temperatura. Pode ser protegido contra água com encapsulamento.',
        range: '-40°C a +125°C (±1°C)',
        usage: 'Use analogRead() no Arduino. Necessário encapsulamento estanque para proteção.',
        image: '/sensor-images/tmp36.png',
        rating: 3.8,
        price: 'R$ 22,90',
        buyLink: 'https://www.smartkits.com.br/sensor-de-temperatura-tmp36'
    },
    {
        id: 'thermocouple',
        name: 'K-type Thermocouple',
        description: 'Termopar robusto para uso industrial. Existe em versões hermeticamente fechadas e resistentes à água.',
        range: '-200°C a +1372°C (varia conforme o tipo)',
        usage: 'Requer amplificador como MAX6675/MAX31855 para leitura no Arduino. Sinal de saída é fraco.',
        image: '/sensor-images/thermocouple.png',
        rating: 4.9,
        price: 'R$ 39,00',
        buyLink: 'https://produto.mercadolivre.com.br/MLB-4515249108-termopar-tipo-k-sensor-temperatura-2metros-m6-forno-estufa-_JM#polycard_client=recommendations_vip-pads-up&reco_backend=vip-pads-up-experimental-a_marketplace&reco_model=rk_ent_v2_retsys_ads&reco_client=vip-pads-up&reco_item_pos=0&reco_backend_type=low_level&reco_id=73b51846-5995-4827-b11d-bbe9f3830f8e&wid=MLB4515249108&sid=recos&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=1&ad_click_id=ZGM4ODE1ZTYtYzgxNy00OGU1LThiODMtODExMGIwOTY2Y2Ni'
    },
    {
        id: 'lm35',
        name: 'LM35 (Cápsula estanque)',
        description: 'Sensor analógico comum. Pode ser encapsulado para ficar à prova d’água.',
        range: '-55°C a +150°C (±0.5°C)',
        usage: 'Conecte ao Arduino e use analogRead(). Para proteção, encapsule com tubo estanque.',
        image: '/sensor-images/lm35.png',
        rating: 4.0,
        price: 'R$ 28,17',
        buyLink: 'https://www.amazon.com.br/Lm35-Sensor-De-Temperatura-Lm35dz/dp/B0BZDM8WJY'
    }
];
