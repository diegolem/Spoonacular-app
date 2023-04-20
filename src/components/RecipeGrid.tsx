import { useFetchRecipes } from "../hooks/useFetchRecipes";
import {Row, Col, Divider, Space} from 'antd';
import { useNavigation } from "react-router-dom";
import { RecipeCard } from "./RecipeCard";

import {IRecipe, IRecipeGrid} from "../types/types";

export const RecipeGrid = ({ paramSearch }: IRecipeGrid) => {
    const { recipes } = useFetchRecipes(paramSearch);

    return (
        <>
            <Row>
                <Col span={24}>
                    <Divider>{paramSearch}</Divider>
                    <Row>
                        <Col span={24}>
                            <Space direction={"horizontal"} size={"middle"}>
                                <Row justify={"center"}>
                                    {recipes.map((recipe: IRecipe) => (
                                        <RecipeCard
                                            key={recipe.id}
                                            recipe={recipe}
                                        />
                                    ))}
                                </Row>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}