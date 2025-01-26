type WorkItem = {
  name: string;
  category: string;
  image: string;
  tools: string;
  repoLink?: string;
  linktree?: string;
  drive?: string;
  comingSoon?: boolean; // Add comingSoon flag
};

export const WorkData: WorkItem[] = [
  {
    name: "Password Generator with Strength Checker and Encrypted Storage",
    category: "Script",
    image: "",
    tools: "Python, cryptography.fernet",
    repoLink: "https://github.com/rooter09/Password-Generator",
  },
  {
    name: "Steganography Tool",
    category: "Script",
    image: "",
    tools: "Python, watchdog, pywin32, scapy",
    repoLink: "https://github.com/rooter09/Tool-Steganography",
  },
  {
    name: "Harsh Sandilya- Bio Link",
    category: "LinkTree",
    image: "",
    tools: "bio.link",
    linktree: "https://harshsandilya.bio.link/",
  },
  {
    name: "Graphics Designing",
    category: "Drive",
    image: "",
    tools: "Drive",
    drive: "https://drive.google.com/drive/folders/1okVrx-jxYINcKb5GAFrta6wXokggFweQ",
  },
  {
    name: "Upcoming Project - Coming Soon",
    category: "coming soon",
    image: "",
    tools: "coming soon",
  },
];
