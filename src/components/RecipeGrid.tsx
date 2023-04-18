import {IRecipe, IRecipeGrid} from "../types/types";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import { Row, Col, Button } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import { Outlet, useNavigation} from "react-router-dom";
import {RecipeCard} from "./RecipeCard";

export type { IRecipeGrid } from '../types/types';

export const RecipeGrid = ({ paramSearch, handleActionDetail, lookingDetail }: IRecipeGrid) => {
    const { recipes, isLoading } = useFetchRecipes(paramSearch);
    const navigation = useNavigation();

    return (
        <>
            <h1>{paramSearch}</h1>
            <Row gutter={24}>
                <Col span={24}>
                    { lookingDetail ? (
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                        <Button
                                            type={"primary"}
                                            icon={<ArrowLeftOutlined />}
                                            onClick={ev => handleActionDetail(false)}
                                        >
                                            Regresar
                                        </Button>
                                    </Col>
                                </Row>
                                <div
                                    id="detail"
                                    className={navigation.state === "loading" ? "loading" : ""}
                                >
                                    <Outlet />
                                </div>
                            </Col>
                        </Row>
                        ) : (
                        <Row>
                            {recipes.map((recipe: IRecipe) => (
                                <RecipeCard
                                    key={recipe.id}
                                    handleActionDetail={handleActionDetail}
                                    recipe={recipe}
                                />
                            ))}
                        </Row>
                        )
                    }
                </Col>
            </Row>
        </>
    );
}