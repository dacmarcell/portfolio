import Title from "@/components/ui/Title";
import ReposList from "@/components/ReposList/ReposList";

export default function RepositoriosPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-20 py-6">
      <Title>Repositórios</Title>
      <ReposList />
    </main>
  );
}
