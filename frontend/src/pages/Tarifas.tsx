import { useState } from 'react'
import { tarifas, calcConta, type Tariff } from '../data/tarifas'
import { FontesBadge } from '../components/FontesBadge'
import { FONTES } from '../data/referencias'

function TariffTable({ tariff }: { tariff: Tariff }) {
  return (
    <div className="tariff-table-wrapper">
      <h3>{tariff.name}</h3>
      <table className="tariff-table">
        <thead>
          <tr>
            <th>Faixa</th>
            <th>Água (R$/m³)</th>
            <th>ED (R$/m³)</th>
            <th>EE (R$/m³)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fixo</strong></td>
            <td>{tariff.fixedWater.toFixed(2)}</td>
            <td>{tariff.fixedEd.toFixed(2)}</td>
            <td>{tariff.fixedEe.toFixed(2)}</td>
          </tr>
          {tariff.tiers.map((tier, i) => (
            <tr key={i}>
              <td>{tier.range}</td>
              <td>{tier.water.toFixed(2)}</td>
              <td>{tier.ed.toFixed(2)}</td>
              <td>{tier.ee.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Tarifas() {
  const [consumo, setConsumo] = useState(10)
  const [categoria, setCategoria] = useState(0)
  const [tipoEsgoto, setTipoEsgoto] = useState<'ed' | 'ee'>('ed')

  const tariff = tarifas[categoria]
  const conta = tariff ? calcConta(tariff, consumo, tipoEsgoto) : null

  return (
    <div className="page">
      <section>
        <h2>Tabelas Tarifárias COPASA — 2026</h2>
        <p className="subtitle">
          Valores conforme Resolução ARSAE 217/2025 e reajuste de 2026.
          ED = Esgoto Dinâmico (~74% da água), EE = Esgoto Estático (30%).
        </p>
        <p className="fontes-refs">
          <FontesBadge fontes={[FONTES.resolucao217, FONTES.resolucao226, FONTES.tarifasXlsx, FONTES.ntCre10]} />
        </p>
      </section>

      <section className="calculator">
        <h3>Simulador de Conta</h3>
        <div className="calc-controls">
          <label>
            Categoria:
            <select
              value={categoria}
              onChange={(e) => setCategoria(Number(e.target.value))}
            >
              {tarifas.map((t, i) => (
                <option key={i} value={i}>{t.name}</option>
              ))}
            </select>
          </label>
          <label>
            Consumo (m³):
            <input
              type="number"
              min={0}
              max={100}
              value={consumo}
              onChange={(e) => setConsumo(Number(e.target.value))}
            />
          </label>
          <label>
            Tipo de Esgoto:
            <select
              value={tipoEsgoto}
              onChange={(e) => setTipoEsgoto(e.target.value as 'ed' | 'ee')}
            >
              <option value="ed">Esgoto Dinâmico (ED)</option>
              <option value="ee">Esgoto Estático (EE)</option>
            </select>
          </label>
        </div>
        {conta && (
          <div className="calc-result">
            <div><span>Água:</span> R$ {conta.agua.toFixed(2)}</div>
            <div><span>Esgoto:</span> R$ {conta.esgoto.toFixed(2)}</div>
            <div className="total"><span>Total:</span> R$ {conta.total.toFixed(2)}</div>
          </div>
        )}
      </section>

      <section className="tables-grid">
        {tarifas.map((t, i) => (
          <TariffTable key={i} tariff={t} />
        ))}
      </section>
    </div>
  )
}
