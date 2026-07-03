import { Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Tarifas } from './pages/Tarifas'
import { Cenarios } from './pages/Cenarios'
import { LinhaDoTempo } from './pages/LinhaDoTempo'
import { Fontes } from './pages/Fontes'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/tarifas', label: 'Tarifas' },
  { to: '/cenarios', label: 'Cenários' },
  { to: '/linha-do-tempo', label: 'Linha do Tempo' },
  { to: '/fontes', label: 'Fontes' },
]

export function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">
          Análise de Medição Individualizada — COPASA
        </h1>
        <nav className="nav">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className="nav-link">
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/cenarios" element={<Cenarios />} />
          <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />
          <Route path="/fontes" element={<Fontes />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>
          Pesquisa documental sobre tarifas de água e esgoto da COPASA e
          medição individualizada em condomínios.
        </p>
        <p>
          Fontes: ARSAE-MG, COPASA, STJ, TJMG, legislação federal e estadual.
        </p>
      </footer>
    </div>
  )
}
