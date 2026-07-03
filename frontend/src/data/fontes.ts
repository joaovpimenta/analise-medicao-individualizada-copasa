import {
  type FonteRef,
  arsae,
  copasa,
  legislacao,
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
      { titulo: 'Resolução 217/2025', descricao: 'Revisão tarifária 2026–2029', arquivo: 'resolucao-217-2025.pdf', url: arsae('resolucao-217-2025.pdf') },
      { titulo: 'Resolução 226/2026', descricao: 'Reajuste tarifário 2026', arquivo: 'resolucao-226-2026.pdf', url: arsae('resolucao-226-2026.pdf') },
      { titulo: 'Nota Técnica CRE 10/2025', descricao: 'Estrutura tarifária pós-consulta pública', arquivo: 'nt-cre-10-2025.pdf', url: arsae('nt-cre-10-2025.pdf') },
      { titulo: 'Nota Técnica GRT 01/2026', descricao: 'Tarifa Social', arquivo: 'nt-grt-01-2026-tarifa-social.pdf', url: arsae('nt-grt-01-2026-tarifa-social.pdf') },
      { titulo: 'Tarifas COPASA 2025–2026', descricao: 'Planilha com valores tarifários', arquivo: 'tarifas-copasa-2025-2026.xlsx', url: arsae('tarifas-copasa-2025-2026.xlsx') },
      { titulo: 'Avaliação de Resultado Regulatório 2025', descricao: 'ARR 2025', arquivo: 'avaliacao-resultado-regulatorio-2025.pdf', url: arsae('avaliacao-resultado-regulatorio-2025.pdf') },
      { titulo: 'Resolução 111/2018', descricao: '1ª revisão tarifária periódica', arquivo: 'resolucoes/resolucao-111-2018.pdf', url: arsae('resolucoes/resolucao-111-2018.pdf') },
      { titulo: 'Nota Técnica CRE 04/2025', descricao: 'Fator X e incentivos', arquivo: 'nt-cre-04-2025-fator-x.pdf', url: arsae('nt-cre-04-2025-fator-x.pdf') },
      { titulo: 'Relatório Pró-Mananciais', descricao: 'Relatório técnico', arquivo: 'relatorio-tecnico-pro-mananciais.pdf', url: arsae('relatorio-tecnico-pro-mananciais.pdf') },
      { titulo: 'Resolução 197/2024', descricao: 'Reajuste tarifário 2024', arquivo: 'resolucao-197-2024.pdf', url: arsae('resolucao-197-2024.pdf') },
      { titulo: 'Página COPASA na ARSAE', descricao: 'Página institucional', arquivo: 'pagina-copasa-arsae.html', url: arsae('pagina-copasa-arsae.html') },
    ],
  },
  {
    nome: 'COPASA — Documentos Oficiais',
    itens: [
      { titulo: 'Manual de Medição Individualizada', descricao: 'Manual técnico de 79 páginas', arquivo: 'manual-medicao-individualizada.pdf', url: copasa('manual-medicao-individualizada.pdf') },
      { titulo: 'Estatuto Social', descricao: 'Estatuto da companhia', arquivo: 'copasa-estatuto-social.pdf', url: copasa('copasa-estatuto-social.pdf') },
      { titulo: 'Código de Conduta', descricao: 'Código de conduta corporativo', arquivo: 'copasa-codigo-conduta.pdf', url: copasa('copasa-codigo-conduta.pdf') },
      { titulo: 'Regulamento de Serviços 2009', descricao: 'Regulamento de prestação de serviços', arquivo: 'regulamentos/regulamento-servicos-2009.pdf', url: copasa('regulamentos/regulamento-servicos-2009.pdf') },
    ],
  },
  {
    nome: 'Legislação Federal',
    itens: [
      { titulo: 'Lei 11.445/2007', descricao: 'Marco do Saneamento Básico', arquivo: 'lei-11445-2007.html', url: legislacao('lei-11445-2007.html') },
      { titulo: 'Lei 14.026/2020', descricao: 'Novo Marco do Saneamento', arquivo: 'lei-14026-2020.html', url: legislacao('lei-14026-2020.html') },
      { titulo: 'Lei 13.312/2016', descricao: 'Medição individualizada obrigatória', arquivo: 'federal/lei-13312-2016.html', url: legislacao('federal/lei-13312-2016.html') },
      { titulo: 'Lei 14.898/2024', descricao: 'Tarifa Social de Água e Esgoto', arquivo: 'federal/lei-14898-2024.html', url: legislacao('federal/lei-14898-2024.html') },
    ],
  },
  {
    nome: 'Legislação Estadual (MG)',
    itens: [
      { titulo: 'Lei 18.309/2009', descricao: 'Cria a ARSAE-MG', arquivo: 'estadual/lei-18309-2009-arsae.pdf', url: legislacao('estadual/lei-18309-2009-arsae.pdf') },
      { titulo: 'Decreto 47.884/2020', descricao: 'Regulamenta a ARSAE-MG', arquivo: 'estadual/decreto-47884-2020.pdf', url: legislacao('estadual/decreto-47884-2020.pdf') },
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
