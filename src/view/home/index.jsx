import './home.css';
import { BiArrowToTop } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { LiaDotCircle } from "react-icons/lia";
import { PiHandbagThin } from "react-icons/pi";
import { Segmented, Progress, Avatar, FloatButton, Tag } from 'antd';
import { Table } from 'rsuite';
import { HeaderCell, Column, Cell } from 'rsuite-table';
import Chart from 'react-apexcharts';

const Home = () => {

    const options1 = [
        { label: <strong>Daily</strong>, value: 'daily' },
        { label: <strong>Monthly</strong>, value: 'monthly' },
        { label: <strong>Yearly</strong>, value: 'yearly' },
    ];

    const options = {
        chart: {
          type: "line",
          stacked: false,
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#649aff", "#FFE92C"],
        series: [
          {
            name: "Current Clients",
            data: [0, 17000, 19000, 23000, 20000, 15300, 22800, 30000, 40000, 42200, 44800]
          },
          {
            name: "Subscriber",
            data: [0, 12000, 13000, 17000, 12500, 10000, 15000, 19000, 20000, 22000, 25000]
          }
        ],
        stroke: {
          curve: 'stepline',
          strokeWidth: 2,
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
        tooltip: {
            theme: 'dark',
        },
        grid: {
          strokeDashArray: 7,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            min: 0,
            max: 45000,
        },
        legend: {
          position: 'top',
          horizontalAlign: "left",
          offsetX: 0
        }
    };

      // for table
    const tableData = [
        {
            avatar: <Avatar size="medium" src='./avatar1.jpg' />,
            name: `Matilda Cook`,
            product: 'CaAll Dash',
            amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$129.00</strong></div>,
            vendor: 'Company Inc.',
            status: <Tag color='success' style={{borderRadius: '20px'}}>Paid</Tag>,
            rate: <div><strong>5.0</strong> <span className='vote' style={{color: 'rgb(128, 128, 128)'}}>(120 votes)</span></div>
        },
        {
            avatar: <Avatar size="medium" src='./avatar2.jpg' />,
            name: `Jorge Neal`,
            product: 'CaDas Dash',
            amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$19.00</strong></div>,
            vendor: 'CaDesign',
            status: <Tag color='error' style={{borderRadius: '20px'}}>Unpaid</Tag>,
            rate: <div><strong>4.4</strong> <span className='vote' style={{color: 'rgb(128, 128, 128)'}}>(1.2k votes)</span></div>
        },
        {
            avatar: <Avatar size="medium" src='./avatar3.png' />,
            name: `Nora Andrews`,
            product: 'CaMo UI Kit',
            amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$49.00</strong></div>,
            vendor: '3D Artist',
            status: <Tag color='success' style={{borderRadius: '20px'}}>Paid</Tag>,
            rate: <div><strong>4.0</strong> <span className='vote' style={{color: 'rgb(128, 128, 128)'}}>(354 votes)</span></div>
        },
        {
            avatar: <Avatar size="medium" src='./avatar4.webp' />,
            name: `Lena Shaw`,
            product: 'CaWe Dash',
            amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$99.00</strong></div>,
            vendor: 'CaDesign',
            status: <Tag color='error' style={{borderRadius: '20px'}}>Unpaid</Tag>,
            rate: <div><strong>3.2</strong> <span className='vote' style={{color: 'rgb(128, 128, 128)'}}>(3.4k votes)</span></div>
        },
        {
            avatar: <Avatar size="medium" src='./avatar5.png' />,
            name: `Henry Silva`,
            product: 'CaLan Landing',
            amount: <div style={{color: 'rgb(0, 177, 0)'}}><strong>$29.00</strong></div>,
            vendor: 'Company Inc.',
            status: <Tag color='success' style={{borderRadius: '20px'}}>Paid</Tag>,
            rate: <div><strong>4.8</strong> <span className='vote' style={{color: 'rgb(128, 128, 128)'}}>(241 votes)</span></div>
        },
    ];

    return (
        <>
            <div className='forhuge'>
            <div className='wrapper'>
                <div className="general">
                    <div className="home_series1">
                        <div className="row profit_cards">
                            <div className="col-md-2 bir">
                                <div className="iconka_wrap">
                                    <div className="iconka_body">
                                        <BiArrowToTop className='to_top'  size={25}/>
                                    </div>
                                </div>
                                <div className="some_txt">
                                    <div className="big_income">
                                        <h3 className='income'><strong>$6,325.00</strong></h3>
                                    </div>
                                    <div className="percent_of_profit">
                                        <div className="small_txt">
                                            <h6 className='sale_increases'>Sale Increases</h6>
                                        </div>
                                        <div className="percent_pl">
                                            <h6 className='percent'><strong>+7,24 %</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 bir">
                                <div className="iconka_wrap">
                                    <div className="iconka_body">
                                        <BiArrowToTop className='to_top'  size={25}/>
                                    </div>
                                </div>
                                <div className="some_txt">
                                    <div className="big_income">
                                        <h3 className='income'><strong>$4,660.00</strong></h3>
                                    </div>
                                    <div className="percent_of_profit">
                                        <div className="small_txt">
                                            <h6 className='sale_increases'>Expenses</h6>
                                        </div>
                                        <div className="percent_pl">
                                            <h6 className='percent'><strong>+9,20 %</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 bir">
                                <div className="iconka_wrap">
                                    <div className="iconka_body">
                                        <BiArrowFromTop className='to_top'  size={25}/>
                                    </div>
                                </div>
                                <div className="some_txt">
                                    <div className="big_income">
                                        <h3 className='income'><strong>$62,917</strong></h3>
                                    </div>
                                    <div className="percent_of_profit">
                                        <div className="small_txt">
                                            <h6 className='sale_increases'>New Visitors</h6>
                                        </div>
                                        <div className="percent_pl">
                                            <h6 className='percent'><strong>-10,53 %</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 bir">
                                <div className="iconka_wrap">
                                    <div className="iconka_body">
                                        <BiArrowToTop className='to_top'  size={25}/>
                                    </div>
                                </div>
                                <div className="some_txt">
                                    <div className="big_income">
                                        <h3 className='income'><strong>$2,134</strong></h3>
                                    </div>
                                    <div className="percent_of_profit">
                                        <div className="small_txt">
                                            <h6 className='sale_increases'>New Customers</h6>
                                        </div>
                                        <div className="percent_pl">
                                            <h6 className='percent'><strong>+82,3 %</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_series2">
                        <div className="row first_chart_wrapper">
                            <div className="col-md-10 kolmd10">
                                <div className="section2_header">
                                    <div className="history_txt_place">
                                        <h6 className='history'><strong>History</strong></h6>
                                    </div>
                                    <div className="segment_place">
                                    <Segmented
                                        options={options1}
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
                                        series={options.series}
                                        options={options}
                                        type='line'
                                        height='400'
                                    />
                                </div>
                            </div>
                        </div>
                        <FloatButton.BackTop />
                    </div>
                    <div className="home_series3">
                        <div className="row charge_wrapper">
                            <div className="col-md-10 kolmd10">
                                <div className="seria3_header">
                                    <div className="seria3_left">
                                        <h6><strong>Sale Stats</strong></h6>
                                        <h6 className='bottom_txt'>1 May - 13 May, 2021</h6>
                                    </div>
                                    <div className="seria3_right">
                                        <BsThreeDots className='three_dot'/>
                                    </div>
                                </div>
                                <div className="seria3_charges_place">
                                    <div className="charges_box1">
                                        <Progress className='primary_circle' size={150} 
                                         type="circle" 
                                        percent={75} format={() => <PiHandbagThin className='seria3_handbag' />} />
                                        <h6 className='charges_percent'><strong>75%</strong></h6>
                                        <h6 className='charge_small_txt'>in total shop sales</h6>
                                    </div>
                                    <div className="charges_box2">
                                        <Progress className='yellow_circle' size={150} type="circle"
                                        percent={25} format={() => '@'} />
                                        <h6 className='charges_percent'><strong>25%</strong></h6>
                                        <h6 className='charge_small_txt'>in marketing sales</h6>
                                    </div>
                                    <div className="charges_box3">
                                        <Progress className='green_circle' size={150} type="circle"
                                        percent={50} format={() => <LiaDotCircle className='seria3_shoot' />} />
                                        <h6 className='charges_percent'><strong>50%</strong></h6>
                                        <h6 className='charge_small_txt'>in compaign sales</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_series4">
                        <div className="row status_tables_wrap">
                            <div className="col-md-6 statis_table">
                                <div className="seria2_header">
                                    <div className="header_left">
                                        <h6 className='sales_target'><strong>Orders</strong></h6>
                                        <h6 className='bottom_txt'>890,344 Orders</h6>
                                    </div>
                                    <div className="header_right">
                                        <BsThreeDots className='three_dot' />
                                    </div>
                                </div>
                                <Table data={tableData} autoHeight rowHeight={70}>
                                    <Column width={50} align="right" verticalAlign='middle'>
                                        <HeaderCell></HeaderCell>
                                        <Cell dataKey="avatar" />
                                    </Column>

                                    <Column width={100} verticalAlign='middle'>
                                        <HeaderCell>Customer</HeaderCell>
                                        <Cell dataKey="name" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={110} verticalAlign='middle'>
                                        <HeaderCell>Product</HeaderCell>
                                        <Cell dataKey="product" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={100} verticalAlign='middle'>
                                        <HeaderCell>Amount</HeaderCell>
                                        <Cell dataKey="amount" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={100} verticalAlign='middle'>
                                        <HeaderCell>Vendor</HeaderCell>
                                        <Cell dataKey="vendor" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={100} verticalAlign='middle'>
                                        <HeaderCell>Status</HeaderCell>
                                        <Cell dataKey="status" style={{fontWeight: 'bolder'}} />
                                    </Column>

                                    <Column width={100} verticalAlign='middle'>
                                        <HeaderCell>Rate</HeaderCell>
                                        <Cell dataKey="rate" />
                                    </Column>
                                </Table>
                            </div>
                            <div className="col-md-4 statis_table2">
                                <div className="seria3_header">
                                    <div className="seria3_left">
                                        <h6><strong>Impressions by Country</strong></h6>
                                        <h6 className='bottom_txt'>890.344 Country</h6>
                                    </div>
                                    <div className="seria3_right">
                                        <BsThreeDots className='three_dot'/>
                                    </div>
                                </div>

                                <div className="statis_table2_body">
                                    <div className="un_states_wrap">
                                        <Avatar src='./flag1.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>United States</strong></h6>
                                                <h6 className='flag_number'>110,001</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="un_kingdom_wrap">
                                        <Avatar src='./flag2.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>United Kingdom</strong></h6>
                                                <h6 className='flag_number'>99,120</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vietnam_wrap">
                                        <Avatar src='./flag3.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>Vietnam</strong></h6>
                                                <h6 className='flag_number'>84,918</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="germany_wrap">
                                        <Avatar src='./flag4.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>Germany</strong></h6>
                                                <h6 className='flag_number'>76,612</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="france_wrap">
                                        <Avatar src='./flag5.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>France</strong></h6>
                                                <h6 className='flag_number'>40,761</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="brazil_wrap">
                                            <Avatar src='./flag6.png' size={50} />
                                        <div className="flag_info_place">
                                            <div className="flag_name_place">
                                                <h6 className='flag_name'><strong>Brazil</strong></h6>
                                                <h6 className='flag_number'>21,089</h6>
                                            </div>
                                            <div className="flags_progress">
                                                <Progress percent={80} showInfo={false} status='active' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
        </>
    );
}
 
export default Home;