// @mui
import {
  Box,
  Card,
  CardHeader,
  CircularProgress,
  Divider,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
// components
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { TableEmptyRows, TableHeadCustom, TableMoreMenu } from 'src/components/table';
import { useEffect, useState } from 'react';
import { ErrorType } from 'src/types/ErrorType';
import { HOST_API } from 'src/config';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

export default function ErrorsList() {
  const { translate } = useLocales();

  const [tableData, setTableData] = useState<ErrorType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(HOST_API + `logger?page=${0}&searchTerm=''`);
      const data = (await response.json()) as ErrorType[];

      console.log(data);
      setLoading(false);
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <Page title={translate('errorsListTitle')}>
      <Card>
        <CardHeader title={translate('errorsListTitle')} sx={{ mb: 3 }} />

        <TableContainer sx={{ overflow: 'hidden' }}>
          {loading && (
            <Table>
              <Box display="flex" alignItems="center" justifyContent="center" width="100%" m={5}>
                <CircularProgress />
              </Box>
            </Table>
          )}

          {!loading && tableData.length > 0 && (
            <Table>
              <TableHeadCustom
                headLabel={[
                  { id: 'errorCode', label: translate('errorsList.errorCode') },
                  { id: 'description', label: translate('errorsList.description') },
                  { id: 'user', label: translate('errorsList.user') },
                  { id: 'date', label: translate('errorsList.date') },
                  { id: '' },
                ]}
              />
              <TableBody>
                {tableData.map((row) => (
                  <ErrorTableRow row={row} key={row.id} />
                ))}
              </TableBody>
            </Table>
          )}

          {!loading && tableData.length === 0 && (
            <Table>
              <TableEmptyRows emptyRows={0} />
            </Table>
          )}
        </TableContainer>
      </Card>
    </Page>
  );
}

type ErrorTableRowProps = {
  row: ErrorType;
};

function ErrorTableRow({ row }: ErrorTableRowProps) {
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  const handleDownload = () => {
    handleCloseMenu();
    console.log('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    handleCloseMenu();
    console.log('PRINT', row.id);
  };

  const handleShare = () => {
    handleCloseMenu();
    console.log('SHARE', row.id);
  };

  const handleDelete = () => {
    handleCloseMenu();
    console.log('DELETE', row.id);
  };

  return (
    <TableRow key={row.id}>
      <TableCell>{row.status}</TableCell>

      <TableCell>{row.description}...</TableCell>

      <TableCell>{row.user}</TableCell>

      <TableCell>
        {new Date(row.date).toLocaleDateString('da-DK') +
          ' ' +
          new Date(row.date).toLocaleTimeString('da-DK')}
      </TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem onClick={handleDownload}>
                <Iconify icon={'eva:download-fill'} />
                Download
              </MenuItem>

              <MenuItem onClick={handlePrint}>
                <Iconify icon={'eva:printer-fill'} />
                Print
              </MenuItem>

              <MenuItem onClick={handleShare}>
                <Iconify icon={'eva:share-fill'} />
                Share
              </MenuItem>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
