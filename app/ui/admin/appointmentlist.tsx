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
  
export default function AppointmentList(){
    return(
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                    
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium">Yaw Twumasi Acheampong</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>Notify</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}