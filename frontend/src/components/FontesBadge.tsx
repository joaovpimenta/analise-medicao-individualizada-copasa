import { useState } from 'react'
import type { FonteRef } from '../data/referencias'

export function FontesBadge({ fontes }: { fontes: FonteRef[] }) {
  const [open, setOpen] = useState(false)

  if (fontes.length === 0) return null

  return (
    <span className="fontes-badge-wrapper">
      <button
        type="button"
        className="fontes-badge"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {fontes.length} fonte{fontes.length > 1 ? 's' : ''}
      </button>
      {open && (
        <div className="fontes-popup">
          <div className="fontes-popup-header">
            <span>Fontes consultadas</span>
            <button
              type="button"
              className="fontes-popup-close"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul className="fontes-popup-list">
            {fontes.map((f, i) => (
              <li key={i}>
                <a href={f.url} target="_blank" rel="noopener noreferrer">
                  {f.titulo}
                </a>
                {f.descricao && (
                  <span className="fontes-popup-desc">{f.descricao}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  )
}

export function FonteLink({ fonte }: { fonte: FonteRef }) {
  return (
    <a
      href={fonte.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fonte-link-inline"
      title={fonte.descricao}
    >
      {fonte.titulo}
    </a>
  )
}
