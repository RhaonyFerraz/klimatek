# ❄️ KLIMATEK — Site Comercial + Sistema Operacional, CRM & PWA

Sistema completo de gestão e presença digital desenvolvido para a **KLIMATEK Climatização**.

## 🚀 Funcionalidades Principais

- **Site Comercial Responsivo (Tema Claro):** Logo 3D oficial, favicons e ícones SVG personalizados, seção de serviços, diferenciais, formulário de contato integrado ao CRM e **Calculadora Interativa de BTUs**.
- **Portal Técnico & Gerencial (PWA Exclusivo):** Aplicativo instalável (`KlimaTek Pro`) liberado exclusivamente para Técnicos e Gerente autenticados, com Service Worker (`sw.js`) e suporte offline em campo.
- **Gestão de Ordens de Serviço (O.S.):** Fila por status (*Aberto, Em Andamento, Finalizado*), QR Code gerado já na abertura, aviso automático no WhatsApp (*"Técnico a caminho"*) e **Agenda Visual (Semana e Dia por Técnico)** com detector de conflitos.
- **Laudos de Garantia com QR Code + Assinatura Digital:** Checklist técnico de qualidade, registro fotográfico (antes/depois com compressão automática), assinatura digital na tela do celular, impressão A4 e etiqueta adesiva.
- **CRM & Radar de Publicidade (30 / 60 / 90 dias):** Sincronização automática com O.S. e leads do site, funil comercial, filtros de campanhas (Hoje / Semana / Mês), envio no WhatsApp com reetiquetagem e **QR Code Exclusivo por Cliente** (Portal Multi-Laudos).
- **Orçamentos em PDF, Recibos & Financeiro:** Gerador de propostas comerciais A4 com 1 clique para aprovar e virar O.S., controle de caixa (receitas e despesas), **Recibo Oficial em PDF** com valor por extenso e **Dashboard Gerencial com Gráficos**.
- **Gestão de Equipe, Excel & Nuvem Multi-Celular:** Cadastro dinâmico de técnicos, exportação para Excel (`.csv`), backup/restauração (`.json`) e sincronização em tempo real via **Firebase Realtime Database** com pareamento de celulares por QR Code.

## 📁 Estrutura do Projeto

- `index.html` — Aplicação principal (Site + Portal Técnico + CRM + Financeiro + Dashboard)
- `sw.js` — Service Worker do PWA (suporte offline em campo)
- `site.webmanifest` — Manifesto do aplicativo `KlimaTek Pro`
- `img/` — Logo 3D oficial e pacote de favicons personalizados (`KT`)
- `netlify.toml` & `firebase.json` — Configurações prontas para deploy em HTTPS
- `robots.txt` — Indexação SEO

## 🌐 Deploy Rápido

- **GitHub Pages:** Ative em *Settings → Pages → Branch `main` / root*.
- **Netlify:** Conecte este repositório no Netlify (usa `netlify.toml` automaticamente).
- **Firebase Hosting:** Execute `firebase deploy --only hosting` (usa `firebase.json`).
