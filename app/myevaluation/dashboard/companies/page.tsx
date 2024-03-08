import { getCompanies } from "@/actions/get-company.server"
import { Company } from "@/types/types"

export default async function Companies() {
  const companies = await getCompanies()
  return (
    <>
      {companies.map((company: Company) => (
        <div key={company.id}>
          <h2 className="font-bold ">{company.name}</h2>
          <p>{company.address}</p>
        </div>
      ))}
    </>
  )
}
