import {Button, Col, Row, Typography } from "antd";

import { useNavigate, useLoaderData } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const loader = ({ params }: any) => {
    console.log(params.recipeId);

    return null;
}

export const RecipeDetail = () => {
    const navigate = useNavigate();

    //const { recipe } = useLoaderData();

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