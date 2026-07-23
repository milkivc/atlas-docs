DOCUMENTAÇÃO TÉCNICA - AI ACT
**Sistema: Atlas Vivo**
**Associação MILK - Movimento de Intervenções e Linguagens Kulturais e Arte**
**NIPC: 518706451**

---

## 3. DESCRIÇÃO TÉCNICA DO SISTEMA

### 3.1. Arquitetura do Sistema

```mermaid
graph TD
    A[Utilizadores] -->|Submissão| B[Frontend Atlas Vivo]
    B -->|API| C[Backend Services]
    C -->|Git API| D[Codeberg]
    C -->|Zenodo API| E[Zenodo]
    C -->|ORCID API| F[ORCID]
    D -->|Sync| G[GitHub Mirror]
    E -->|DOI| F
    C -->|Metadados| H[SNIG/AMA]
```

**Nota:** Diagrama de arquitetura do Atlas Vivo - sincronizado automaticamente em 2026-07-23T14:04:10.558Z

---

**Documento sincronizado automaticamente pelo Vibe Work Agent**
**Data de sincronização:** 2026-07-23T14:04:10.565Z
**Versão:** 1.0.0
