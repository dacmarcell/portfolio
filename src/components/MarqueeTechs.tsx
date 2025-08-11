import Image from "next/image";

import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Amazon EC2",
    img: "/icons/amazonec2.svg",
  },
  {
    name: "Amazon S3",
    img: "/icons/amazons3.png",
  },
  {
    name: "Docker",
    img: "/icons/docker.svg",
  },
  {
    name: "Github Actions",
    img: "/icons/githubactions.svg",
  },
  {
    name: "Bash",
    img: "/icons/gnubash.svg",
  },
  {
    name: "Js",
    img: "/icons/javascript.svg",
  },
  {
    name: "PHP",
    img: "/icons/php.svg",
  },
  {
    name: "Linux",
    img: "/icons/linux.svg",
  },
  {
    name: "Nginx",
    img: "/icons/nginx.svg",
  },
  {
    name: "NodeJs",
    img: "/icons/nodedotjs.svg",
  },
  {
    name: "PostgreSQL",
    img: "/icons/postgresql.svg",
  },
  {
    name: "Python",
    img: "/icons/python.svg",
  },
  {
    name: "React",
    img: "/icons/react.svg",
  },
  {
    name: "NextJs",
    img: "/icons/nextdotjs.svg",
  },
  {
    name: "Rust",
    img: "/icons/rust.svg",
  },
  {
    name: "C#",
    img: "/icons/csharp.svg",
  },
  {
    name: "TailwindCSS",
    img: "/icons/tailwindcss.svg",
  },
  {
    name: "Typescript",
    img: "/icons/typescript.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
}

const ReviewCard = ({ img, name }: ReviewCardProps) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border-2 border-dotted p-4 hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center justify-center gap-2">
        <Image width="42" height="42" alt="profile picture" src={img} />
        <figcaption className="font-medium">{name}</figcaption>
      </div>
    </figure>
  );
};

export function MarqueeTechs() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
