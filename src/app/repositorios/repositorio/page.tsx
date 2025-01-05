"use client";

import { useRepositoryContext } from "@/contexts/RepositoryContext";
import Link from "next/link";

export default function Page() {
  const { foundRepository } = useRepositoryContext();

  if (!foundRepository) {
    return (
      <>
        <h1>Nenhum repositório encontrado.</h1>
        <Link href="/repositorios">Voltar</Link>
      </>
    );
  }

  return (
    <div>
      <h1>{foundRepository.id}</h1>
      <h1>{foundRepository.name}</h1>
      <Link href="/repositorios">Voltar</Link>
    </div>
  );
}
