import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { useRef, useEffect, useState } from 'react';
// sections
import { AppNewsUpdate, AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

function adddot(number) {
  return number.toLocaleString();
}

export default function DashboardAppPage() {
  const theme = useTheme();
  const [height, setHeight] = useState(12345678);
  const blockHeightRef = useRef(parseInt(new Date().valueOf() / 6000, 10));

  useEffect(() => {
    setTimeout(() => {
      setHeight(height + 1);
      blockHeightRef.current += 1;
    }, 3000);
  });
  return (
    <>
      <Helmet>
        <title> 监控面板 | 数创链 </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          欢迎回来！当前监控数据如下：
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="当前区块高度"
              total={adddot(blockHeightRef.current)}
              // total={new Date()}
              // total={now}
              icon={'ant-design:android-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="历史 TPS" total={601} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="平均出快时间" total={'3.8秒'} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="累计交易笔数" total={'769.7万'} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="智能合约" total={949} color="success" icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="已铸造" total={'3830'} color="info" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="交易数量"
              // subheader="(+43%) than last "
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                // {
                //   name: 'Team B',
                //   type: 'area',
                //   fill: 'gradient',
                //   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                // },
                {
                  name: 'TXs',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={12}>
            <AppNewsUpdate
              title="最新交易"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.datatype.hexadecimal(40),
                description: `from: ${faker.datatype.hexadecimal(40)} to: ${faker.datatype.hexadecimal(40)}`,
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: Date.now() - index * 5000,
              }))}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={12}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
