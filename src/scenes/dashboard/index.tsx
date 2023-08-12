
import Header from '../../components/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TrafficIcon from '@mui/icons-material/Traffic';
import { tokens } from '../../theme/theme';
import StatBox from '../../components/StatBox';
import LineChart from '../../components/LineChart';
import { mockTransactions } from '../../data/mockData';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />


                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[100],
                            color: colors.grey[100],
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '10px 20px'
                        }}
                    />
                    <DownloadOutlinedIcon sx={{ mr: '10px' }} />
                    Download Reports
                </Box>

            </Box>
            {/* GRID & CHART */}

            <Box
                display='grid'
                gridTemplateColumns='repeat (12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                {/* ROW 1 */}
                <Box
                    sx={{
                        gridColumn: 'span 3',
                        backgroundColor: colors.primary[400],
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <StatBox
                        title='12,361'
                        subtitle='Emails Sent'
                        progress='0.75'
                        increase='+14%'
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    sx={{
                        gridColumn: 'span 3',
                        backgroundColor: colors.primary[400],
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <StatBox
                        title='43, 125'
                        subtitle='Sales Obtained'
                        progress='0.78'
                        increase='+1%'
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                <Box
                    sx={{
                        gridColumn: 'span 3',
                        backgroundColor: colors.primary[400],
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <StatBox
                        title='1,324,345'
                        subtitle='Traffic Inbound'
                        progress='0.90'
                        increase='+43%'
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    sx={{
                        gridColumn: 'span 8',
                        gridRow: 'span 2',
                        backgroundColor: colors.primary[400]
                    }}
                >
                    <Box
                        mt='25px'
                        p='0 30px'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box>
                            <Typography
                                variant='h5'
                                fontWeight='600'
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant='h5'
                                fontWeight='500'
                                color={colors.greenAccent[500]}
                            >
                                $59,342,32
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: '26px',
                                        color: colors.greenAccent[500]
                                    }}
                                />
                            </IconButton>
                        </Box>

                        <Box height='250px' ml='-20px'>
                            <LineChart isDahsboard={true} />
                        </Box>
                    </Box>
                </Box>

                {/* Transactions */}

                <Box
                    sx={{
                        gridColumn: 'span 4',
                        gridRow: 'span 2',
                        backgroundColor: colors.primary[400]
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: `4px solid ${colors.primary[500]}`,
                            colors: colors.grey[100],
                            p: '15px',
                        }}
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant='h5'
                            fontWeight='600'
                        >
                            Recent Transactions
                        </Typography>
                    </Box>

                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId} - ${i}}`}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: `4px solid ${colors.primary[500]}`,
                                p: '15px',

                            }}
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                >
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box
                                color={colors.greenAccent[500]}
                                padding='5px 10px'
                                borderRadius='10px'
                            >
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box >
    )
}

export default Dashboard;