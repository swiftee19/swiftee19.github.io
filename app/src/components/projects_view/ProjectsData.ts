export interface ProjectData {
    id:number;
    title: string;
    description: string;
    images: Array<string>;
    link: string;
}

export const ProjectsData: Array<ProjectData> = [
    {
        id: 1,
        title: "Reef Rascals",
        description: "A Web3 application...",
        images: ["https://via.placeholder.com/150"],
        link: "#"
    },
    {
        id: 2,
        title: "MYkIR",
        description: "A Mobile application...",
        images: ["https://via.placeholder.com/150"],
        link: "#"
    },
    {
        id: 3,
        title: "faREbook",
        description: "A Facebook clone...",
        images: ["https://via.placeholder.com/150"],
        link: "#"
    },
    {
        id: 4,
        title: "Binus Virtual",
        description: "A Simulator game made for the purpose of exploring one of Bina Nusantara University's Campus. Made using Unreal Engine 5 and handcrafted assets created on Blender.",
        images: ["https://via.placeholder.com/150"],
        link: "#"
    },
]