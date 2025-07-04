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
        id: 'pt100',
        name: 'PT100',
        description: 'Sensor de resistência de platina (RTD) com alta precisão e estabilidade.',
        range: '-200°C a +850°C (varia conforme o modelo)',
        usage: 'Requer circuito de condicionamento de sinal para interface com microcontroladores.',
        image: '/sensor-images/pt100.png',
        rating: 4.6,
        price: 'R$ 78,44',
        buyLink: 'https://produto.mercadolivre.com.br/MLB-2112839500-sensor-pt100-200-a-450-c-haste-30x5mm-_JM#polycard_client=recommendations_vpp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=ranker_entity_v2_retrieval_system_vpp_v2p&reco_client=vpp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=0e65d9eb-bd7b-4f75-bad5-2b3368d22b51&wid=MLB2112839500&sid=recos'
    },
    {
        id: 'ntc10K',
        name: 'NTC 10K',
        description: `Termistor NTC com encapsulamento à prova d'água. Utilizado em aplicações de refrigeração e aquecimento.`,
        range: '-30°C a +105°C',
        usage: 'Conectado diretamente a microcontroladores através de divisores de tensão. Requer calibração para precisão.',
        image: '/sensor-images/ntc10k.png',
        rating: 4.3,
        price: 'R$ 16,00',
        buyLink: 'https://produto.mercadolivre.com.br/MLB-3524744367-sensor-temperatura-ntc-10k-prova-dagua-sonda-2-metros-_JM#polycard_client=recommendations_vpp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=ranker_entity_v2_retrieval_system_vpp_v2p&reco_client=vpp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=8938807f-5892-4902-a420-b7e7b3298f3a&wid=MLB3524744367&sid=recos'
    },
    {
        id: 'termopartipoj',
        name: 'Termopar Tipo J',
        description: 'Termopar com faixa de medição intermediária, adequado para aplicações industriais e laboratoriais.',
        range: '-210°C a +760°C',
        usage: 'Requer amplificador de sinal para interface com microcontroladores.',
        image: '/sensor-images/termopartipoj.png',
        rating: 4.5,
        price: 'R$ 26,00',
        buyLink: 'https://www.mercadolivre.com.br/sensor-de-temperatura-termopar-tipo-j-15mt-haste-4x100mm/up/MLBU598942828#polycard_client=search-nordic&searchVariation=MLBU598942828&wid=MLB1675628800&position=9&search_layout=grid&type=product&tracking_id=2ae42170-4469-4ab0-b1d0-751b24da6303&sid=search'
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
