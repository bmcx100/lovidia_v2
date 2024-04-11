export interface ContributorType {
  id: number;
  name: string;
  profilepic: string;
  title: string;
  description: string;
  contributions: string[];
  links: ContributorLinks[];
  comments: string;
}

type ContributorLinks = {
  title: string;
  description: string;
  link: string;
};

export const ContributorsData: ContributorType[] = [
  {
    id: 700,
    name: "Snoop Dogg",
    profilepic: "snoop.webp",
    title: "The Doggfather",
    description: "Calvin Cordozar Broadus Jr known professionally as Snoop Dogg is an American rapper. ",
    contributions: ["The Next Episode", "Drop It Like It's Hot", "Who Am I (What's My Name)?"],
    links: [
      {
        title: "Facebook",
        description: "Snoop Dogg's Facebook account:",
        link: "https://www.facebook.com/snoopdogg/",
      },
      {
        title: "Website",
        description: "Snoop Dogg's Website:",
        link: "https://www.snoopermarket.com/",
      },
    ],
    comments:
      "Snoop has very graciously not volunteered any of this information to Lovidia and is simply being used as a placeholder to show how one might have their information profiled on our site in recognition of their contribution and to help promote their work as part of our appreciation for their help.",
  },
];
