import type {
    IInstruction
} from "../types/types";
import {Badge, Card, Col, Row, Space, Tag, Typography} from "antd";

const { Text, Title } = Typography;

export const InstructionStep = ({ equipment, ingredients, order, step }: IInstruction) =>
    (
        <Space direction={"horizontal"} size={"middle"} style={{ padding: '10px' }}>
            <Badge.Ribbon text={order}>
                <Card title={step}>
                    <Space direction={"vertical"} size={"middle"}>
                        { ingredients.length > 0 && (
                            <Row>
                                <Col span={24}>
                                    <Space size={"small"}>
                                        <Text>Ingredients to use</Text>
                                        {ingredients.map(ingredient => <Tag color={"purple"}>{ingredient}</Tag>)}
                                    </Space>
                                </Col>
                            </Row>
                        )}

                        { equipment.length > 0 && (
                            <Row>
                                <Col span={24}>
                                    <Space size={"small"}>
                                        <Text>Equipment to use</Text>
                                        {equipment.map(equip => <Tag color={"volcano"}>{equip}</Tag>)}
                                    </Space>
                                </Col>
                            </Row>
                        )}
                    </Space>
                </Card>
            </Badge.Ribbon>
        </Space>
    )