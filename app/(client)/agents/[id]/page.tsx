import AgentProfile from "@/components/agents/agent-profile";
import { getAgentById, MOCK_AGENTS } from "@/lib/mock-agents";
import { MOCK_PROPERTIES } from "@/lib/mock-property";
import { notFound } from "next/navigation";

interface AgentPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return MOCK_AGENTS.map((agent) => ({ id: agent.id }));
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { id } = await params;
  const agent = getAgentById(id);

  if (!agent) {
    notFound();
  }

  const properties = MOCK_PROPERTIES.filter(
    (property) => property.agent.id === agent.id,
  );

  return <AgentProfile agent={agent} properties={properties} />;
}
