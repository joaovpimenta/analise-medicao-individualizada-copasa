import { eventos, type Evento } from '../data/linhaDoTempo'
import { FontesBadge } from '../components/FontesBadge'

const tipoLabels: Record<Evento['tipo'], string> = {
  legislacao: 'Legislação',
  regulacao: 'Regulação',
  judiciario: 'Judiciário',
  imprensa: 'Imprensa',
}

export function LinhaDoTempo() {
  return (
    <div className="page">
      <section>
        <h2>Linha do Tempo Regulatória</h2>
        <p className="subtitle">
          Evolução do marco legal, regulação tarifária e decisões judiciais
          relevantes sobre as tarifas da COPASA e medição individualizada.
        </p>
      </section>

      <div className="timeline">
        {eventos.map((evento, i) => (
          <div key={i} className={`timeline-item tipo-${evento.tipo}`}>
            <div className="timeline-marker">
              <span className="timeline-ano">{evento.ano}</span>
              <span className={`timeline-tag tag-${evento.tipo}`}>
                {tipoLabels[evento.tipo]}
              </span>
            </div>
            <div className="timeline-content">
              <h3>{evento.titulo}</h3>
              <p>{evento.descricao}</p>
              <div className="timeline-fontes">
                <FontesBadge fontes={evento.fontes} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
