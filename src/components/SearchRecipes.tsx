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
                <Card title="Buscar recetas">
                    <Form
                        form={ form }
                        layout="vertical"
                        name="frmSearch"
                        requiredMark={ false }
                        onFinish={ (v) => void handleFinish(v) }
                    >
                        <Item
                            label={ 'Ingresa un parametro de búsqueda' }
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