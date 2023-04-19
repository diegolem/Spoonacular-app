import type {
    IIngredient
} from "../types/types";
import {Card, Col, Image, Space, Typography} from "antd";

const { Text, Title } = Typography;

export const IngredientCard = ({ id, originalName, quantity, image, unit, unitMeasure }: IIngredient) => {
    return (
        <>
            <Col
                style={{ padding: '5px' }}
            >
                <Card
                    key={id}
                    style={{ width: 200 }}
                >
                    <Image
                        src={`https://spoonacular.com/recipeImages/${image}`}
                    />
                    <br/>
                    <Title type={"secondary"} level={5}>{ originalName }</Title>
                    <Text>Unit: {unit}</Text>
                </Card>
            </Col>
        </>
    );
}