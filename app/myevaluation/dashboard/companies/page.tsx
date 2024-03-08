import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getCompanies } from "@/actions/get-company.server"
import { Company } from "@/types/types"

export default async function Companies() {
  const companies = await getCompanies()
  return (
    <>
      <Table>
        <TableCaption>Liste des entreprises</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Entreprise</TableHead>
            <TableHead>Addresse</TableHead>
            <TableHead className="text-right">Code postal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company: Company) => (
            <TableRow key={company.id}>
              <TableCell className="font-medium">{company.id}</TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.address}</TableCell>
              <TableCell className="text-right">{company.zipCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
