import { Card, Col, Image, Typography } from "antd";

import type { IIngredient } from "../types/types";

const { Text, Title } = Typography;

export const IngredientCard = ({ originalName, image, unit }: IIngredient) => (
    <Col style={{ padding: '5px' }} >
        <Card style={{ width: 200 }} >
            <Image src={`https://spoonacular.com/recipeImages/${image}`} />
            <br/>
            <Title type={"secondary"} level={5}>{ originalName }</Title>
            <Text>Unit: {unit}</Text>
        </Card>
    </Col>
)