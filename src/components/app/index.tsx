import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, Alert } from 'antd';
import '@/phm/css/index.less';
import './css/index.less';
import NavMenu from './components/navMenu';
import FilterComponent from '@/phm/components/common/filterComponent';
const { Header, Content } = Layout;
const Main: React.FC = (props: any) => {
    const location = useLocation();
    const { currentKey } = props;
    const { pathname, hash, search } = location;
    useEffect(() => {
        console.log(`effect--------1`)
        props.getCurrent();
    },[pathname, hash, search]);
    return (
        <div className={'app-main'}>
            <Layout>
                <Header>
                    <NavMenu
                        {...props}
                        selectedKeys={[props.currentKey]}
                        getCurrent={props.getCurrent}
                    />
                </Header>
                <Content className="site-layout">
                    <Alert
                        message="牵引电机出现s级故障，建议及时检测处理，已发送报警给William"
                        showIcon
                        type="warning"
                        closable
                    />
                    <div className="site-layout-background">
                        {/* {(currentKey === 'monitor' ||
                            currentKey === 'fault' ||
                            currentKey === 'forecast') && <FilterComponent {...props} />} */}
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </div>
    );
};
export default Main;
