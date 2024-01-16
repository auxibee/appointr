
'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
export default function AppointmentDetailList(){
    return(
        <div>
            <Table>
                <TableCaption>Applicant List</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Date Of Birth</TableHead>
                    
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">Yaw</TableCell>
                    <TableCell>Twumasi</TableCell>
                    <TableCell>12/03/1992</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}
