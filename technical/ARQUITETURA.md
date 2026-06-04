# Arquitetura do Atlas Vivo MILK

## 🏗️ Visão Geral
O Atlas Vivo MILK é uma plataforma Web para preservação e mapeamento do património imaterial português.

## 📦 Componentes

### 1. Frontend
- **Tecnologia:** React/Vue.js
- **Função:** Interface de usuário para visualização e interação com os dados.

### 2. Backend
- **Tecnologia:** Node.js (opcional, para APIs)
- **Função:** Processamento de dados e integração com APIs externas (GeoNames, Zenodo).

### 3. Dados
- **Formato:** JSON, CSV, GeoJSON
- **Armazenamento:** GitHub (público), Zenodo (DOI), repositório privado (confidencial).

## 🔗 Integrações
- **Zenodo:** Upload automático de datasets para atribuição de DOI.
- **GeoNames:** Validação de topónimos e localizações geográficas.

## 📊 Fluxo de Dados
1. Coleta de dados (lendas, travas-línguas, rituais).
2. Processamento e padronização (JSON-LD, GeoJSON).
3. Publicação no GitHub e Zenodo.
4. Visualização na Web App.