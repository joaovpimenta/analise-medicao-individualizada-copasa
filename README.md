# Repositório: Tarifas de Água e Esgoto — Copasa MG

> Criado em 03/07/2026 | Pesquisa documental sobre a estrutura tarifária da Copasa

## Objetivo

Compilar fontes oficiais e análises sobre como são aplicadas as tarifas de água, esgoto e tratamento de esgoto pela Copasa em Minas Gerais, com foco em:
- Estrutura tarifária (taxa fixa + variável progressiva)
- Percentual do esgoto sobre a água (74% ED / 30% EE)
- Categorias de usuários (Residencial, Comercial, Industrial, Social)
- Medição individualizada vs rateio em condomínios
- Jurisprudência (STJ Tema 414, TJMG)
- Legislação aplicável (Leis 11.445/2007, 14.026/2020, 13.312/2016)

---

## Estrutura do Repositório

```
copasa-tarifas/
├── README.md
├── .gitignore
├── docs/                                    ← Documentos analíticos
│   ├── fontes_tarifas_copasa.md                    ~60 fontes com links
│   ├── citacoes_tarifas_copasa_APA.md              Citações textuais formato APA
│   └── tarifas_copasa_apartamentos.md              Análise com 3 cenários e exemplos
├── fontes/
│   ├── arsae-mg/                            ← ARSAE-MG (agência reguladora)
│   │   ├── resolucoes/                             19 resoluções (2018-2026)
│   │   ├── notas-tecnicas/                         10 notas técnicas
│   │   ├── nt-cre-01-2021-reconstrucao.pdf
│   │   ├── nt-cre-02-2021-custos-capital.pdf
│   │   ├── nt-cre-03-2021-coe.pdf
│   │   ├── avaliacao-resultado-regulatorio-2025.pdf
│   │   ├── relatorio-tecnico-pro-mananciais.pdf
│   │   ├── tarifas-copasa-2025-2026.xlsx
│   │   └── pagina-copasa-arsae.html
│   ├── copasa/                              ← Documentos oficiais Copasa
│   │   ├── manual-medicao-individualizada.pdf      Manual 79 págs
│   │   ├── regulamentos/regulamento-servicos-2009.pdf
│   │   ├── copasa-estatuto-social.pdf
│   │   └── copasa-codigo-conduta.pdf
│   ├── legislacao/                          ← Leis
│   │   ├── federal/
│   │   │   ├── lei-11445-2007.html                 Saneamento Básico
│   │   │   ├── lei-14026-2020.html                 Marco do Saneamento
│   │   │   ├── lei-13312-2016.html                 Medição individualizada
│   │   │   └── lei-14898-2024.html                 Tarifa Social
│   │   └── estadual/
│   │       ├── lei-18309-2009-arsae.pdf            Criação ARSAE-MG
│   │       └── decreto-47884-2020.pdf              Regulamento ARSAE-MG
│   ├── imprensa/                            ← Artigos jornalísticos
│   │   ├── em-2023-multa-copasa.txt
│   │   ├── migalhas-2024-stj.txt
│   │   └── outros/                                  8 artigos adicionais
│   ├── judiciario/                          ← Fontes judiciais
│   │   ├── stj/                                    STJ Tema 414 + repetitivos
│   │   ├── tjmg/                                   Buscas jurisprudenciais TJMG
│   │   ├── jusbrasil-busca-copasa.html
│   │   └── jusbrasil-busca-esgoto.html
│   └── ana/                                ← ANA (Agência Nacional de Águas)
│       └── ana-pagina-saneamento.html
```

> **Total: ~70 arquivos baixados, ~35 MB de fontes**

---

## Principais achados

### Tarifa de esgoto
- **Esgoto Dinâmico (ED):** ≈74% da tarifa de água (NT CRE 10/2025)
- **Esgoto Estático (EE):** 30% da tarifa de água (Art. 3º, Res. 217/2025)
- Cobrado mesmo sem tratamento — Art. 2º: "sem diferenciação tarifária"

### Categorias (Res. 217/2025 — vigência jan/2026)
| Categoria | Tarifa Fixa Água | 1ª faixa (0-5m³) |
|-----------|:---:|:---:|
| Residencial | R$ 25,77 | R$ 2,69/m³ |
| Social I (65% desc.) | R$ 9,02 | R$ 0,94/m³ |
| Social II (50-55% desc.) | R$ 11,59 | R$ 1,35/m³ |
| Comercial | R$ 42,86 | R$ 5,34/m³ |
| Industrial | R$ 42,86 | R$ 5,34/m³ |

### Medição Individualizada vs Rateio (48 m³, 4 aptos)
| | Individual | Rateio Puro | Rateio Proporcional |
|---|---|---|---|
| Total Copasa | R$ 642,56 | R$ 570,52 | R$ 570,52 |
| Apto baixo (6m³) | R$ 77,47 | R$ 142,63 🔴 | R$ 71,32 🟢 |
| Apto alto (22m³) | R$ 326,43 | R$ 142,63 🟢 | R$ 261,49 🟡 |

---

## Como usar

```bash
git clone <url> copasa-tarifas && cd copasa-tarifas

# Ler análises
cat docs/tarifas_copasa_apartamentos.md

# Consultar fontes
evince fontes/arsae-mg/resolucoes/resolucao-217-2025.pdf

# Buscar nos PDFs
pdfgrep -r "esgoto" fontes/arsae-mg/

# Buscar nos HTMLs
grep -r "tarifa" fontes/imprensa/
```

---

## Fontes consultadas

- **ARSAE-MG**: https://www.arsae.mg.gov.br/
- **Copasa**: https://www.copasa.com.br/ | https://ri.copasa.com.br/
- **Planalto**: https://www.planalto.gov.br/
- **ALMG**: https://www.almg.gov.br/
- **JusBrasil**: https://www.jusbrasil.com.br/
- **TJMG**: https://www4.tjmg.jus.br/
- **STJ**: https://processo.stj.jus.br/
- **ANA**: https://www.gov.br/ana/
- **Estado de Minas**: https://www.em.com.br/
- **Exame**: https://exame.com/
- **Migalhas**: https://www.migalhas.com.br/

---

## Nota sobre arquivos indisponíveis

Algumas resoluções ARSAE-MG não estavam disponíveis como PDF direto (versões de 150, 161, 180, 189, 203, 208, 209). Foram salvas como HTML quando possível. Para acessar o texto integral, consulte os links no documento `docs/fontes_tarifas_copasa.md`.
