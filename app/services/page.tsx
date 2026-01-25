import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

const tableContainerClass = 'bg-zinc-900 rounded-lg shadow mb-8';
const tableContainerClassNoMargin = 'bg-zinc-900 rounded-lg shadow';
const tableHeadCellClass = 'bg-zinc-800 text-white font-semibold text-lg';
const tableRowClass = 'bg-black text-white';
const tableBodyCellClass = 'text-white';
const headingClass = 'text-2xl font-bold text-white mb-4';

export default function Services() {
  return (
    <div className="w-full bg-black py-8 px-48">
      <h1 className={headingClass}>Appointments</h1>
      <TableContainer component={Paper} className={tableContainerClass}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={tableHeadCellClass} sx={{ color: 'white' }}>
                Service
              </TableCell>
              <TableCell
                align="right"
                className={tableHeadCellClass}
                sx={{ color: 'white' }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Haircut with Beard Trim
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £20
              </TableCell>
            </TableRow>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Haircut with Skin Fade
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £20
              </TableCell>
            </TableRow>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Beard Trim
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £10
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h1 className={headingClass}>Walk In</h1>
      <TableContainer component={Paper} className={tableContainerClassNoMargin}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={tableHeadCellClass} sx={{ color: 'white' }}>
                Service
              </TableCell>
              <TableCell
                align="right"
                className={tableHeadCellClass}
                sx={{ color: 'white' }}
              >
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Haircut with Beard Trim
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £20
              </TableCell>
            </TableRow>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Haircut with Skin Fade
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £20
              </TableCell>
            </TableRow>
            <TableRow className={tableRowClass}>
              <TableCell className={tableBodyCellClass} sx={{ color: 'white' }}>
                Beard Trim
              </TableCell>
              <TableCell
                align="right"
                className={tableBodyCellClass}
                sx={{ color: 'white' }}
              >
                £10
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row py-8 justify-center">
        <Link
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
          href="/booking"
        >
          Make a Booking
        </Link>
      </div>
    </div>
  );
}
