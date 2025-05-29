import OpportunityDetailPage from "../../../opportunity-detail-page"

export default function OpportunityPage({ params }: { params: { id: string } }) {
  return <OpportunityDetailPage id={params.id} />
}
