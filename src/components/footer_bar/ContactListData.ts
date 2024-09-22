interface ContactData {
  id: string
  ImagePath: string
  ContactDescription: string
  ContactLink: string
}

export const ContactListData: ContactData[] = [
  {
    id: 'github',
    ImagePath: '/github_icon.svg',
    ContactDescription: 'swiftee19',
    ContactLink: 'https://github.com/swiftee19'
  },
  {
    id: 'linkedin',
    ImagePath: '/linkedin_icon.svg',
    ContactDescription: 'Nicholas Irvin',
    ContactLink: 'https://linkedin.com/in/nicholas-irvin-112112248'
  },
  {
    id: 'email',
    ImagePath: '/gmail_icon.svg',
    ContactDescription: 'nicholasirvin123@gmail.com',
    ContactLink: 'mailto:nicholasirvin123@gmail.com'
  },
  {
    id: 'instagram',
    ImagePath: '/instagram_icon.svg',
    ContactDescription: '@nicholasirvin._',
    ContactLink: 'https://www.instagram.com/nicholasirvin._/'
  }
]
