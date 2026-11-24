// Creates a custom type for the links items
export type LinkItem =
  | { id: string; type: "link"; text: string; icon: React.ReactNode; link: string }
  | { id: string; type: "download"; text: string; icon: React.ReactNode; file: string; fileName: string }
  | { id: string; type: "image"; text: string; icon: React.ReactNode; image: string; altText: string };
