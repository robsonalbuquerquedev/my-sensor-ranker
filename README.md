# 🔥 My Sensor Ranker

Sistema web moderno em **Next.js** para ranquear, comparar e avaliar sensores de temperatura. Ideal para makers, estudantes, professores ou engenheiros que precisam encontrar a melhor alternativa ao clássico **DS18B20**.

---

## 📸 Funcionalidades

✅ Catálogo visual de sensores  
✅ Avaliação por estrelas  
✅ Tabela comparativa lado a lado  
✅ Salvamento no navegador com localStorage  
✅ Interface responsiva e amigável com Tailwind CSS  
✅ Tecnologias aplicadas com boas práticas de UX/UI

---

## 🧪 Sensores já cadastrados

- DHT22 (AM2302)
- AM2301
- TMP36
- Thermocouple (K-type)
- LM35 (versão estanque)
- **E muitos outros podem ser adicionados!**

---

## 🚀 Tecnologias utilizadas

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://react.dev/learn/passing-data-deeply-with-context) para gerenciamento de comparação
- `localStorage` para persistência
- `TypeScript` para tipagem segura

---

## 📦 Instalação local

```bash
# Clone o repositório
git clone https://github.com/robsonalbuquerquedev/my-sensor-ranker.git

# Acesse o diretório
cd my-sensor-ranker

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

Abra http://localhost:3000 para visualizar no navegador.

---

## 🤝 Contribuindo

Quer adicionar um novo sensor ao sistema? Basta editar o arquivo:

```bash
// src/data/sensors.ts
export const sensors: Sensor[] = [ ... ];
```

Ou envie uma pull request com melhorias de estilo, layout ou dados!

---

## 📄 Licença

Este projeto é open-source e está licenciado sob os termos da [LICENSE](LICENSE).

---

### 👨‍💻 Desenvolvido por Robson Albuquerque

---
