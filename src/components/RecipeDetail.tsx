import {Button, Col, Row, Typography } from "antd";

import {redirect, useNavigate} from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";

const { Text } = Typography;

export async function action(recipeId: number){
    return redirect(`/recipe/${recipeId}`);
}

export const RecipeDetail = () => {
    const navigate = useNavigate();

    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Button
                                type={"primary"}
                                icon={<ArrowLeftOutlined />}
                                onClick={() => { navigate(-1); }}
                            >
                                Regresar
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Text>Prueba de detalle</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}