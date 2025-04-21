"use client";
import GameList from "@/components/common/GameList";
import GameSkeleton from "@/components/common/GameSkeleton";
import { useFetch } from "@/hooks/useFetch";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  if (!slug) return <p>Invalid slug</p>;

  const parts = (slug as string).split("-");
  const getid = parts[0];
  const getcategory = parts[1];

  const { data, loading, error } = useFetch<{ results: any[] }>(
    `/api/list/${getid}-${getcategory}`
  );

  if (loading) return <GameSkeleton />;
  if (error) return <p>Error: {error}</p>;

  return <GameList games={data?.results || []} />;
}
