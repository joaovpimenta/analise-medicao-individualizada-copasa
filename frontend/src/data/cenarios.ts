export interface Apartamento {
  nome: string
  consumo: number
  tipoEsgoto: 'ed' | 'ee'
}

export const apartamentos: Apartamento[] = [
  { nome: 'Apto 101', consumo: 6, tipoEsgoto: 'ed' },
  { nome: 'Apto 202', consumo: 8, tipoEsgoto: 'ed' },
  { nome: 'Apto 303', consumo: 12, tipoEsgoto: 'ed' },
  { nome: 'Apto 404', consumo: 22, tipoEsgoto: 'ed' },
]

export const consumoTotal = apartamentos.reduce((s, a) => s + a.consumo, 0)
