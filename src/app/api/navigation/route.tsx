import { NextResponse } from "next/server";

const navigation = [
  { id: 1, formattedName: "Início", endpoint: "/" },
  { id: 4, formattedName: "Sobre mim", endpoint: "/sobre" },
  { id: 2, formattedName: "Projetos", endpoint: "/projetos" },
  // { id: 3, formattedName: "Repositórios", endpoint: "/repositorios" },
  {
    id: 5,
    formattedName: "Loja",
    endpoint: "https://devmarcell.gumroad.com/",
  },
];

export async function GET() {
  return NextResponse.json(navigation);
}
