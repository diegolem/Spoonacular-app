import type { RecipeCardArgs } from "../types/types";
import {Button, Card, Col, Image, Space, Typography} from "antd";
import {ZoomInOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const { Text } = Typography;

export const RecipeCard = ({ handleActionDetail, recipe }: RecipeCardArgs) => {
    const { id, image, title } = recipe

    const onActionDetail = () => {
        handleActionDetail(true);
    }

    return (
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
                            onClick={ onActionDetail }
                        >
                            Ver ingredientes
                        </NavLink>
                    </Button>
                </Space>
            </Card>
            <br />
        </Col>
    );
}