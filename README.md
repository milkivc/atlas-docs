# Atlas Vivo MILK - Documentação

[![ORCID - Eduardo](https://img.shields.io/badge/ORCID-0009--0004--9132--2925-green?logo=orcid)](https://orcid.org/0009-0004-9132-2925)
[![Zenodo](https://img.shields.io/badge/Zenodo-DOI-blue?logo=zenodo)](https://doi.org/10.5281/zenodo.XXXXXXX)
[![GitHub](https://img.shields.io/badge/GitHub-milkivc%2Fatlas--docs-black?logo=github)](https://github.com/milkivc/atlas-docs)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![RGPD Compliant](https://img.shields.io/badge/RGPD-Compliant-green)](https://gdpr-info.eu/)
[![AI Act Compliant](https://img.shields.io/badge/AI_Act-Compliant-green)](https://artificialintelligenceact.eu/)
[![NIS2 Compliant](https://img.shields.io/badge/NIS2-Compliant-green)](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)

**Documentação técnica, legal e financeira do Atlas Vivo MILK**

⚡ **Maximizando DOIs:** Cada release gerada a partir de tags semânticas automaticamente:
- ✅ Cria DOI único via Zenodo
- ✅ Sincroniza com ORCID
- ✅ Atualiza metadados
- ✅ Publica release com DOI

## 📂 Estrutura
```
atlas-docs/
├── CITATION.cff             # Citação padronizada (CFF)
├── metadata.json             # Metadados padronizados (JSON-LD)
├── .zenodo.json              # Metadados para Zenodo
├── technical/
│   ├── ARQUITETURA.md        # Arquitetura do sistema
│   └── API_DOCUMENTATION.md  # Documentação da API
├── legal/
│   ├── PRIVACY_POLICY.md     # Política de privacidade (RGPD)
│   └── TERMS_OF_USE.md       # Termos de uso
└── financial/
    └── PROPOSTAS/             # Propostas de financiamento
```

## 📚 Descrição
Este repositório contém toda a **documentação oficial** do Atlas Vivo MILK, incluindo:
- **Documentação Técnica**: Arquitetura, API, especificações
- **Documentação Legal**: Política de privacidade, termos de uso, conformidade
- **Documentação Financeira**: Propostas de financiamento, orçamentos

Toda a documentação está alinhada com os padrões de **conformidade europeia** (RGPD, AI Act, NIS2) e **soberania tecnológica da UE**.

---

## 🏛️ Autores
- **Associação MILK** - Movimento de Intervenções e Linguagens Kulturais e Arte 🏛️
- **Eduardo Maurício Vieira Cabral e Araujo** - [ORCID: 0009-0004-9132-2925](https://orcid.org/0009-0004-9132-2925) 👤

---

## 🚀 Integração com Zenodo e ORCID

### Geração Automática de DOI
Cada *release* gera automaticamente um **DOI** via:
- **[Zenodo GitHub App](https://zenodo.org/integrations/github)** - Integração nativa
- **Workflow `release.yml`** - DOI + GitHub Release
- **Workflow `zenodo-orcid-blindado.yml`** - DOI + ORCID + Conformidade UE

### Processo de Publicação
```bash
# 1. Criar tag semântica
git tag v1.0.0
git push origin v1.0.0

# 2. O GitHub Actions automaticamente:
#    - Valida metadados
#    - Cria deposit no Zenodo
#    - Gera DOI
#    - Publica no Zenodo
#    - Atualiza metadados com DOI
#    - Sincroniza com ORCID
#    - Cria GitHub Release
```

---

## ✅ Conformidade
- **🔒 RGPD**: Todos os dados pessoais estão anonimizados ou com consentimento explícito
- **🤖 AI Act**: Modelos de IA utilizados são *open-source*
- **🛡️ NIS2**: Logs de auditoria imutáveis para metadados críticos
- **🇪🇺 EU Tech Sovereignty**: Infraestrutura alinhada com provedores europeus

---

## 🔗 Links Úteis
- [🌍 Atlas Vivo MILK](https://github.com/milkivc/atlas-vivo-milk) - Repositório principal
- [📦 Dados Territoriais](https://github.com/milkivc/atlas-datasets) - Repositório de dados
- [📦 Zenodo Community MILK](https://zenodo.org/communities/milk/) - Comunidade Zenodo
- [👤 ORCID Eduardo](https://orcid.org/0009-0004-9132-2925) - Perfil ORCID

---

## 📊 Estatísticas
- **DOIs Gerados**: 0 *(serão gerados automaticamente com cada release)*
- **Versão Atual**: 1.0.0
- **Última Atualização**: 2025-06-14