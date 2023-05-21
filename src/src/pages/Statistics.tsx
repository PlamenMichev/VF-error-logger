// components
import Page from '../components/Page';
import useLocales from 'src/hooks/useLocales';
import { useState } from 'react';
import { Tabs, Tab, CardHeader, Card, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Statistics() {
  const { translate } = useLocales();

  const TABS = [
    {
      value: 'occurrence',
      label: translate('tabs.occurrence'),
    },
    {
      value: 'common',
      label: translate('tabs.common'),
    },
    {
      value: 'errorType',
      label: translate('tabs.errorType'),
    },
  ];
  const [pickedTab, setPickedTab] = useState(TABS[0].value);

  return (
    <Page title={translate('statisticsTitle')}>
      <Card>
        <CardHeader title={translate('statisticsTitle')} sx={{ mb: 3 }} />
        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={pickedTab}
          onChange={(e, val) => setPickedTab(val)}
          sx={{ px: 2, bgcolor: 'background.neutral' }}
        >
          {TABS.map((tab) => (
            <Tab disableRipple key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {pickedTab === TABS[0].value && <Box>Error occurence</Box>}
        {pickedTab === TABS[1].value && <Box>Common errors</Box>}
        {pickedTab === TABS[2].value && <Box>Error types</Box>}
      </Card>
    </Page>
  );
}
