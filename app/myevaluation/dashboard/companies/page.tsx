import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { getCompanies } from "@/actions/get-company.server"
import { Company } from "@/types/types"

export default async function Companies() {
  const companies = await getCompanies()
  return (
    <>
      <div className="sm:w-full">
        <Table className="w-full">
          <TableCaption>Liste des entreprises</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Logo</TableHead>
              <TableHead>Entreprise</TableHead>
              <TableHead>Adresse</TableHead>
              <TableHead>Code postal</TableHead>
              <TableHead>Pays</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company: Company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">{company.id}</TableCell>
                <TableCell>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={128}
                    height={128}
                  ></Image>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.address}</TableCell>
                <TableCell>{company.zipcode}</TableCell>
                <TableCell>{company.country}</TableCell>
                <TableCell>
                  <button>Modifier</button>
                  <button>Supprimer</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
