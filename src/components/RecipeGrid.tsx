import { IRecipeGrid } from "../types/types";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import {Card, Row, Col, Space, Image, Typography } from 'antd';

const { Text } = Typography;

export type { IRecipeGrid } from '../types/types';

export const RecipeGrid = ({ paramSearch }: IRecipeGrid) => {
    const { recipes, isLoading } = useFetchRecipes(paramSearch);

    return (
        <>
            <h1>{paramSearch}</h1>
            <Row gutter={24}>
                <Space>
                {recipes.map(({ id, title, image, imageType }) => (
                    <Col span={6} >
                        <Card
                            key={id}
                            style={{ width: 350 }}
                        >
                            <Image
                                src={image}
                            />
                            <Text >{ title }</Text>
                        </Card>
                    </Col>
                ))}
                </Space>
            </Row>
        </>
    );
}