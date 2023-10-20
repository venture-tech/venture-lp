type Benefits = {
    id: number
    title: string
    description: string
    color: string
}

export function benefitsContent(): Benefits[] {
  return [
    {
        id: 1,
        title: `<span class="font-semibold">Aumentar&nbsp;</span> seu desempenho`,
        description: `Entendemos o seu <br> negócio e o seu objetivo, com isso te ajudamos a vender melhor.`,
        color: 'bg-primary-300'
    },
    {
        id: 2,
        title: `Otimizar os <span class="font-semibold">&nbsp;resultados</span>`,
        description: `Cruzamos informações, dados e paramêtros <br> para entregar os <br> melhores resultados.`,
        color: 'bg-primary-400'
    },
    {
		    id: 3,
        title: `Sincronizar e <span class="font-semibold">integrar</span>`,
        description: `Amplie suas <br> conexões, obtenha <br> insights valiosos e <br> otimize seu tempo.`,
        color: 'bg-primary-200'
    },
    {
        id: 4,
        title: `<span class="font-semibold">Versitilidade&nbsp;</span>é conosco`,
        description: `Desenvolvimento de software (web ou desktop), aplicativos e muito mais. Conheça.`,
        color: 'bg-primary-100'
    }
  ]
}
