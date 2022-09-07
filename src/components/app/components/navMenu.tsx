import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import routemap from '../../conf/routemap';

const { SubMenu } = Menu;

const NavMenu: React.FC<any> = (props) => {
    const navigate = useNavigate();
    const handleClick = (e:any) => {
        console.log('click ', e);
        const { selectedKeys, systemKey, eleKey, varType } = props;
        const { keyPath, key } = e;
        if (selectedKeys[0] !== key) {
            let path = `/app/${keyPath[keyPath.length - 1]}?systemKey=${systemKey}`;
            if (keyPath.length === 2) {
                path = `/app/${keyPath[keyPath.length - 1]}#${
                    keyPath[keyPath.length - 2]
                }?systemKey=${systemKey}`;
                if (systemKey !== eleKey && eleKey !== '') {
                    path += `&&eleKey=${eleKey}`;
                }
                if (keyPath[keyPath.length - 1] === 'info') {
                    path = `/app/${keyPath[keyPath.length - 1]}?systemKey=${
                        keyPath[keyPath.length - 2]
                    }`;
                }
            }
            if (varType) {
                path += `&&varType=${varType}`;
            }
            navigate(path);
        }
    };
    const getMenuItem = (data:any) => {
        return data.map((item:any) => {
            const key = item.key;
            if (item.childNav?.length > 0) {
                return (
                    <SubMenu key={key} title={item.title}>
                        {getMenuItem(item.childNav)}
                    </SubMenu>
                );
            }
            return <Menu.Item key={key}>{item.title}</Menu.Item>;
        });
    };
    const { selectedKeys } = props;
    const { menuArr } = routemap;
    const menuItem = getMenuItem(menuArr);
    return (
        <Menu mode="horizontal" selectedKeys={selectedKeys} onClick={handleClick}>
            <Menu.Item key={'home'}>首页</Menu.Item>
            {menuItem}
        </Menu>
    );
};

export default NavMenu;
