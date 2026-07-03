import { FONTES, type FonteRef } from './referencias'

export interface Evento {
  ano: string
  titulo: string
  descricao: string
  tipo: 'legislacao' | 'regulacao' | 'judiciario' | 'imprensa'
  fontes: FonteRef[]
}

export const eventos: Evento[] = [
  {
    ano: '2007',
    titulo: 'Lei 11.445/2007 — Marco do Saneamento',
    descricao: 'Estabelece as diretrizes nacionais para o saneamento básico e para a política federal de saneamento.',
    tipo: 'legislacao',
    fontes: [FONTES.lei11445],
  },
  {
    ano: '2009',
    titulo: 'Lei Estadual 18.309/2009 — Criação da ARSAE-MG',
    descricao: 'Cria a Agência Reguladora de Serviços de Abastecimento de Água e de Esgotamento Sanitário de Minas Gerais.',
    tipo: 'legislacao',
    fontes: [FONTES.lei18309, FONTES.regulamento2009],
  },
  {
    ano: '2010',
    titulo: 'STJ — Tema 414 (original)',
    descricao: 'STJ firma tese: condomínios sem hidrômetros individuais podem ter consumo total dividido igualmente entre as unidades.',
    tipo: 'judiciario',
    fontes: [FONTES.stjTema414],
  },
  {
    ano: '2016',
    titulo: 'Lei 13.312/2016 — Medição Individualizada Obrigatória',
    descricao: 'Torna obrigatória a instalação de hidrômetros individuais nas novas edificações condominiais.',
    tipo: 'legislacao',
    fontes: [FONTES.lei13312, FONTES.manualMedicao],
  },
  {
    ano: '2018',
    titulo: 'Resolução ARSAE 111/2018',
    descricao: 'Primeira revisão tarifária periódica da COPASA realizada pela ARSAE-MG.',
    tipo: 'regulacao',
    fontes: [FONTES.resolucao111],
  },
  {
    ano: '2020',
    titulo: 'Lei 14.026/2020 — Novo Marco do Saneamento',
    descricao: 'Atualiza a Lei 11.445/2007, incentiva a universalização dos serviços e a participação privada.',
    tipo: 'legislacao',
    fontes: [FONTES.lei14026],
  },
  {
    ano: '2020',
    titulo: 'Decreto 47.884/2020 — Regulamentação ARSAE-MG',
    descricao: 'Regulamenta a estrutura organizacional e as competências da ARSAE-MG.',
    tipo: 'legislacao',
    fontes: [FONTES.decreto47884],
  },
  {
    ano: '2023',
    titulo: 'COPASA multada em R$ 11,2 milhões',
    descricao: 'Procon-MG multa COPASA por cobrar tarifa de "esgoto tratado" sem realizar o devido tratamento de efluentes.',
    tipo: 'imprensa',
    fontes: [FONTES.multaCopasa2023],
  },
  {
    ano: '2024',
    titulo: 'STJ — Revisão do Tema 414',
    descricao: 'STJ revisa entendimento: passa a permitir cobrança de faixa mínima por unidade mesmo sem medição individual.',
    tipo: 'judiciario',
    fontes: [FONTES.stjTema414, FONTES.stjRevisao2024, FONTES.tjmgCorte, FONTES.tjmgCobranca],
  },
  {
    ano: '2024',
    titulo: 'Lei 14.898/2024 — Tarifa Social Nacional',
    descricao: 'Institui diretrizes nacionais para a Tarifa Social de Água e Esgoto, beneficiando famílias de baixa renda.',
    tipo: 'legislacao',
    fontes: [FONTES.lei14898, FONTES.ntGrt01, FONTES.tarifaSocial2025],
  },
  {
    ano: '2025',
    titulo: 'Resolução ARSAE 217/2025 — Revisão Tarifária',
    descricao: 'Novo quadro de tarifas COPASA para o ciclo 2026–2029, com reajuste e reestruturação das faixas de consumo.',
    tipo: 'regulacao',
    fontes: [FONTES.resolucao217, FONTES.ntCre10, FONTES.tarifasXlsx],
  },
  {
    ano: '2025',
    titulo: 'TJMG — Julgados sobre cobrança de esgoto',
    descricao: 'Tribunal de Justiça de MG decide pela ilegalidade da cobrança de esgoto em percentual superior ao consumo real.',
    tipo: 'judiciario',
    fontes: [FONTES.tjmgCorte, FONTES.tjmgCobranca, FONTES.mpEsgoto2024],
  },
  {
    ano: '2026',
    titulo: 'Resolução ARSAE 226/2026 — Reajuste Anual',
    descricao: 'Reajuste tarifário anual da COPASA autorizado pela ARSAE-MG, com novos valores em vigor.',
    tipo: 'regulacao',
    fontes: [FONTES.resolucao226, FONTES.novasTarifas2026, FONTES.ceoEsgoto2026],
  },
]
