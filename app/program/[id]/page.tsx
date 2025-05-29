import ProgramDetailPage from "../../../program-detail-page"

export default function ProgramPage({ params }: { params: { id: string } }) {
  return <ProgramDetailPage id={params.id} />
}
