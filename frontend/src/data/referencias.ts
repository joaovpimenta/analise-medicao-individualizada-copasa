export interface FonteRef {
  titulo: string
  url: string
  arquivo?: string
  descricao?: string
}

const BASE =
  'https://github.com/joaovpimenta/analise-medicao-individualizada-copasa/blob/main/fontes'

export const arsae = (f: string) => `${BASE}/arsae-mg/${f}`
export const copasa = (f: string) => `${BASE}/copasa/${f}`
export const legislacao = (f: string) => `${BASE}/legislacao/${f}`
export const imprensa = (f: string) => `${BASE}/imprensa/${f}`
export const judiciario = (f: string) => `${BASE}/judiciario/${f}`

export const FONTES = {
  resolucao217: {
    titulo: 'Resolução ARSAE 217/2025',
    url: arsae('resolucao-217-2025.pdf'),
    descricao: 'Revisão tarifária — quadro de tarifas COPASA 2026–2029',
  },
  resolucao226: {
    titulo: 'Resolução ARSAE 226/2026',
    url: arsae('resolucao-226-2026.pdf'),
    descricao: 'Reajuste tarifário anual 2026',
  },
  ntCre10: {
    titulo: 'Nota Técnica CRE 10/2025',
    url: arsae('nt-cre-10-2025.pdf'),
    descricao: 'Estrutura tarifária pós-consulta pública',
  },
  ntGrt01: {
    titulo: 'Nota Técnica GRT 01/2026',
    url: arsae('nt-grt-01-2026-tarifa-social.pdf'),
    descricao: 'Tarifa Social',
  },
  tarifasXlsx: {
    titulo: 'Tarifas COPASA 2025–2026 (XLSX)',
    url: arsae('tarifas-copasa-2025-2026.xlsx'),
    descricao: 'Planilha oficial com valores tarifários',
  },
  arr2025: {
    titulo: 'Avaliação de Resultado Regulatório 2025',
    url: arsae('avaliacao-resultado-regulatorio-2025.pdf'),
  },
  resolucao111: {
    titulo: 'Resolução ARSAE 111/2018',
    url: arsae('resolucoes/resolucao-111-2018.pdf'),
    descricao: 'Primeira revisão tarifária periódica',
  },
  relProMananciais: {
    titulo: 'Relatório Técnico Pró-Mananciais',
    url: arsae('relatorio-tecnico-pro-mananciais.pdf'),
  },

  manualMedicao: {
    titulo: 'Manual de Medição Individualizada',
    url: copasa('manual-medicao-individualizada.pdf'),
    descricao: 'Manual técnico COPASA — 79 páginas',
  },
  estatutoSocial: {
    titulo: 'Estatuto Social COPASA',
    url: copasa('copasa-estatuto-social.pdf'),
  },
  codigoConduta: {
    titulo: 'Código de Conduta COPASA',
    url: copasa('copasa-codigo-conduta.pdf'),
  },
  regulamento2009: {
    titulo: 'Regulamento de Serviços 2009',
    url: copasa('regulamentos/regulamento-servicos-2009.pdf'),
  },

  lei11445: {
    titulo: 'Lei Federal 11.445/2007',
    url: legislacao('lei-11445-2007.html'),
  },
  lei14026: {
    titulo: 'Lei Federal 14.026/2020',
    url: legislacao('lei-14026-2020.html'),
  },
  lei13312: {
    titulo: 'Lei Federal 13.312/2016',
    url: legislacao('federal/lei-13312-2016.html'),
  },
  lei14898: {
    titulo: 'Lei Federal 14.898/2024',
    url: legislacao('federal/lei-14898-2024.html'),
  },
  lei18309: {
    titulo: 'Lei Estadual 18.309/2009',
    url: legislacao('estadual/lei-18309-2009-arsae.pdf'),
  },
  decreto47884: {
    titulo: 'Decreto Estadual 47.884/2020',
    url: legislacao('estadual/decreto-47884-2020.pdf'),
  },

  stjTema414: {
    titulo: 'STJ — Tema 414',
    url: judiciario('stj/stj-tema-414.html'),
  },
  stjRepetitivo: {
    titulo: 'STJ — Recursos Repetitivos COPASA',
    url: judiciario('stj/stj-repetitivo-copasa.html'),
  },
  tjmgCorte: {
    titulo: 'TJMG — Corte Abusivo de Esgoto',
    url: judiciario('tjmg/tjmg-corte-abusivo.html'),
  },
  tjmgCobranca: {
    titulo: 'TJMG — Cobrança Indevida de Tarifa',
    url: judiciario('tjmg/tjmg-cobranca-indevida-tarifa.html'),
  },

  multaCopasa2023: {
    titulo: 'COPASA multada — Procon-MG (2023)',
    url: imprensa('em-2023-multa-copasa.txt'),
  },
  stjRevisao2024: {
    titulo: 'STJ revisa Tema 414 — Migalhas (2024)',
    url: imprensa('migalhas-2024-stj.txt'),
  },
  novasTarifas2026: {
    titulo: 'Novas tarifas COPASA — G1 (2026)',
    url: imprensa('g1-2026-novas-tarifas.html'),
  },
  tarifaSocial2025: {
    titulo: 'Tarifa Social — Hoje em Dia (2025)',
    url: imprensa('hojeemdia-2025-tarifa-social.html'),
  },
  privatizacao2025: {
    titulo: 'Privatização COPASA — O Tempo (2025)',
    url: imprensa('otempo-2025-copasa-privatizacao.html'),
  },
  mpEsgoto2024: {
    titulo: 'COPASA esgoto — Estado de Minas (2024)',
    url: imprensa('outros/em-2024-copasa-esgoto-mp.html'),
  },
  reajuste2024: {
    titulo: 'Reajuste COPASA — G1 (2024)',
    url: imprensa('outros/g1-2024-reajuste-copasa.html'),
  },
  ceoEsgoto2026: {
    titulo: 'CEO esgoto — Exame (2026)',
    url: imprensa('outros/exame-2026-ceo-esgoto.html'),
  },
} as const satisfies Record<string, FonteRef>
