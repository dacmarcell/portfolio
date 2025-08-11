import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id"));

  if (id) {
    if (isNaN(id)) {
      return NextResponse.json({ error: "Id inválido" }, { status: 400 });
    }

    const project = projects.find((p) => p.id === id);
    if (!project) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  }

  return NextResponse.json(projects);
}
