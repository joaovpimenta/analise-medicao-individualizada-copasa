import { tarifas, calcConta } from '../data/tarifas'
import { apartamentos, consumoTotal } from '../data/cenarios'
import { FontesBadge } from '../components/FontesBadge'
import { FONTES } from '../data/referencias'

const residencial = tarifas[0]
if (!residencial) throw new Error('Tarifa residencial not found')

const tipoEsgoto = 'ed' as const

const individuais = apartamentos.map((a) => ({
  ...a,
  conta: calcConta(residencial, a.consumo, tipoEsgoto),
}))

const contaTotal = calcConta(residencial, consumoTotal, tipoEsgoto)
const rateioIgual = contaTotal.total / apartamentos.length

const proporcional = apartamentos.map((a) => {
  const fracao = a.consumo / consumoTotal
  return {
    ...a,
    conta: {
      agua: Math.round(contaTotal.agua * fracao * 100) / 100,
      esgoto: Math.round(contaTotal.esgoto * fracao * 100) / 100,
      total: Math.round(contaTotal.total * fracao * 100) / 100,
    },
  }
})

function getDiffClass(valor: number, referencia: number): string {
  const pct = ((valor - referencia) / referencia) * 100
  if (pct > 1) return 'diff-up'
  if (pct < -1) return 'diff-down'
  return ''
}

export function Cenarios() {
  return (
    <div className="page">
      <section>
        <h2>Cenários de Cobrança — Prédio de 4 Apartamentos</h2>
        <p className="subtitle">
          Comparação entre medição individualizada, rateio igual e rateio
          proporcional. Todos categoria Residencial com Esgoto Dinâmico (ED).
        </p>
        <p className="fontes-refs">
          <FontesBadge fontes={[
            FONTES.resolucao217,
            FONTES.manualMedicao,
            FONTES.stjTema414,
            FONTES.lei13312,
          ]} />
        </p>
      </section>

      <section className="scenario-section">
        <h3>Cenário A — Medição Individualizada</h3>
        <p>
          Cada apartamento possui hidrômetro individual e paga exatamente pelo
          seu consumo, aplicando-se as faixas progressivas da COPASA. Modelo
          previsto na <strong>Lei 13.312/2016</strong> e detalhado no{' '}
          <strong>Manual de Medição Individualizada</strong> da COPASA.
        </p>
        <table className="scenario-table">
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Consumo</th>
              <th>Água</th>
              <th>Esgoto</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {individuais.map((a) => (
              <tr key={a.nome}>
                <td>{a.nome}</td>
                <td>{a.consumo} m³</td>
                <td>R$ {a.conta.agua.toFixed(2)}</td>
                <td>R$ {a.conta.esgoto.toFixed(2)}</td>
                <td><strong>R$ {a.conta.total.toFixed(2)}</strong></td>
              </tr>
            ))}
            <tr className="sum-row">
              <td><strong>Total</strong></td>
              <td><strong>{consumoTotal} m³</strong></td>
              <td><strong>R$ {contaTotal.agua.toFixed(2)}</strong></td>
              <td><strong>R$ {contaTotal.esgoto.toFixed(2)}</strong></td>
              <td><strong>R$ {contaTotal.total.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="scenario-section">
        <h3>Cenário B — Rateio Igual (Metro Único)</h3>
        <p>
          O prédio possui um único hidrômetro. A conta total é dividida
          igualmente entre as 4 unidades, independente do consumo individual.
          Modelo questionado judicialmente — ver{' '}
          <strong>STJ Tema 414</strong> e decisões do <strong>TJMG</strong>.
        </p>
        <table className="scenario-table">
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Consumo</th>
              <th>Rateio</th>
              <th>vs Individual</th>
            </tr>
          </thead>
          <tbody>
            {individuais.map((a) => {
              const diff = rateioIgual - a.conta.total
              const pct = ((rateioIgual / a.conta.total - 1) * 100)
              return (
                <tr key={a.nome}>
                  <td>{a.nome}</td>
                  <td>{a.consumo} m³</td>
                  <td>R$ {rateioIgual.toFixed(2)}</td>
                  <td className={getDiffClass(rateioIgual, a.conta.total)}>
                    {diff > 0 ? '+' : ''}{diff.toFixed(2)} ({pct > 0 ? '+' : ''}{pct.toFixed(0)}%)
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      <section className="scenario-section">
        <h3>Cenário C — Rateio Proporcional</h3>
        <p>
          O prédio possui hidrômetros individuais informais. Cada unidade paga
          proporcionalmente ao seu consumo real, usando o total do metro único.
        </p>
        <table className="scenario-table">
          <thead>
            <tr>
              <th>Unidade</th>
              <th>Consumo</th>
              <th>Proporção</th>
              <th>Total</th>
              <th>vs Individual</th>
            </tr>
          </thead>
          <tbody>
            {proporcional.map((a, i) => {
              const ind = individuais[i]
              if (!ind) return null
              const diff = a.conta.total - ind.conta.total
              const pct = ((a.conta.total / ind.conta.total - 1) * 100)
              return (
                <tr key={a.nome}>
                  <td>{a.nome}</td>
                  <td>{a.consumo} m³</td>
                  <td>{(a.consumo / consumoTotal * 100).toFixed(0)}%</td>
                  <td>R$ {a.conta.total.toFixed(2)}</td>
                  <td className={getDiffClass(a.conta.total, ind.conta.total)}>
                    {diff > 0 ? '+' : ''}{diff.toFixed(2)} ({pct > 0 ? '+' : ''}{pct.toFixed(0)}%)
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
