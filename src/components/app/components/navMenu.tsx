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
    const getMenuItems = (data:any,isChild?:boolean) => {
        const items:any[]=[];
        if(!isChild){
            items.push({
                label:"首页",
                key:'home'
            });
        }
        for(let i=0;i<data.length;i++){
            const item=data[i];
            let children:any=null;
            let obj:any={
                label:item.title,
                key:item.key
            }
            if (item.childNav?.length > 0) {
                children=getMenuItems(item.childNav,true)
                obj={
                    ...obj,
                    children
                }
            }
            items.push(obj)
        }
       return items;
    };
    const { selectedKeys } = props;
    const { menuArr } = routemap;
    const menuItems = getMenuItems(menuArr);
    console.log(menuItems)
    return (
       <Menu onClick={handleClick} selectedKeys={[selectedKeys]} mode="horizontal" items={menuItems} />
    );
};

export default NavMenu;
