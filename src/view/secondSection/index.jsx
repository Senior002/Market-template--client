import './second.css';
import { TbChevronUp } from "react-icons/tb";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { DownOutlined } from '@ant-design/icons';
import { BsThreeDots } from 'react-icons/bs';
import { Avatar, Button, Dropdown, Space, message, Select, FloatButton } from 'antd';
import { Table, Badge } from 'rsuite';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chart from 'react-apexcharts';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { MdLogin } from "react-icons/md";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FaSquare } from "react-icons/fa";
import { HeaderCell, Column, Cell } from 'rsuite-table';
import avatar1 from '../../components/pictures/avatar1.jpg';
import avatar2 from '../../components/pictures/avatar2.png';
import avatar3 from '../../components/pictures/avatar3.webp';
import avatar4 from '../../components/pictures/avatar4.webp';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SecondSection = () => {
  // bitcoin chart value
  const pData = [10000, 5000, 5033, 7842, 6000, 2, 1000, 6000, 3908, 4800, 3800, 2];
  // doge chart val
  const pData2 = [2, 2000, 2700, 3000, 6000, 5500, 5000, 3800, 3399, 6500, 5800, 10000];
  // eth chart value
  const pData3 = [10000, 2000, 5033, 6842, 7000, 2, 4000, 2, 4908, 3800, 500, 8100];
  // xrp chart value
  const pData4 = [10000, 7000, 5033, 7842, 6000, 1000, 1000, 6000, 3908, 4800, 3800, 2];

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        // text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: false,
        position: 'left',
        
      },
      x: {
        display: false
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// bitcoin chart data
  const data = {
    labels,
    datasets: [
      {
        label: 'BTC',
        data: pData,
        borderColor: 'rgb(60, 60, 255)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        pointStyle: false
      }
    ],
  };
// doge chart data
  const data1 = {
    labels,
    datasets: [
      {
        label: 'DOGE',
        data: pData2,
        borderColor: 'rgb(60, 60, 255)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        pointStyle: false
      }
    ],
  };
// eth chart data
  const data2 = {
    labels,
    datasets: [
      {
        label: 'ETH',
        data: pData3,
        borderColor: 'rgb(60, 60, 255)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        pointStyle: false
      }
    ],
  };
// xrp chart data
  const data3 = {
    labels,
    datasets: [
      {
        label: 'XRP',
        data: pData4,
        borderColor: 'rgb(60, 60, 255)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
        pointStyle: false
      }
    ],
  };

// history chart data
  const totalRevenueChartOptions = {
    series: [
      {
        name: 'Marketing Sales',
        data: [18, 7, 15, 23, 18, 12, 9],
      },
      {
        name: 'Current Sales',
        data: [18, 22, 15, 9, 18, 12, 9],
      },
      {
        name: 'Online Sales',
        data: [18, 45, 15, 23, 18, 12, 9],
      },
      {
        name: 'Offline Sales',
        data: [10, 18, 9, 29, 15, 17, 15],
      },
    ],
    chart: {
      offsetX: 0,
      height: 300,
      stacked: true,
      type: 'bar',
      toolbar: { show: false },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '33%',
        borderRadius: 10,
        startingShape: 'rounded',
        endingShape: 'rounded',
        borderRadiusApplication: "around",
        borderRadiusWhenStacked: "all"
      },
    },
    colors: ['blue', 'yellow', 'green'],
    fill: {
      colors: ['#1A73E8', '#FFE92C', '#00B82C', '#772EFF',]
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 9,
      colors: ['rgb(255, 255, 255)']
    },
    legend: {
      show: true,
      horizontalAlign: 'left',
      position: 'top',
      markers: {
        height: 8,
        width: 8,
        radius: 12,
        offsetX: -3
      },
      labels: {
        colors: ['black']
      },
      itemMargin: {
        horizontal: 10
      }
    },
    grid: {
      borderColor: '#f8f8f8',
      strokeDashArray: 7,
      padding: {
        top: 0,
        bottom: -8,
        left: 20,
        right: 20
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '13px',
          colors: ['black']
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '13px',
          colors: ['black']
        }
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    }
  };

// summary chart data
  const totalRevenueChartOptions2 = {
    series: [
      {
        name: '2020',
        data: [3, 10, 5, 14, 20, 6, 9]
      }
    ],
    chart: {
      offsetX: 0,
      height: 300,
      stacked: true,
      type: 'bar',
      toolbar: { show: false },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: true,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        borderRadius: 12,
        startingShape: 'rounded',
        endingShape: 'rounded',
      },
    },
    colors: ['blue'],
    fill: {
      colors: ['#1A73E8']
    },
    dataLabels: {
      enabled: false,
    },
    // stroke: {
    //   curve: 'smooth',
    //   width: 6,
    //   lineCap: 'round',
    //   colors: ['rgb(255, 255, 255)']
    // },
    
    legend: {
      show: false,
    },
    grid: {
      show: false
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '13px',
          colors: ['black']
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    }
  };
// summary chart selection data
  const items = [
    {
      label: '2023',
      key: '1',
    },
    {
      label: '2022',
      key: '2',
    },
    {
      label: '2021',
      key: '3',
    },
    {
      label: '2020',
      key: '4',
    },
  ];
// summary chart selection click event
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
  };

  const menuProps = {
    items,
    onClick: handleMenuClick
  }
  // for table
  const tableData = [
    {
      square: <FaSquare color='#e9f0fd' size={15} />,
      avatar: <Avatar size="medium" src={avatar1} />,
      name: `Matilda Cook`,
      date: '17 May 2021',
      amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$129.00</strong></div>,
      email: 'enfazdel@hotmail.io',
      productId: '001245',
      status: <Badge content="Paid" style={{backgroundColor: '#edf5ec', color: 'rgb(0, 177, 0)', padding: '3px 10px'}} />,
      option: <Select defaultValue='Details' size='large' />
    },
    {
      square: <FaSquare color='#e9f0fd' size={15} />,
      avatar: <Avatar size="medium" src={avatar2} />,
      name: 'Jorge Neal',
      date: '15 May 2021',
      amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$234.00</strong></div>,
      email: 'ugazaruk@ukdo.org',
      productId: '004215',
      status: <Badge content="Pending" style={{backgroundColor: '#fef7ec', color: 'orange', padding: '3px 10px'}} />,
      option: <Select defaultValue='Details' size='large' />
    },
    {
      square: <FaSquare color='#e9f0fd' size={15} />,
      avatar: <Avatar size="medium" src={avatar3} />,
      name: 'Nora Andrews',
      date: '15 May 2021',
      amount: <div style={{color: 'red'}}><strong>-$632.42</strong></div>,
      email: 'moarele@zeob.com',
      productId: '005223',
      status: <Badge content="Unpaid" style={{backgroundColor: '#fef7ec', color: 'red', padding: '3px 10px'}} />,
      option: <Select defaultValue='Details' size='large' />
    },
    {
      square: <FaSquare color='#e9f0fd' size={15} />,
      avatar: <Avatar size="medium" src={avatar4} />,
      name: 'Lena Show',
      date: '14 May 2021',
      amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$134.06</strong></div>,
      email: 'pi@mejoj.com',
      productId: '000813',
      status: <Badge content="Paid" style={{backgroundColor: '#edf5ec', color: 'rgb(0, 177, 0)', padding: '3px 10px'}} />,
      option: <Select defaultValue='Details' size='large' />
    }
  ];

    return (
        <div className='forhuge'>
            <div className='wrapper'>
                    <div className="general">
                        <div className="second_seria1">
                            <div className="row second_seria1_wrapper">
                                <div className="col-md-3 box_border">
                                  <div className="second_box_header">
                                    <Avatar src='./bitcoin.png' />
                                    <h6 className='box_header_txt'><strong>BTC / USD</strong></h6>
                                  </div>
                                  <div className="box_price_place">
                                    <h6 className='box_price'><strong>$6,325.00</strong></h6>
                                    <h6 className='box_smallest_txt'><strong>Last 24h - 1.25</strong></h6>
                                  </div>
                                  <div className="box_percent_place">
                                    <div className="chevron_wrap">
                                      <TbChevronUp className='chevron' />
                                    </div>
                                    <h6 className='box_percent'><strong>+7,24 %</strong></h6>
                                  </div>
                                  <div className="box_end">
                                    <div className="box_chart_place">
                                      <Line className='box_chart' options={options} data={data} />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3 box_border">
                                <div className="second_box_header">
                                    <Avatar src='./doge.png' />
                                    <h6 className='box_header_txt'><strong>DOGE / USD</strong></h6>
                                  </div>
                                  <div className="box_price_place">
                                    <h6 className='box_price'><strong>$2,017.00</strong></h6>
                                    <h6 className='box_smallest_txt'><strong>Last 24h - 0.9</strong></h6>
                                  </div>
                                  <div className="box_percent_place">
                                    <div className="chevron_wrap">
                                      <TbChevronUp className='chevron' />
                                    </div>
                                    <h6 className='box_percent'><strong>+4,13 %</strong></h6>
                                  </div>
                                  <div className="box_end">
                                    <div className="box_chart_place">
                                      <Line className='box_chart' options={options} data={data1} />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-3 box_border">
                                <div className="second_box_header">
                                    <Avatar src='./eth.png' style={{backgroundColor: '#ebebeb'}} />
                                    <h6 className='box_header_txt'><strong>ETH / USD</strong></h6>
                                  </div>
                                  <div className="box_price_place">
                                    <h6 className='box_price'><strong>$1,321.00</strong></h6>
                                    <h6 className='box_smallest_txt'><strong>Last 24h - 4.62</strong></h6>
                                  </div>
                                  <div className="box_percent_place">
                                    <div className="chevron_wrap">
                                      <TbChevronUp className='chevron' />
                                    </div>
                                    <h6 className='box_percent'><strong>+5,4 %</strong></h6>
                                  </div>
                                  <div className="box_end">
                                    <div className="box_chart_place">
                                      <Line className='box_chart' options={options} data={data2} />
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="col-md-3 box_border">
                                <div className="second_box_header">
                                    <Avatar src='./xrp.png' style={{backgroundColor: '#ebebeb'}} />
                                    <h6 className='box_header_txt'><strong>XRP / USD</strong></h6>
                                  </div>
                                  <div className="box_price_place">
                                    <h6 className='box_price'><strong>$819.00</strong></h6>
                                    <h6 className='box_smallest_txt'><strong>Last 24h - 2.1</strong></h6>
                                  </div>
                                  <div className="box_percent_place">
                                    <div className="chevron_wrap" style={{backgroundColor: '#ffd6d6'}}>
                                      <HiOutlineChevronDown style={{color: 'red'}} />
                                    </div>
                                    <h6 className='box_percent' style={{color: 'red'}}><strong>-10,53 %</strong></h6>
                                  </div>
                                  <div className="box_end">
                                    <div className="box_chart_place">
                                      <Line className='box_chart' options={options} data={data3} />
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <FloatButton.BackTop />
                        </div>

                        <div className="second_seria2">
                          <div className="row second_seria2_wrapper">
                            <div className="col-md-6 kolmd8" style={{padding: '20px'}}>
                              <div className="seria2_header">
                                <div className="header_left">
                                  <h6 className='history'><strong>History</strong></h6>
                                </div>
                                <div className="header_right">
                                  <Dropdown menu={menuProps}>
                                    <Button>
                                      <Space>
                                        This year
                                        <DownOutlined />
                                      </Space>
                                    </Button>
                                  </Dropdown>
                                </div>
                              </div>
                              <div className="second_seria2_chart_place">
                              <Chart 
                                series={totalRevenueChartOptions.series}
                                options={totalRevenueChartOptions}
                                type={totalRevenueChartOptions.chart.type}
                              />
                              </div>
                            </div>
                            <div className="col-md-4 second_seria2_right_wrapper">
                              <div className="col-md-12 kolmd3" style={{marginBottom: '15px', paddingBottom: '35px'}}>
                                <div className="seria2_header">
                                  <div className="header_left">
                                    <h6 className='sales_target'><strong>Sales Target</strong></h6>
                                    <h6 className='bottom_txt'>1 May - 13 May, 2021</h6>
                                  </div>
                                  <div className="header_right">
                                    <BsThreeDots className='three_dot'/>
                                  </div>
                                </div>
                                  <SemiCircleProgressBar className='semi_circle' percentage={68} showPercentValue stroke='#ffb52e'
                                  background='#fff5e3' diameter={250} />
                                  <MdLogin className='login_semi' size={23} />
                                  <h6 className='semi_target'>4,201 / <span className='anth'>4, 800 target</span></h6>
                                  <h6 className='semi_txt'>You nearly reached your monthly target. Keep going! (4 days to go)</h6>
                              </div>
                              <div className="col-md-12 kolmd3">
                                <div className="seria2_header">
                                  <div className="header_left">
                                    <h6 className='sales_target'><strong>Summary</strong></h6>
                                    <h6 className='bottom_txt'>1 May - 14 May, 2021</h6>
                                  </div>
                                  <div className="header_right">
                                    <BsThreeDots className='three_dot'/>
                                  </div>
                                </div>
                                <div className="second_seria2_chart_place2" style={{height: '200px'}}>
                                  <Chart 
                                    series={totalRevenueChartOptions2.series}
                                    options={totalRevenueChartOptions2}
                                    type='bar'
                                    height={200}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="second_seria3">
                            <div className="row second_seria3_wrapper">
                              <div className="col-md-10 second_seria3_table_wrapper">
                                <div className="seria2_header">
                                  <div className="header_left">
                                    <h6 className='sales_target'><strong>Invoices</strong></h6>
                                    <h6 className='bottom_txt'>890,344 Invoices</h6>
                                  </div>
                                  <div className="header_right">
                                    <Button type="primary" shape="round" size='large'
                                    icon={<HiOutlineDocumentArrowDown className='doc_arr_down' size={20} />}>
                                      Generate Report
                                    </Button>
                                  </div>
                                </div>
                                <div className="second_s3_table_wrap">
                                  <Table data={tableData} autoHeight rowHeight={70}>
                                    <Column width={50} align="right" verticalAlign='middle'>
                                      <HeaderCell><FaSquare color='#e9f0fd' size={15} /></HeaderCell>
                                      <Cell dataKey="square" />
                                    </Column>

                                    <Column width={50} align="right" verticalAlign='middle'>
                                      <HeaderCell></HeaderCell>
                                      <Cell dataKey="avatar" />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Customer Name</HeaderCell>
                                      <Cell dataKey="name" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Date</HeaderCell>
                                      <Cell dataKey="date" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Amount</HeaderCell>
                                      <Cell dataKey="amount" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={200} verticalAlign='middle'>
                                      <HeaderCell>Email</HeaderCell>
                                      <Cell dataKey="email" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Product ID</HeaderCell>
                                      <Cell dataKey="productId" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Status</HeaderCell>
                                      <Cell dataKey="status" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={150} verticalAlign='middle'>
                                      <HeaderCell>Option</HeaderCell>
                                      <Cell dataKey="option" />
                                    </Column>
                                  </Table>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>           
            </div>
        </div>
    );
}
 
export default SecondSection;