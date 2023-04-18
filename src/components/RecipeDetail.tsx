import {Button, Col, Row, Typography } from "antd";

import { useNavigate, useLoaderData } from "react-router-dom";

import { ArrowLeftOutlined } from "@ant-design/icons";
import {useFetchRecipeInformation} from "../hooks/useFetchRecipeInformation";

const { Text } = Typography;

export const loader = ({ params }: any | null) => {
    const { recipeId } = params;
    return { recipeId };
}

export const RecipeDetail = () => {
    const navigate = useNavigate();
    const { recipeId }: any = useLoaderData();

    const { recipe } = useFetchRecipeInformation(recipeId);

    console.log(recipe);

    return (
        <>
            <Row>
                <Col span={24}>
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