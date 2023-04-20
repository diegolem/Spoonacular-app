import {Button, Card, Col, Divider, Image, Row, Space, Tag, Typography} from "antd";

import {useLoaderData, useNavigate} from "react-router-dom";
import { getRecipe } from "../helpers/getRecipe";
import { IngredientCard } from "./IngredientCard";
import { InstructionStep } from "./InstructionStep";

import { IRecipe, IIngredient, IInstruction } from "../types/types";
import {ArrowLeftOutlined} from "@ant-design/icons";

const { Text, Title } = Typography;

export const loader = async ({ params }: any | null) => {
    const { recipeId } = params;
    const recipe: IRecipe = await getRecipe(recipeId);

    return { recipe };
}

export const RecipeDetail = () => {
    const { recipe }: any = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <Row>
                <Col span={24}>
                    <Button
                        type={"primary"}
                        icon={<ArrowLeftOutlined />}
                        onClick={(ev) => navigate(-1)}
                    >
                        Regresar
                    </Button>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            { recipe && (
                                <Card
                                    key={recipe.id}
                                    title={<Title level={2}>{recipe.title}</Title>}
                                >
                                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                        <Row justify="center" align="top">
                                            <Col span={6}>
                                                <Image
                                                    width={400}
                                                    src={recipe.image}
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={12}>
                                                <Title
                                                    type={"success"} level={5}>Ready in {recipe.readyInMinutes} minutes
                                                </Title>
                                                <Text
                                                    type={"secondary"}>Servings: {recipe.servings}
                                                </Text>
                                            </Col>
                                            <Col span={12}>
                                                <Title type={"secondary"} level={5}>Dish types</Title>
                                                { recipe.dishTypes.map((dishType: string) => <Tag key={dishType} color={"geekblue"}>{dishType}</Tag>)}
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={24}>
                                                <Space direction={"horizontal"} size={"middle"}>
                                                    <Row>
                                                        { recipe.extendedIngredients.map((ingredient: IIngredient) => <IngredientCard key={ingredient.id} { ...ingredient } />) }
                                                    </Row>
                                                </Space>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={24}>
                                                <Divider>Summary</Divider>
                                                <Text>
                                                    <div dangerouslySetInnerHTML={{__html: recipe.summary}}></div>
                                                </Text>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={24}>
                                                <Divider>Instructions</Divider>
                                                { recipe.analyzedInstructions.map((values: any) => values.map((instruction: IInstruction) =>
                                                    <InstructionStep key={instruction.order} {...instruction} />)) }
                                            </Col>
                                        </Row>
                                    </Space>
                                </Card>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}