interface NavigationBarButtonData {
  id: string
  buttonText: string
  viewDestination: string
}

export const NavigationBarButtonList: NavigationBarButtonData[] = [
  {
    id: 'home',
    buttonText: 'Home',
    viewDestination: '/'
  },
  {
    id: 'projects',
    buttonText: 'Projects',
    viewDestination: '/projects'
  },
  {
    id: 'experience',
    buttonText: 'Experience',
    viewDestination: '/experience'
  }
]
