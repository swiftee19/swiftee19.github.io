interface ExperienceData {
    id: string
    ExperienceTitle: string
    ExperienceStartDate: string
    ExperienceEndDate: string
    ExperienceDescription: string
}

export const ExperienceDataList: ExperienceData[] = [
    {
        id: 'experience1',
        ExperienceTitle: 'Software Teaching Assistant',
        ExperienceStartDate: 'February 2023',
        ExperienceEndDate: 'January 2024',
        ExperienceDescription: 'Teaching assistant for various IT courses (Algorithm and Programming, Database, Data mining, and lots more) at Bina Nusantara University.',
    },
    {
        id: 'experience2',
        ExperienceTitle: 'Database Administrator',
        ExperienceStartDate: 'January 2024',
        ExperienceEndDate: 'Present',
        ExperienceDescription: 'Maintain and manage the database for Bina Nusantara University. This includes optimizing the database and the jobs running on it as well as coordinating with other divisions to ensure data availability and consistency.'
    }
]