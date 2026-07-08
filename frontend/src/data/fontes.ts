import {
  type FonteRef,
  arsae,
  copasa,
  imprensa as imprensaPath,
  judiciario,
} from './referencias'

export type { FonteRef }

export interface FonteItem {
  titulo: string
  descricao: string
  arquivo: string
  url: string
  ref?: FonteRef
}

export interface CategoriaFontes {
  nome: string
  itens: FonteItem[]
}

export const categorias: CategoriaFontes[] = [
  {
    nome: 'ARSAE-MG — Agência Reguladora',
    itens: [
      { titulo: 'Resolução 217/2025', descricao: 'Revisão tarifária 2026–2029', arquivo: 'resolucao-217-2025.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2025/12/Resolucao_ArsaeMG_217_2025.pdf' },
      { titulo: 'Resolução 226/2026', descricao: 'Reajuste tarifário 2026', arquivo: 'resolucao-226-2026.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2026/06/226_2026_homologa_tabela_precos_prazos_servicos_nao_tarifados_copasa.pdf' },
      { titulo: 'Nota Técnica CRE 10/2025', descricao: 'Estrutura tarifária pós-consulta pública', arquivo: 'nt-cre-10-2025.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2025/06/NT_CRE_10_2025_EstruturaTarifaria_PosCP_corrigida28082025.pdf' },
      { titulo: 'Nota Técnica GRT 01/2026', descricao: 'Tarifa Social', arquivo: 'nt-grt-01-2026-tarifa-social.pdf', url: arsae('nt-grt-01-2026-tarifa-social.pdf') },
      { titulo: 'Tarifas COPASA 2025–2026', descricao: 'Planilha com valores tarifários', arquivo: 'tarifas-copasa-2025-2026.xlsx', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2026/02/TarifasCOPASA.xlsx' },
      { titulo: 'Avaliação de Resultado Regulatório 2025', descricao: 'ARR 2025', arquivo: 'avaliacao-resultado-regulatorio-2025.pdf', url: arsae('avaliacao-resultado-regulatorio-2025.pdf') },
      { titulo: 'Resolução 111/2018', descricao: '1ª revisão tarifária periódica', arquivo: 'resolucoes/resolucao-111-2018.pdf', url: 'https://www.arsae.mg.gov.br/images/documentos/audiencia_publica/Resolucao_111_ReajusteCopasa_2018.pdf' },
      { titulo: 'Nota Técnica CRE 04/2025', descricao: 'Fator X e incentivos', arquivo: 'nt-cre-04-2025-fator-x.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2025/12/NT_CRE_04_2025_Fator_X_Incentivos_PosCP.pdf' },
      { titulo: 'Relatório Pró-Mananciais', descricao: 'Relatório técnico', arquivo: 'relatorio-tecnico-pro-mananciais.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2021/06/Relatório-Técnico_Pró-Mananciais_com-relatoria_final.pdf' },
      { titulo: 'Resolução 197/2024', descricao: 'Reajuste tarifário 2024', arquivo: 'resolucao-197-2024.pdf', url: 'https://www.arsae.mg.gov.br/wp-content/uploads/2024/08/Resolucao_Arsae_MG_197_2024.pdf' },
      { titulo: 'Página COPASA na ARSAE', descricao: 'Página institucional', arquivo: 'pagina-copasa-arsae.html', url: arsae('pagina-copasa-arsae.html') },
    ],
  },
  {
    nome: 'COPASA — Documentos Oficiais',
    itens: [
      { titulo: 'Manual de Medição Individualizada', descricao: 'Manual técnico de 79 páginas', arquivo: 'manual-medicao-individualizada.pdf', url: 'https://www.copasa.com.br/wps/wcm/connect/4e2ed1dd-d510-4532-a584-88b62e474a2f/MedicaoIndividualizada_Copasa_Copanor.pdf' },
      { titulo: 'Estatuto Social', descricao: 'Estatuto da companhia', arquivo: 'copasa-estatuto-social.pdf', url: 'https://ri.copasa.com.br/governanca-corporativa/estatuto-social' },
      { titulo: 'Código de Conduta', descricao: 'Código de conduta corporativo', arquivo: 'copasa-codigo-conduta.pdf', url: 'https://ri.copasa.com.br/governanca-corporativa/etica-e-integridade/codigo-de-conduta' },
      { titulo: 'Regulamento de Serviços 2009', descricao: 'Regulamento de prestação de serviços', arquivo: 'regulamentos/regulamento-servicos-2009.pdf', url: copasa('regulamentos/regulamento-servicos-2009.pdf') },
    ],
  },
  {
    nome: 'Legislação Federal',
    itens: [
      { titulo: 'Lei 11.445/2007', descricao: 'Marco do Saneamento Básico', arquivo: 'lei-11445-2007.html', url: 'http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm' },
      { titulo: 'Lei 14.026/2020', descricao: 'Novo Marco do Saneamento', arquivo: 'lei-14026-2020.html', url: 'http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14026.htm' },
      { titulo: 'Lei 13.312/2016', descricao: 'Medição individualizada obrigatória', arquivo: 'federal/lei-13312-2016.html', url: 'http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13312.htm' },
      { titulo: 'Lei 14.898/2024', descricao: 'Tarifa Social de Água e Esgoto', arquivo: 'federal/lei-14898-2024.html', url: 'http://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14898.htm' },
    ],
  },
  {
    nome: 'Legislação Estadual (MG)',
    itens: [
      { titulo: 'Lei 18.309/2009', descricao: 'Cria a ARSAE-MG', arquivo: 'estadual/lei-18309-2009-arsae.pdf', url: 'https://www.almg.gov.br/legislacao-mineira/texto/LEI/18309/2009/' },
      { titulo: 'Decreto 47.884/2020', descricao: 'Regulamenta a ARSAE-MG', arquivo: 'estadual/decreto-47884-2020.pdf', url: 'https://www.almg.gov.br/legislacao-mineira/texto/DEC/47884/2020/' },
    ],
  },
  {
    nome: 'Judiciário — STJ e TJMG',
    itens: [
      { titulo: 'STJ — Tema 414', descricao: 'Tese sobre cobrança em condomínios sem medição individual', arquivo: 'stj/stj-tema-414.html', url: judiciario('stj/stj-tema-414.html') },
      { titulo: 'STJ — Recursos Repetitivos COPASA', descricao: 'Jurisprudência consolidada do STJ', arquivo: 'stj/stj-repetitivo-copasa.html', url: judiciario('stj/stj-repetitivo-copasa.html') },
      { titulo: 'TJMG — Corte Abusivo', descricao: 'Decisão sobre cobrança abusiva de esgoto', arquivo: 'tjmg/tjmg-corte-abusivo.html', url: judiciario('tjmg/tjmg-corte-abusivo.html') },
      { titulo: 'TJMG — Cobrança Indevida', descricao: 'Decisão sobre cobrança indevida de tarifa', arquivo: 'tjmg/tjmg-cobranca-indevida-tarifa.html', url: judiciario('tjmg/tjmg-cobranca-indevida-tarifa.html') },
      { titulo: 'JusBrasil — Busca COPASA', descricao: 'Jurisprudência agregada', arquivo: 'jusbrasil-busca-copasa.html', url: judiciario('jusbrasil-busca-copasa.html') },
      { titulo: 'JusBrasil — Busca Esgoto', descricao: 'Jurisprudência agregada', arquivo: 'jusbrasil-busca-esgoto.html', url: judiciario('jusbrasil-busca-esgoto.html') },
    ],
  },
  {
    nome: 'Imprensa — Notícias',
    itens: [
      { titulo: 'COPASA multada em R$ 11,2 mi (2023)', descricao: 'Multa do Procon-MG por esgoto não tratado', arquivo: 'em-2023-multa-copasa.txt', url: imprensaPath('em-2023-multa-copasa.txt') },
      { titulo: 'STJ revisa Tema 414 (2024)', descricao: 'Migalhas noticia a revisão do STJ', arquivo: 'migalhas-2024-stj.txt', url: imprensaPath('migalhas-2024-stj.txt') },
      { titulo: 'Novas tarifas COPASA (2026)', descricao: 'G1 noticia as novas tarifas', arquivo: 'g1-2026-novas-tarifas.html', url: imprensaPath('g1-2026-novas-tarifas.html') },
      { titulo: 'Tarifa Social (2025)', descricao: 'Hoje em Dia noticia a Tarifa Social', arquivo: 'hojeemdia-2025-tarifa-social.html', url: imprensaPath('hojeemdia-2025-tarifa-social.html') },
      { titulo: 'Privatização COPASA (2025)', descricao: 'O Tempo noticia desafios pós-privatização', arquivo: 'otempo-2025-copasa-privatizacao.html', url: imprensaPath('otempo-2025-copasa-privatizacao.html') },
      { titulo: 'COPASA esgoto — MP (2024)', descricao: 'Estado de Minas', arquivo: 'outros/em-2024-copasa-esgoto-mp.html', url: imprensaPath('outros/em-2024-copasa-esgoto-mp.html') },
      { titulo: 'Reajuste COPASA (2024)', descricao: 'G1', arquivo: 'outros/g1-2024-reajuste-copasa.html', url: imprensaPath('outros/g1-2024-reajuste-copasa.html') },
      { titulo: 'CEO esgoto (2026)', descricao: 'Exame', arquivo: 'outros/exame-2026-ceo-esgoto.html', url: imprensaPath('outros/exame-2026-ceo-esgoto.html') },
    ],
  },
]
