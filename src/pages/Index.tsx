import { Header } from "@/components/Header";
import { PlagiarismChecker } from "@/components/PlagiarismChecker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PlagiarismChecker />
      </main>
    </div>
  );
};

export default Index;
