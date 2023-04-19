import {IRecipe, IRecipeGrid} from "../types/types";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import {Row, Col, Button, Typography, Divider, Space} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import { Outlet, useNavigation} from "react-router-dom";
import {RecipeCard} from "./RecipeCard";

const { Text, Title } = Typography;

export type { IRecipeGrid } from '../types/types';

export const RecipeGrid = ({ paramSearch, handleActionDetail, lookingDetail }: IRecipeGrid) => {
    const { recipes, isLoading } = useFetchRecipes(paramSearch);
    const navigation = useNavigation();

    return (
        <>
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
                                <Space>
                                    <div
                                        id="detail"
                                        className={navigation.state === "loading" ? "loading" : ""}
                                    >
                                        <Outlet />
                                    </div>
                                </Space>
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