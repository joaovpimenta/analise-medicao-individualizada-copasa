export interface TariffTier {
  range: string
  water: number
  ed: number
  ee: number
}

export interface Tariff {
  name: string
  fixedWater: number
  fixedEd: number
  fixedEe: number
  tiers: TariffTier[]
}

export const tarifas: Tariff[] = [
  {
    name: 'Residencial',
    fixedWater: 18.73,
    fixedEd: 13.86,
    fixedEe: 5.62,
    tiers: [
      { range: '0–5 m³', water: 1.87, ed: 1.38, ee: 0.56 },
      { range: '6–10 m³', water: 4.09, ed: 3.03, ee: 1.23 },
      { range: '11–15 m³', water: 9.12, ed: 6.75, ee: 2.74 },
      { range: '16–20 m³', water: 9.44, ed: 6.99, ee: 2.83 },
      { range: '21–40 m³', water: 10.35, ed: 7.66, ee: 3.11 },
      { range: '>40 m³', water: 13.29, ed: 9.83, ee: 3.99 },
    ],
  },
  {
    name: 'Comercial',
    fixedWater: 37.45,
    fixedEd: 27.71,
    fixedEe: 11.24,
    tiers: [
      { range: '0–5 m³', water: 5.36, ed: 3.97, ee: 1.61 },
      { range: '6–10 m³', water: 5.36, ed: 3.97, ee: 1.61 },
      { range: '11–20 m³', water: 10.16, ed: 7.52, ee: 3.05 },
      { range: '21–30 m³', water: 10.16, ed: 7.52, ee: 3.05 },
      { range: '31–40 m³', water: 10.61, ed: 7.85, ee: 3.18 },
      { range: '>40 m³', water: 13.29, ed: 9.83, ee: 3.99 },
    ],
  },
  {
    name: 'Social I',
    fixedWater: 6.56,
    fixedEd: 4.85,
    fixedEe: 1.97,
    tiers: [
      { range: '0–5 m³', water: 0.66, ed: 0.49, ee: 0.20 },
      { range: '6–10 m³', water: 1.43, ed: 1.06, ee: 0.43 },
      { range: '11–15 m³', water: 6.27, ed: 4.64, ee: 1.88 },
      { range: '16–20 m³', water: 9.44, ed: 6.99, ee: 2.83 },
      { range: '21–40 m³', water: 10.35, ed: 7.66, ee: 3.11 },
      { range: '>40 m³', water: 13.29, ed: 9.83, ee: 3.99 },
    ],
  },
  {
    name: 'Social II',
    fixedWater: 9.37,
    fixedEd: 6.93,
    fixedEe: 2.81,
    tiers: [
      { range: '0–5 m³', water: 0.94, ed: 0.70, ee: 0.28 },
      { range: '6–10 m³', water: 3.07, ed: 2.27, ee: 0.92 },
      { range: '11–15 m³', water: 9.12, ed: 6.75, ee: 2.74 },
      { range: '16–20 m³', water: 9.44, ed: 6.99, ee: 2.83 },
      { range: '21–40 m³', water: 10.35, ed: 7.66, ee: 3.11 },
      { range: '>40 m³', water: 13.29, ed: 9.83, ee: 3.99 },
    ],
  },
]

const tierSizes = [5, 5, 5, 5, 20, Infinity]

export function calcConta(
  tariff: Tariff,
  consumoAgua: number,
  tipoEsgoto: 'ed' | 'ee',
): { agua: number; esgoto: number; total: number } {
  let agua = tariff.fixedWater
  let esgoto = tipoEsgoto === 'ed' ? tariff.fixedEd : tariff.fixedEe
  let remaining = consumoAgua

  for (let i = 0; i < tariff.tiers.length; i++) {
    const tier = tariff.tiers[i]
    if (!tier) continue
    const tierSize = Math.min(tierSizes[i] ?? remaining, remaining)

    if (tierSize <= 0) break

    agua += tierSize * tier.water
    esgoto += tierSize * (tipoEsgoto === 'ed' ? tier.ed : tier.ee)
    remaining -= tierSize

    if (remaining <= 0) break
  }

  return {
    agua: Math.round(agua * 100) / 100,
    esgoto: Math.round(esgoto * 100) / 100,
    total: Math.round((agua + esgoto) * 100) / 100,
  }
}
