import { Link } from 'react-router-dom'
import { FonteLink } from '../components/FontesBadge'
import { FONTES } from '../data/referencias'

export function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <h2>Sobre esta pesquisa</h2>
        <p>
          Este repositório documenta uma análise aprofundada sobre como as
          tarifas de água e esgoto da COPASA são aplicadas — com foco na
          diferença entre a <strong>medição individualizada</strong> (cada
          apartamento com seu hidrômetro) e o{' '}
          <strong>rateio por metro único</strong> em condomínios.
        </p>
        <p>
          Baseado em mais de 60 documentos-fonte: resoluções da{' '}
          <FonteLink fonte={FONTES.resolucao217} />, notas técnicas, leis
          federais (<FonteLink fonte={FONTES.lei13312} />,{' '}
          <FonteLink fonte={FONTES.lei14898} />), decisões do{' '}
          <FonteLink fonte={FONTES.stjTema414} /> e do{' '}
          <FonteLink fonte={FONTES.tjmgCorte} />, e reportagens da imprensa.
        </p>
      </section>

      <section className="cards">
        <Link to="/tarifas" className="card">
          <h3>Tabelas Tarifárias</h3>
          <p>
            Valores atuais (2026) para as categorias Residencial, Comercial,
            Social I e Social II, com as 6 faixas de consumo progressivas.
          </p>
        </Link>
        <Link to="/cenarios" className="card">
          <h3>Cenários de Cobrança</h3>
          <p>
            Comparação entre 3 cenários de cobrança em um prédio de 4
            apartamentos: medição individual, rateio igual e rateio
            proporcional.
          </p>
        </Link>
        <Link to="/linha-do-tempo" className="card">
          <h3>Linha do Tempo</h3>
          <p>
            Evolução do marco legal e regulatório: leis, resoluções da ARSAE-MG
            e decisões judiciais de 2007 a 2026.
          </p>
        </Link>
        <Link to="/fontes" className="card">
          <h3>Fontes Documentais</h3>
          <p>
            Catálogo com mais de 60 documentos-fonte organizados por categoria:
            ARSAE-MG, COPASA, legislação, judiciário e imprensa.
          </p>
        </Link>
      </section>

      <section className="highlights">
        <h2>Principais conclusões</h2>
        <ul>
          <li>
            <strong>Rateio igual pune o menor consumidor:</strong> Em um prédio
            de 4 apartamentos, uma unidade que consome 6 m³ pode pagar até{' '}
            <strong>84% a mais</strong> no rateio igual comparado à medição
            individualizada.{' '}
            <FonteLink fonte={FONTES.resolucao217} />
          </li>
          <li>
            <strong>Esgoto custa ~74% do valor da água:</strong> Na categoria
            residencial com Esgoto Dinâmico (ED), o valor do esgoto é calculado
            proporcionalmente ao consumo de água.{' '}
            <FonteLink fonte={FONTES.ntCre10} />
          </li>
          <li>
            <strong>STJ revisou o Tema 414 em 2024:</strong> Agora permite a
            cobrança de faixa mínima por unidade mesmo sem medição individual,
            alterando o entendimento consolidado em 2010.{' '}
            <FonteLink fonte={FONTES.stjTema414} />
            {' — '}
            <FonteLink fonte={FONTES.stjRevisao2024} />
          </li>
          <li>
            <strong>Lei 13.312/2016:</strong> Torna obrigatória a medição
            individualizada em novas edificações, mas não resolve o passivo dos
            prédios antigos.{' '}
            <FonteLink fonte={FONTES.lei13312} />
          </li>
          <li>
            <strong>COPASA multada em R$ 11,2 mi (2023):</strong> Procon-MG
            aplicou multa por cobrança de tarifa de esgoto tratado sem o
            devido tratamento.{' '}
            <FonteLink fonte={FONTES.multaCopasa2023} />
          </li>
        </ul>
      </section>
    </div>
  )
}
