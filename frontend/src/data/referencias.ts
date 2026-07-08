export interface FonteRef {
  titulo: string
  url: string
  arquivo?: string
  descricao?: string
}

const RAW =
  'https://raw.githubusercontent.com/joaovpimenta/analise-medicao-individualizada-copasa/main/fontes'

export const arsae = (f: string) => `${RAW}/arsae-mg/${f}`
export const copasa = (f: string) => `${RAW}/copasa/${f}`
export const legislacao = (f: string) => `${RAW}/legislacao/${f}`
export const imprensa = (f: string) => `${RAW}/imprensa/${f}`
export const judiciario = (f: string) => `${RAW}/judiciario/${f}`

export const FONTES = {
  resolucao217: {
    titulo: 'Resolução ARSAE 217/2025',
    url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2025/12/Resolucao_ArsaeMG_217_2025.pdf',
    descricao: 'Revisão tarifária — quadro de tarifas COPASA 2026–2029',
  },
  resolucao226: {
    titulo: 'Resolução ARSAE 226/2026',
    url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2026/06/226_2026_homologa_tabela_precos_prazos_servicos_nao_tarifados_copasa.pdf',
    descricao: 'Reajuste tarifário anual 2026',
  },
  ntCre10: {
    titulo: 'Nota Técnica CRE 10/2025',
    url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2025/06/NT_CRE_10_2025_EstruturaTarifaria_PosCP_corrigida28082025.pdf',
    descricao: 'Estrutura tarifária pós-consulta pública',
  },
  ntGrt01: {
    titulo: 'Nota Técnica GRT 01/2026',
    url: arsae('nt-grt-01-2026-tarifa-social.pdf'),
    descricao: 'Tarifa Social',
  },
  tarifasXlsx: {
    titulo: 'Tarifas COPASA 2025–2026 (XLSX)',
    url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2026/02/TarifasCOPASA.xlsx',
    descricao: 'Planilha oficial com valores tarifários',
  },
  arr2025: {
    titulo: 'Avaliação de Resultado Regulatório 2025',
    url: arsae('avaliacao-resultado-regulatorio-2025.pdf'),
  },
  resolucao111: {
    titulo: 'Resolução ARSAE 111/2018',
    url: 'https://www.arsae.mg.gov.br/images/documentos/audiencia_publica/Resolucao_111_ReajusteCopasa_2018.pdf',
    descricao: 'Primeira revisão tarifária periódica',
  },
  relProMananciais: {
    titulo: 'Relatório Técnico Pró-Mananciais',
    url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2021/06/Relatório-Técnico_Pró-Mananciais_com-relatoria_final.pdf',
  },

  manualMedicao: {
    titulo: 'Manual de Medição Individualizada',
    url: 'https://www.copasa.com.br/wps/wcm/connect/4e2ed1dd-d510-4532-a584-88b62e474a2f/MedicaoIndividualizada_Copasa_Copanor.pdf',
    descricao: 'Manual técnico COPASA — 79 páginas',
  },
  estatutoSocial: {
    titulo: 'Estatuto Social COPASA',
    url: 'https://ri.copasa.com.br/governanca-corporativa/estatuto-social',
  },
  codigoConduta: {
    titulo: 'Código de Conduta COPASA',
    url: 'https://ri.copasa.com.br/governanca-corporativa/etica-e-integridade/codigo-de-conduta',
  },
  regulamento2009: {
    titulo: 'Regulamento de Serviços 2009',
    url: copasa('regulamentos/regulamento-servicos-2009.pdf'),
  },

  lei11445: {
    titulo: 'Lei Federal 11.445/2007',
    url: 'http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm',
  },
  lei14026: {
    titulo: 'Lei Federal 14.026/2020',
    url: 'http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14026.htm',
  },
  lei13312: {
    titulo: 'Lei Federal 13.312/2016',
    url: 'http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13312.htm',
  },
  lei14898: {
    titulo: 'Lei Federal 14.898/2024',
    url: 'http://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14898.htm',
  },
  lei18309: {
    titulo: 'Lei Estadual 18.309/2009',
    url: 'https://www.almg.gov.br/legislacao-mineira/texto/LEI/18309/2009/',
  },
  decreto47884: {
    titulo: 'Decreto Estadual 47.884/2020',
    url: 'https://www.almg.gov.br/legislacao-mineira/texto/DEC/47884/2020/',
  },

  stjTema414: {
    titulo: 'STJ — Tema 414',
    url: 'https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?novaConsulta=true&tipo_pesquisa=T&num_tema=414',
  },
  stjRepetitivo: {
    titulo: 'STJ — Recursos Repetitivos COPASA',
    url: 'https://processo.stj.jus.br/SCON/pesquisar.jsp?livre=COPASA&b=ACOR&thesaurus=JURIDICO&p=true',
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
    url: 'https://www.migalhas.com.br/quentes/413516/stj-revisa-tema-414-sobre-cobranca-de-agua-em-condominios',
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
