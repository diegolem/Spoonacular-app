import { Form, Row, Col, Card, Input } from 'antd';

const { useForm, Item } = Form;

import type {
    ISearchForm,
    ISearchRecipe
} from '../types/types';

export const SearchRecipes = ( { onSearch } : ISearchRecipe ) => {
    const [form] = useForm<ISearchForm>();

    const handleFinish = async (values: ISearchForm) => {
        const { query } = values;
        const queryParam = query.trim();

        onSearch(queryParam);
    }

    return (
        <Row>
            <Col span={24}>
                <Card>
                    <Form
                        form={ form }
                        layout="vertical"
                        name="frmSearch"
                        requiredMark={ false }
                        onFinish={ (v) => void handleFinish(v) }
                    >
                        <Item
                            label={ 'Ingresa el nombre de una receta' }
                            name={ 'query' }
                        >
                            <Input
                                placeholder={"Pasta, Sopa, Carne..."}
                                type="text"
                            />
                        </Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}