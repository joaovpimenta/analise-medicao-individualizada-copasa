import { categorias } from '../data/fontes'

export function Fontes() {
  return (
    <div className="page">
      <section>
        <h2>Fontes Documentais</h2>
        <p className="subtitle">
          Mais de 60 documentos-fonte utilizados na pesquisa, organizados por
          categoria e disponíveis no diretório <code>fontes/</code> do
          repositório.
        </p>
      </section>

      {categorias.map((cat, i) => (
        <section key={i} className="fontes-category">
          <h3>{cat.nome}</h3>
          <div className="fontes-grid">
            {cat.itens.map((item, j) => (
              <div key={j} className="fonte-card">
                <h4>{item.titulo}</h4>
                <p>{item.descricao}</p>
                <code className="fonte-arquivo">{item.arquivo}</code>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fonte-link"
                  >
                    Acessar fonte original →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
