import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { useRef, useEffect, useState } from 'react';
import useUser from '../hooks/useUser';
// sections
import { AppNewsUpdate, AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';
import { getLocalStorage } from '../utils/utility';

// ----------------------------------------------------------------------

function adddot(number) {
  return number.toLocaleString();
}

export default function DashboardAppPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, error] = useUser(getLocalStorage('accessToken'));
  const [height, setHeight] = useState(12345678);
  const blockHeightRef = useRef(parseInt(new Date().valueOf() / 6000, 10));

  if (error) {
    navigate('/login', { replace: true });
  }
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
                {
                  name: 'TXs',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>
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
        </Grid>
      </Container>
    </>
  );
}
