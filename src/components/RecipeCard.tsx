import { Button, Card, Col, Image, Space, Typography } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import type { RecipeCardArgs } from "../types/types";

const { Text } = Typography;

export const RecipeCard = ({ recipe }: RecipeCardArgs) => {
    const { id, image, title } = recipe

    return (
        <Col style={{ padding: '10px 2% 10px 2%' }}>
            <Card key={id}>
                <Space direction="vertical" size={"middle"} style={{ width: '100%' }}>
                    <Image src={image} />
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Text strong>{ title }</Text>
                        <Button
                            type="primary"
                            block
                            icon={<ZoomInOutlined />}
                        >
                            <NavLink to={`${id}`} >Ver ingredientes</NavLink>
                        </Button>
                    </Space>
                </Space>
            </Card>
        </Col>
    );
}