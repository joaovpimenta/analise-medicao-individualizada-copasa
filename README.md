# Repositório: Tarifas de Água e Esgoto — Copasa MG

> Criado em 03/07/2026 | Pesquisa documental sobre a estrutura tarifária da Copasa

## Objetivo

Compilar fontes oficiais e análises sobre como são aplicadas as tarifas de água, esgoto e tratamento de esgoto pela Copasa em Minas Gerais, com foco em:
- Estrutura tarifária (taxa fixa + variável progressiva)
- Percentual do esgoto sobre a água
- Categorias de usuários (Residencial, Comercial, Industrial, Social)
- Medição individualizada vs rateio em condomínios
- Jurisprudência (STJ Tema 414)
- Legislação aplicável (Leis 11.445/2007 e 14.026/2020)

---

## Estrutura do Repositório

```
copasa-tarifas/
├── README.md                        ← Este arquivo
├── docs/                            ← Documentos analíticos produzidos
│   ├── fontes_tarifas_copasa.md            Lista de ~60 fontes com links
│   ├── citacoes_tarifas_copasa_APA.md      Citações textuais em formato APA
│   └── tarifas_copasa_apartamentos.md      Análise completa com exemplos reais
├── fontes/                          ← Fontes primárias baixadas
│   ├── arsae-mg/                    ← ARSAE-MG (agência reguladora)
│   │   ├── resolucao-217-2025.pdf         Resolução tarifária vigente (2026)
│   │   ├── resolucao-197-2024.pdf         Resolução reajuste 2024
│   │   ├── nt-cre-10-2025.pdf             NT Estrutura Tarifária (~85 páginas)
│   │   ├── nt-grt-07-2024.pdf             NT Reajuste 2024
│   │   ├── tarifas-copasa-2025-2026.xlsx  Planilha com tabelas tarifárias históricas
│   │   └── pagina-copasa-arsae.html       Página da Copasa no site da ARSAE
│   ├── copasa/                      ← Documentos oficiais da Copasa
│   │   └── manual-medicao-individualizada.pdf  Manual técnico (79 páginas)
│   ├── legislacao/                  ← Leis federais
│   │   ├── lei-11445-2007.html            Lei do Saneamento Básico
│   │   └── lei-14026-2020.html            Marco Legal do Saneamento
│   ├── imprensa/                    ← Artigos jornalísticos
│   │   ├── em-2023-multa-copasa.txt       Multa de R$ 11,2 mi (Estado de Minas)
│   │   └── migalhas-2024-stj.txt          Revisão Tema 414 STJ (Migalhas)
│   └── judiciario/                  ← Fontes judiciais (a preencher)
└── .gitignore
```

---

## Principais achados

### Tarifa de esgoto
- **Esgoto Dinâmico (ED):** ≈74% da tarifa de água (NT CRE 10/2025)
- **Esgoto Estático (EE):** 30% da tarifa de água (Art. 3º, Res. 217/2025)
- Cobrado mesmo sem tratamento — Art. 2º: "sem diferenciação tarifária em razão da existência ou não de tratamento"

### Categorias (Res. 217/2025)
| Categoria | Tarifa Fixa Água | 1ª faixa (0-5m³) |
|-----------|:---:|:---:|
| Residencial | R$ 25,77 | R$ 2,69/m³ |
| Residencial Social I (65% desc.) | R$ 9,02 | R$ 0,94/m³ |
| Residencial Social II (50-55% desc.) | R$ 11,59 | R$ 1,35/m³ |
| Comercial | R$ 42,86 | R$ 5,34/m³ |
| Industrial | R$ 42,86 | R$ 5,34/m³ |

### Medição Individualizada vs Rateio (48 m³, 4 aptos)
| | Individual | Rateio Puro | Rateio Proporcional |
|---|---|---|---|
| Total Copasa | R$ 642,56 | R$ 570,52 | R$ 570,52 |
| Apto baixo consumo (6m³) | R$ 77,47 | R$ 142,63 🔴 | R$ 71,32 🟢 |
| Apto alto consumo (22m³) | R$ 326,43 | R$ 142,63 🟢 | R$ 261,49 🟡 |

---

## Como usar este repositório

```bash
# Clonar
git clone <url> copasa-tarifas
cd copasa-tarifas

# Ler as análises
cat docs/tarifas_copasa_apartamentos.md

# Consultar fontes primárias
evince fontes/arsae-mg/resolucao-217-2025.pdf

# Buscar por termo específico nos PDFs
pdfgrep "esgoto" fontes/arsae-mg/*.pdf
```

---

## Fontes consultadas (links originais)

Ver `docs/fontes_tarifas_copasa.md` para a lista completa com ~60 links.

### Principais
- ARSAE-MG: https://www.arsae.mg.gov.br/
- Copasa: https://www.copasa.com.br/
- Planalto (leis): https://www.planalto.gov.br/
- JusBrasil: https://www.jusbrasil.com.br/

---

## Licença

Os documentos oficiais (ARSAE-MG, Copasa, legislação) são de domínio público.
As análises neste repositório são de uso livre com atribuição.
