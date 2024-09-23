interface TechnologyStack {
    skillName:string,
    skillIconPath:string,
}

interface SkillData {
    skillRole: string,
    technologyStackData: TechnologyStack[]
}

export const SkillsData: SkillData[] = [
    {
        skillRole:'Frontend',
        technologyStackData:[
            {
                skillName:'React',
                skillIconPath:'/react_icon.svg'
            },
            {
                skillName:'Vue',
                skillIconPath:'/vue_icon.svg'
            },
            {
                skillName:'Vite',
                skillIconPath:'/vite_icon.svg'
            },
            {
                skillName:'TypeScript',
                skillIconPath:'/typescript_icon.svg'
            },
            {
                skillName:'JavaScript',
                skillIconPath:'/javascript_icon.svg'
            },
            {
                skillName:'HTML',
                skillIconPath:'/html5_icon.svg'
            },
            {
                skillName:'CSS',
                skillIconPath:'/css_icon.svg'
            }
        ]
    },
]