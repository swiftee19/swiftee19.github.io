export interface Technology {
    id: number;
    name: string;
    image: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    images: Array<string>;
    link: string;
    technology_stack: Array<Technology>;
}



export const ProjectsData: Array<Project> = [
    {
        id: 1,
        title: "Reef Rascals",
        description: "Reef Rascal is a <a>Web3🌐</a> turn-based game where players collect and battle rascals (fighters) in an ICP token-based environment. Players can gacha, buy, and sell their rascals on a decentralized marketplace. The game is built using React with <a href='https://www.typescriptlang.org/' target='_blank'>TypeScript</a> and <a href='https://github.com/dfinity/motoko' target='_blank'>Motoko</a> on the Internet Computer.",
        images: ["/reef_rascals/home_page.png", "/reef_rascals/aquarium_page.jpg", "/reef_rascals/battle_page.png", "/reef_rascals/marketplace_page.png", "/reef_rascals/profile_page.png"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "React",
                image: "/react_icon.svg"
            },
            {
                id: 2,
                name: "TypeScript",
                image: "/typescript_icon.svg"
            },
            {
                id: 3,
                name: "Motoko",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 4,
                name: "Web3",
                image: "https://via.placeholder.com/150"
            },
        ]
    },
    {
        id: 2,
        title: "MYkIR",
        description: "A Mobile application...",
        images: ["https://via.placeholder.com/150"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "Kotlin",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                name: "Android Studio",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 3,
                name: "Firebase",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 4,
                name: "Android SDK 33",
                image: "https://via.placeholder.com/150"
            },
        ]
    },
    {
        id: 3,
        title: "faREbook",
        description: "A Facebook clone...",
        images: ["https://via.placeholder.com/150"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "React",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                name: "GO",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 3,
                name: "PostgreSQL",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 4,
                name: "GraphQL",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 5,
                name: "Vite",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 6,
                name: "Firebase",
                image: "https://via.placeholder.com/150"
            },
        ]
    },
    {
        id: 4,
        title: "Binus Virtual",
        description: "A Simulator game made for the purpose of exploring one of Bina Nusantara University's Campus. Made using Unreal Engine 5 and handcrafted, original assets created on Blender.",
        images: ["https://via.placeholder.com/150"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "Unreal Engine 5",
                image: "https://via.placeholder.com/150"
            },
            {
                id: 2,
                name: "Blender",
                image: "https://via.placeholder.com/150"
            },
        ]
    },
]