import { IRecipeGrid } from "../types/types";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import { Card, Row, Col, Space, Image, Typography, Button } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';
import {NavLink, Outlet, useNavigation} from "react-router-dom";

const { Text } = Typography;

export type { IRecipeGrid } from '../types/types';

export const RecipeGrid = ({ paramSearch }: IRecipeGrid) => {
    const { recipes, isLoading } = useFetchRecipes(paramSearch);
    const navigation = useNavigation();

    return (
        <>
            <h1>{paramSearch}</h1>
            <Row gutter={24}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <div
                                id="detail"
                                className={navigation.state === "loading" ? "loading" : ""}
                            >
                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {recipes.map(({ id, title, image }) => (
                            <Col span={8} style={{ textAlign: "center" }} >
                                <Card
                                    key={id}
                                    style={{ width: 450 }}
                                >
                                    <Image
                                        src={image}
                                    />
                                    <br/>
                                    <br/>
                                    <Space direction="vertical" style={{ width: '100%' }}>
                                        <Text strong>{ title }</Text>
                                        <Button
                                            type="primary"
                                            block
                                            icon={<ZoomInOutlined />}
                                        >
                                            <NavLink
                                                to={`/recipe/${id}`}
                                                className={({ isActive, isPending }) => (
                                                    isActive
                                                    ? "active"
                                                    : isPending
                                                    ? "pending"
                                                    : ""
                                                )}
                                            >
                                                Ver ingredientes
                                            </NavLink>
                                        </Button>
                                    </Space>
                                </Card>
                                <br />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    );
}