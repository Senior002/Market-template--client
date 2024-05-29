import './third.css';
import { Segmented } from 'antd';
import Chart from 'react-apexcharts';
import { BsThreeDots } from 'react-icons/bs';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { MdLogin } from "react-icons/md";
import { Avatar, Button, Select, FloatButton } from 'antd';
import { HeaderCell, Column, Cell } from 'rsuite-table';
import { Table } from 'rsuite';
import facebookLogo from '../../components/pictures/facebook.png';
import twitterLogo from '../../components/pictures/twitter.png';
import pinterestLogo from '../../components/pictures/pinterest.png';
import dribleLogo from '../../components/pictures/drible.png';
import { LuMessageSquare } from "react-icons/lu";
import avatar1 from '../../components/pictures/avatar1.jpg';
import avatar2 from '../../components/pictures/avatar2.png';
import avatar3 from '../../components/pictures/avatar3.webp';
import avatar4 from '../../components/pictures/avatar4.webp';

const ThirdSection = () => {
// segments option
    const segmentOptions = [
        { label: <strong>Daily</strong>, value: 'daily' },
        { label: <strong>Monthly</strong>, value: 'monthly' },
        { label: <strong>Yearly</strong>, value: 'yearly' },
    ];
// first chart options, data, ...
    const historyOptions = {
      chart: {
        type: "line",
        stacked: false,
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#649aff", "#FFE92C"],
      series: [
        {
          name: "Marketing Sales",
          data: [28000, 21890, 23500, 19250, 26200, 24800, 1000, 5190, 21800, 14200, 14900, 8500, 1250, 0]
        },
        {
          name: "Current Sales",
          data: [0, 7000, 3000, 7000, 7005, 17000, 13000, 13500, 6000, 17000, 20000, 15000, 19400, 29000]
        }
      ],
      stroke: {
        width: [4, 4]
      },
      plotOptions: {
        tooltip: {
          enabled: false,
          show: true,
          theme: 'dark',
          shared: false,
          intersect: true,
          x: {
          show: true
          }
      },
      },
      grid: {
        strokeDashArray: 7,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              colors: "#575757"
            }
          },
          title: {
            show: false,
          }
        },
        {
          opposite: false,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          },
          title: {
            show: false,
          }
        }
      ],
      tooltip: {
        show: true,
        theme: 'dark',
        shared: false,
        intersect: true,
        x: {
          show: true
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: "left",
        offsetX: 0
      }
    };

    // summary chart data
  const summaryOptions = {
    series: [
      {
        name: '2021',
        data: [4, 10, 7, 14, 20, 6, 16, 13, 8, 2, 8, 6, 3, 14]
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
        borderRadius: 10,
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
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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

  // for table
  const tableData = [
    {
      avatar: <Avatar size="medium" src={facebookLogo} />,
      name: `Facebook`,
      view: '34,131',
      sales: 521,
      convertion: '10.5%',
      total: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$1,292.00</strong></div>,
      action: <Button className='detail_btn' type="white" shape="round" size='large'>Details</Button>
    },
    {
      avatar: <Avatar size="medium" src={twitterLogo} />,
      name: `Twitter`,
      view: '24,109',
      sales: 328,
      convertion: '8.21%',
      total: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$643.00</strong></div>,
      action: <Button className='detail_btn' type="white" shape="round" size='large'>Details</Button>
    },
    {
      avatar: <Avatar size="medium" src={pinterestLogo} />,
      name: `Pinterest`,
      view: '20,134',
      sales: 301,
      convertion: '6.61%',
      total: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$410.00</strong></div>,
      action: <Button className='detail_btn' type="white" shape="round" size='large'>Details</Button>
    },
    {
      avatar: <Avatar size="medium" src={dribleLogo} />,
      name: `Dribbble`,
      view: '14,018',
      sales: 151,
      convertion: '3.23%',
      total: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$341.00</strong></div>,
      action: <Button className='detail_btn' type="white" shape="round" size='large'>Details</Button>
    },
  ];

    return (
        <div className='forhuge'>
            <div className='wrapper'>
                  <div className="general">
                    <div className="third_seria1">
                      <div className="row first_chart_wrapper">
                            <div className="col-md-10 kolmd10">
                                <div className="section2_header">
                                    <div className="history_txt_place">
                                        <h6 className='history'><strong>History</strong></h6>
                                    </div>
                                    <div className="segment_place">
                                        <Segmented
                                            options={segmentOptions}
                                            defaultValue="yearly"
                                            color='blue'
                                            onChange={(value) => {
                                                // console.log(`Selected value: ${value}`);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="first_chart">
                                  <Chart 
                                    series={historyOptions.series}
                                    options={historyOptions}
                                    type={historyOptions.chart.type || 'line'}
                                    height='400'
                                  />
                                </div>
                            </div>
                      </div>
                      <FloatButton.BackTop />
                    </div>

                    <div className="third_seria2">
                      <div className="row third_seria2_wrapper">
                        <div className="col-md-7 kolmd6">
                          <div className="seria2_header">
                            <div className="header_left">
                              <h6 className='sales_target'><strong>Summary</strong></h6>
                              <h6 className='bottom_txt'>1 May - 14 May, 2021</h6>
                            </div>
                            <div className="header_right">
                              <BsThreeDots className='three_dot'/>
                            </div>
                          </div>
                          <div className="second_seria2_chart_place2" 
                          // style={{height: '200px'}}
                          >
                            <Chart 
                              series={summaryOptions.series}
                              options={summaryOptions}
                              type='bar'
                              height={200}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 kolmd4">
                          <div className="seria2_header">
                            <div className="header_left">
                              <h6 className='sales_target'><strong>Marketing Target</strong></h6>
                              <h6 className='bottom_txt'>1 May - 13 May, 2021</h6>
                            </div>
                            <div className="header_right">
                              <BsThreeDots className='three_dot'/>
                            </div>
                          </div>
                          <div className="circle_pl">
                            <SemiCircleProgressBar className='semi_circle2' percentage={68} showPercentValue stroke='#ffb52e'
                            background='#fff5e3' diameter={250} />
                            <MdLogin className='login_semii' size={23} />
                            <h6 className='semi_target'>4,201 / <span className='anth'>4, 800 target</span></h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="third_seria3">
                      <div className="row second_seria3_wrapper">
                        <div className="col-md-7 second_seria3_table_wrapper" style={{marginRight: '10px'}}>
                          <div className="seria2_header">
                            <div className="header_left">
                              <h6 className='sales_target'><strong>Referrer History</strong></h6>
                              <h6 className='bottom_txt'>890,344 Orders</h6>
                            </div>
                            <div className="header_right">
                              <Select defaultValue='This year' size='large' 
                                style={{marginRight: '15px'}} />
                              <BsThreeDots className='three_dot' />
                            </div>
                          </div>
                          <div className="second_s3_table_wrap">
                            <Table data={tableData} autoHeight rowHeight={70}>

                              <Column width={50} align="right" verticalAlign='middle'>
                                <HeaderCell></HeaderCell>
                                <Cell dataKey="avatar" />
                              </Column>

                              <Column width={150} verticalAlign='middle'>
                                <HeaderCell>Referrer Source</HeaderCell>
                                <Cell dataKey="name" style={{fontWeight: 'bolder'}} />
                              </Column>

                              <Column width={150} verticalAlign='middle'>
                                <HeaderCell>View</HeaderCell>
                                <Cell dataKey="view" style={{fontWeight: 'bolder'}} />
                              </Column>

                              <Column width={150} verticalAlign='middle'>
                                <HeaderCell>Sales</HeaderCell>
                                <Cell dataKey="sales" style={{fontWeight: 'bolder'}} />
                              </Column>

                              <Column width={100} verticalAlign='middle'>
                                <HeaderCell>Convertion</HeaderCell>
                                <Cell dataKey="convertion" style={{fontWeight: 'bolder'}} />
                              </Column>

                              <Column width={100} verticalAlign='middle'>
                                <HeaderCell>Total</HeaderCell>
                                <Cell dataKey="total" style={{fontWeight: 'bolder'}} />
                              </Column>

                              <Column width={150} verticalAlign='middle'>
                                <HeaderCell>Action</HeaderCell>
                                <Cell dataKey="action" />
                              </Column>
                            </Table>
                          </div>
                        </div>
                        <div className="col-md-3 kolmd4">
                          <div className="seria2_header" style={{marginBottom: '25px'}}>
                            <div className="header_left">
                              <h6 className='sales_target'><strong>New Customers</strong></h6>
                              <h6 className='bottom_txt'>890,344 Customers</h6>
                            </div>
                            <div className="header_right">
                              <BsThreeDots className='three_dot' />
                            </div>
                          </div>
                          <div className="customer_body">
                            <div className="customer_left">
                              <Avatar size={60} src={avatar4} />
                            </div>
                            <div className="customer_middle">
                              <h6 className='customer_name'><strong>Mark Osborne</strong></h6>
                              <h6 className='last'><span className='last_invited'>5 mins ago</span></h6>
                            </div>
                            <div className="customer_right" style={{marginLeft: '130px'}}>
                              <LuMessageSquare className='message_icon' size={25} />
                            </div>
                          </div>

                          <div className="customer_body">
                            <div className="customer_left">
                              <Avatar size={60} src={avatar3} />
                            </div>
                            <div className="customer_middle">
                              <h6 className='customer_name'><strong>Alan Perry</strong></h6>
                              <h6 className='last'><span className='last_invited'>42 mins ago</span></h6>
                            </div>
                            <div className="customer_right"  style={{marginLeft: '160px'}}>
                              <LuMessageSquare className='message_icon' size={25} />
                            </div>
                          </div>

                          <div className="customer_body">
                            <div className="customer_left">
                              <Avatar size={60} src={avatar2} />
                            </div>
                            <div className="customer_middle">
                              <h6 className='customer_name'><strong>Ethel Hanson</strong></h6>
                              <h6 className='last'><span className='last_invited'>1 hours ago</span></h6>
                            </div>
                            <div className="customer_right"  style={{marginLeft: '140px'}}>
                              <LuMessageSquare className='message_icon' size={25} />
                            </div>
                          </div>

                          <div className="customer_body">
                            <div className="customer_left">
                              <Avatar size={60} src={avatar1} />
                            </div>
                            <div className="customer_middle">
                              <h6 className='customer_name'><strong>Kate Nash</strong></h6>
                              <h6 className='last'><span className='last_invited'>6 hours ago</span></h6>
                            </div>
                            <div className="customer_right"  style={{marginLeft: '160px'}}>
                              <LuMessageSquare className='message_icon' size={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>           
            </div>
        </div>
    );
}
 
export default ThirdSection;