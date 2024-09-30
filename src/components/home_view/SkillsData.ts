interface TechnologyStack {
    skillName: string,
    skillIconPath: string,
}

interface SkillData {
    skillRole: string,
    technologyStackData: TechnologyStack[]
}

export const SkillsData: SkillData[] = [
    {
        skillRole: 'Frontend',
        technologyStackData: [
            {
                skillName: 'React',
                skillIconPath: '/react_icon.svg'
            },
            {
                skillName: 'Vue',
                skillIconPath: '/vue_icon.svg'
            },
            {
                skillName: 'Vite',
                skillIconPath: '/vite_icon.svg'
            },
            {
                skillName: 'TypeScript',
                skillIconPath: '/typescript_icon.svg'
            },
            {
                skillName: 'JavaScript',
                skillIconPath: '/javascript_icon.svg'
            },
            {
                skillName: 'HTML',
                skillIconPath: '/html5_icon.svg'
            },
            {
                skillName: 'CSS',
                skillIconPath: '/css_icon.svg'
            }
        ]
    },
    {
        skillRole: 'Backend',
        technologyStackData: [
            {
                skillName: 'Node.js',
                skillIconPath: '/nodejs_icon.svg'
            },
            {
                skillName: 'Express',
                skillIconPath: '/express_icon.svg'
            },
            {
                skillName: 'MongoDB',
                skillIconPath: '/mongodb_icon.svg'
            },
            {
                skillName: 'Microsoft SQL',
                skillIconPath: '/microsoftsql_icon.svg'
            },
            {
                skillName: 'MySQL',
                skillIconPath: '/mysql_icon.svg'
            },
            {
                skillName: 'Firebase',
                skillIconPath: '/firebase_icon.svg'
            },
            {
                skillName: 'GraphQL',
                skillIconPath: '/graphql_icon.svg'
            },
            {
                skillName: 'REST API',
                skillIconPath: '/rest_icon.svg'
            },
            {
                skillName: 'Docker',
                skillIconPath: '/docker_icon.svg'
            },
            {
                skillName: 'GOlang',
                skillIconPath: '/golang_icon.svg'
            },
            {
                skillName: 'Python',
                skillIconPath: '/python_icon.svg'
            },
            {
                skillName: 'Java',
                skillIconPath: '/java_icon.svg'
            },
            {
                skillName: 'C#',
                skillIconPath: '/csharp_icon.svg'
            }
        ]
    },
    {
        skillRole: 'Data Science',
        technologyStackData: [
            {
                skillName: 'Python',
                skillIconPath: '/python_icon.svg'
            },
            {
                skillName: 'TensorFlow',
                skillIconPath: '/tensorflow_icon.svg'
            },
            {
                skillName: 'PyTorch',
                skillIconPath: '/pytorch_icon.svg'
            },
            {
                skillName: 'Scikit-Learn',
                skillIconPath: '/scikit-learn_icon.svg'
            },
            {
                skillName: 'Pandas',
                skillIconPath: '/pandas_icon.svg'
            },
            {
                skillName: 'NumPy',
                skillIconPath: '/numpy_icon.svg'
            },
            {
                skillName: 'Matplotlib',
                skillIconPath: '/matplotlib_icon.svg'
            },
            {
                skillName: 'Seaborn',
                skillIconPath: '/seaborn_icon.svg'
            },
            {
                skillName:'Tableau',
                skillIconPath: '/tableau_icon.svg'
            },
            {
                skillName:'RapidMiner',
                skillIconPath: '/rapidminer_icon.svg'
            }
        ]
    }
]