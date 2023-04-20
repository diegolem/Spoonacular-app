import { CSSProperties, useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
import {NavLink, Outlet} from "react-router-dom";

const headerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    fontSize: '24px',
    paddingInline: 50,
    lineHeight: '64px'
};

const contentStyle: CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px'
};

export const ContentLayout = () => {
    const [isLooking, setIsLooking] = useState<boolean>();

    return (
        <Layout>
            <Header style={headerStyle}>
                <NavLink to={"recipes"} style={{ color: '#FFF' }}>
                    Spoonacular - App
                </NavLink>
            </Header>
            <Content style={contentStyle}>
                <Outlet />
            </Content>
        </Layout>
    );
}