export interface Technology {
    id: number;
    name: string;
    image: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    media?: Array<string>; // Can be images or videos
    link: string;
    technology_stack: Array<Technology>;
}



export const ProjectsData: Array<Project> = [
    {
        id: 1,
        title: "Reef Rascals",
        description: "Reef Rascal is a <a>Web3🌐</a> turn-based game where players collect and battle rascals (fighters) in an ICP token-based environment. Players can gacha, buy, and sell their rascals on a decentralized marketplace. The game is built using React with <a href='https://www.typescriptlang.org/' target='_blank'>TypeScript</a> and <a href='https://github.com/dfinity/motoko' target='_blank'>Motoko</a> on the Internet Computer.",
        media: ["/reef_rascals/home_page.png", "/reef_rascals/aquarium_page.jpg", "/reef_rascals/battle_page.png", "/reef_rascals/marketplace_page.png", "/reef_rascals/profile_page.png"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "React",
                image: "/react_icon.svg"
            },
            {
                id: 2,
                name: "Vite",
                image: "/vite_icon.svg"
            },
            {
                id: 3,
                name: "TypeScript",
                image: "/typescript_icon.svg"
            },
            {
                id: 4,
                name: "Motoko",
                image: "/motoko_icon.webp"
            },
            {
                id: 5,
                name: "Web3",
                image: "/web3_icon.svg"
            },
        ]
    },
    {
        id: 2,
        title: "MYkIR",
        description: "A platform for seamless knowledge-sharing through vibrant discussions and insightful posts. Whether you're an expert or a curious learner, <a href='https://play.google.com/store/apps/details?id=edu.bluejack23_1.mykir_neo&hl=en_US' target='_blank'>MYkIR</a> connects you with like-minded individuals that learns subjects through conversing in <u>Spaces</u>, each dedicated to a specific skill category or field of expertise.",
        media: ["/MYkIR/home_page.webp", "/MYkIR/inbox_page.webp", "/MYkIR/space_page_posts.webp", "/MYkIR/space_page_discussions.webp", "/MYkIR/post_detail.webp", "/MYkIR/discussion_room.webp"],
        link: "https://play.google.com/store/apps/details?id=edu.bluejack23_1.mykir_neo&hl=en_US",
        technology_stack: [
            {
                id: 1,
                name: "Kotlin",
                image: "/kotlin_icon.svg"
            },
            {
                id: 2,
                name: "Android Studio",
                image: "/android_studio_icon.svg"
            },
            {
                id: 3,
                name: "Firebase",
                image: "/firebase_icon.svg"
            },
            {
                id: 4,
                name: "Android SDK 33",
                image: "/android_icon.svg"
            },
        ]
    },
    // {
    //     id: 3,
    //     title: "faREbook",
    //     description: "A Facebook clone...",
    //     images: ["https://via.placeholder.com/150"],
    //     link: "#",
    //     technology_stack: [
    //         {
    //             id: 1,
    //             name: "React",
    //             image: "/react_icon.svg"
    //         },
    //         {
    //             id: 2,
    //             name: "GO",
    //             image: "/go_icon.svg"
    //         },
    //         {
    //             id: 3,
    //             name: "PostgreSQL",
    //             image: "/postgresql_icon.svg"
    //         },
    //         {
    //             id: 4,
    //             name: "GraphQL",
    //             image: "/graphql_icon.svg"
    //         },
    //         {
    //             id: 5,
    //             name: "Vite",
    //             image: "/vite_icon.svg"
    //         },
    //         {
    //             id: 6,
    //             name: "Firebase",
    //             image: "/firebase_icon.svg"
    //         },
    //     ]
    // },
    {
        id: 4,
        title: "Binus Virtual",
        description: "A Simulator game made for the purpose of exploring one of <a href='https://binus.ac.id/' target='_blank'>Bina Nusantara University</a>'s Campus. Made using Unreal Engine 5 and handcrafted, original assets created on Blender.",
        media: ["https://youtu.be/xR7AGusbtSc"],
        link: "#",
        technology_stack: [
            {
                id: 1,
                name: "Unreal Engine 5",
                image: "/ue5_icon.svg"
            },
            {
                id: 2,
                name: "Blender",
                image: "/blender_icon.svg"
            },
        ]
    },
]