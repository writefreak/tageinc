import Listing from "@/components/listing/listing";
import { getPropertyById } from "@/lib/mock-property";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const property = getPropertyById(resolvedParams.id);

  if (!property) {
    notFound();
  }

  return <Listing property={property} />;
};

export default Page;
