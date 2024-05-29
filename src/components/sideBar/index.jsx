import './sideBar.css';
import { RiApps2Line } from "react-icons/ri";
import { BiPieChartAlt2 } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";
import { PiBagSimpleLight } from "react-icons/pi";
import { LiaChartAreaSolid } from "react-icons/lia";
import { IoDocumentOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { TfiSettings } from "react-icons/tfi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import { Icon } from '@rsuite/icons';
import creditCard from '../pictures/credit_cards_logo.jpg';

const SideBar = () => {

    const [refresh, setRefresh] = useState(0);
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('1');
    // const [openKeys, setOpenKeys] = useState(['3', '4']);
    const [expanded, setExpand] = useState(false);

    const tap = () => {
        navigate('/');
        setRefresh(refresh + 1);
    }
    
    useEffect(() => {
        
    }, [refresh]);

    const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
        return (
            <Sidenav
              appearance={appearance}
              expanded={expanded}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              className='side_nav_own'
              push
            >
              <Sidenav.Body>
                <Nav {...navProps}>
                  <Nav.Item eventKey="1" onClick={() => tap()}>
                    <img className='sidebar_logo' src={creditCard} alt="0" />
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" onClick={() => navigate('/')} icon={<Icon as={RiApps2Line} color='#649aff' />}>
                    Apps Overview
                  </Nav.Item>
                  <Nav.Item eventKey="3" onClick={() => navigate('/second')} icon={<Icon as={BiPieChartAlt2} color='#649aff' />}>
                    Analystics
                  </Nav.Item>
                  <Nav.Item eventKey="4" onClick={() => navigate('/third')} icon={<Icon as={CiWallet} color='#649aff' />}>
                    Charges
                  </Nav.Item>
                  <Nav.Item eventKey="5" icon={<Icon as={PiHandbagThin} color='#649aff' />}>
                    Invoices
                  </Nav.Item>
                  <Nav.Item eventKey="6" icon={<Icon as={PiBagSimpleLight} color='#649aff' />}>
                    Expenses
                  </Nav.Item>
                  <Nav.Item eventKey="7" icon={<Icon as={LiaChartAreaSolid} color='#649aff' />}>
                    Charts
                  </Nav.Item>
                  <Nav.Item eventKey="8" icon={<Icon as={IoDocumentOutline} color='#649aff' />}>
                    Docs
                  </Nav.Item>
                  <Nav.Item eventKey="9" icon={<Icon as={RxPerson} color='#649aff' />}>
                    Personal
                  </Nav.Item>
                  <Nav.Item eventKey="10" icon={<Icon as={FaRegEnvelope} color='#649aff' />}>
                    Messages
                  </Nav.Item>
                  <Nav.Item eventKey="11" icon={<Icon as={FaRegFolder} color='#649aff' />}>
                    Folders
                  </Nav.Item>
                  <Nav.Item eventKey="12" icon={<Icon as={TfiSettings} color='#649aff' />}>
                    Settings
                  </Nav.Item>
                </Nav>
              </Sidenav.Body>
              <Sidenav.Toggle onToggle={onExpand} style={{backgroundColor: 'transparent'}} />
            </Sidenav>
        );
    };

    return (
        <CustomSidenav
          activeKey={activeKey}
          // openKeys={openKeys}
          onSelect={setActiveKey}
          // onOpenChange={setOpenKeys}
          expanded={expanded}
          onExpand={setExpand}
          appearance='subtle'
          push
        />
    );
}
 
export default SideBar;