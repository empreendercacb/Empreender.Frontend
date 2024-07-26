import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { FormItem, FormContainer } from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import DatePicker from '@/components/ui/DatePicker';
import ApiService from '@/services/ApiService';
import { AxiosResponse } from 'axios';
import { Usuario } from '@/@types/generalTypes';
import moment from 'moment';

interface Anexo {
    file: File;
    descricao: string;
}

interface AnexoDisplay {
    id: number;
    nome: string;
    nome_arquivo: string;
    descricao: string;
}

const EditMarcoCriticoForm = ({ onClose, marcoId, entidadeId, onUpdate }: { onClose: () => void, marcoId: number, entidadeId: string, onUpdate: () => void }) => {
    const [initialValues, setInitialValues] = useState({
        tipo_marco_critico: '',
        nome_marco_critico: '',
        descricao: '',
        responsavel: '',
        dataPrevista: null,
        novaDataPrevista: null,
        dataEncerramento: null,
        novaDataEncerramento: null,
        entidadeId: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const validationSchema = Yup.object().shape({
        tipo_marco_critico: Yup.string().required('Selecione um tipo de marco crítico'),
        nome_marco_critico: Yup.string().nullable(),
        descricao: Yup.string().nullable(),
        responsavel: Yup.string().required('Selecione um usuário responsável'),
        dataPrevista: Yup.date().nullable(),
        novaDataPrevista: Yup.date().nullable(),
        dataEncerramento: Yup.date().nullable(),
        novaDataEncerramento: Yup.date().nullable(),
    });

    const [usuarios, setUsuarios] = useState<{ value: string, label: string }[]>([]);
    const [marcosCriticos, setMarcosCriticos] = useState<{ value: string, label: string }[]>([]);
    const [showNomeMarcoCritico, setShowNomeMarcoCritico] = useState(false);
    const [anexosExistentes, setAnexosExistentes] = useState<AnexoDisplay[]>([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response: AxiosResponse = await ApiService.fetchData({
                    url: '/usuarios-ativos',
                    method: 'get',
                });

                if (response.data) {
                    const usuariosOptions = response.data.map((usuario: Usuario) => ({
                        value: usuario.nucpf,
                        label: usuario.nmusuario,
                    }));
                    setUsuarios(usuariosOptions);
                }
            } catch (error) {
                console.error('Erro ao buscar usuários ativos:', error);
            }
        };

        const fetchMarcosCriticosPadrao = async () => {
            try {
                const response: AxiosResponse<any[]> = await ApiService.fetchData({
                    url: '/representatividade/listar-marco-critico-padrao',
                    method: 'get',
                    params: { entidadeId }
                });

                if (response.data) {
                    const marcosOptions = response.data.map((marco: any) => ({
                        value: String(marco.id),
                        label: marco.nome,
                    }));
                    marcosOptions.push({ value: 'outros', label: 'Outros' });
                    setMarcosCriticos(marcosOptions);
                }
            } catch (error) {
                console.error('Erro ao buscar marcos críticos:', error);
            }
        };

        const fetchMarcoCritico = async () => {
            try {
                const response: AxiosResponse<any> = await ApiService.fetchData({
                    url: `/representatividade/marco-critico/${marcoId}`,
                    method: 'get',
                });

                if (response.data) {
                    // Set initial values
                    setInitialValues({
                        tipo_marco_critico: String(response.data.relacao_1), // Converte o ID para string
                        nome_marco_critico: response.data.nome_marco_critico,
                        descricao: response.data.descricao_marco_critico,
                        responsavel: response.data.responsavel,
                        dataPrevista: response.data.data_prevista,
                        novaDataPrevista: response.data.nova_data_prevista,
                        dataEncerramento: response.data.data_encerramento,
                        novaDataEncerramento: response.data.nova_data_encerramento,
                        entidadeId: response.data.relacao_2,
                    });

                    if (response.data.tipo_marco_critico === 'outros') {
                        setShowNomeMarcoCritico(true);
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar marco crítico:', error);
            }
        };

        const fetchAnexos = async () => {
            try {
                const response: AxiosResponse<any> = await ApiService.fetchData({
                    url: `/representatividade/marco-critico/${marcoId}/anexos`,
                    method: 'get',
                });
                setAnexosExistentes(response.data);
            } catch (error) {
                console.error('Erro ao buscar anexos:', error);
            }
        };

        fetchUsuarios();
        fetchMarcosCriticosPadrao();
        fetchMarcoCritico();
        fetchAnexos();
    }, [marcoId]);


    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            await ApiService.fetchData({
                url: `/representatividade/atualizar-marco-critico/${marcoId}`,
                method: 'put',
                data: values
            });
            // toast.push(SuccessNotification);
            onClose();
            onUpdate();
        } catch (error) {
            // toast.push(ErrorNotification);
            console.error('Erro ao atualizar marco crítico:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const toggleEdit = () => setIsEditing(!isEditing);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, touched, errors, values }) => (
                <Form>
                    <h5 className="mb-4">{isEditing ? "Editar" : "Visualizar"} marco crítico</h5>
                    <FormContainer>
                        {/* <div className="max-h-96 overflow-y-auto"> */}

                            <div className={isEditing ? "" : "grid grid-cols-2 gap-4"}>

                                <FormItem
                                    label="Tipo de marco crítico"
                                    invalid={errors.tipo_marco_critico && touched.tipo_marco_critico}
                                    errorMessage={errors.tipo_marco_critico}
                                >
                                    {isEditing ? (
                                        <Field name="tipo_marco_critico">
                                            {({ field, form }: FieldProps) => (
                                                <Select
                                                    field={field}
                                                    form={form}
                                                    placeholder="Selecione o tipo de marco crítico"
                                                    options={marcosCriticos}
                                                    value={marcosCriticos.find(option => option.value === field.value)}
                                                    onChange={(option) => {
                                                        form.setFieldValue(
                                                            field.name,
                                                            option?.value
                                                        );
                                                        setShowNomeMarcoCritico(option?.value === 'outros');
                                                        if (option?.value !== 'outros') {
                                                            form.setFieldValue('nome_marco_critico', '');
                                                        }
                                                    }}
                                                    isDisabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    ) : (
                                        <div>{marcosCriticos.find(option => option.value === values.tipo_marco_critico)?.label || 'Selecione o tipo de marco crítico'}</div>
                                    )}
                                </FormItem>

                                {showNomeMarcoCritico && (
                                    <FormItem
                                        label="Nome do Marco Crítico Personalizado"
                                        invalid={errors.nome_marco_critico && touched.nome_marco_critico}
                                        errorMessage={errors.nome_marco_critico}
                                    >
                                        {isEditing ? (
                                            <Field
                                                autoComplete="off"
                                                name="nome_marco_critico"
                                                placeholder="Nome do Marco Crítico Personalizado"
                                                component={Input}
                                                readOnly={!isEditing}
                                            />
                                        ) : (
                                            <div>{values.nome_marco_critico}</div>
                                        )}
                                    </FormItem>
                                )}

                                <FormItem
                                    label="Responsável"
                                    invalid={errors.responsavel && touched.responsavel}
                                    errorMessage={errors.responsavel}
                                >
                                    {isEditing ? (
                                        <Field name="responsavel">
                                            {({ field, form }: FieldProps) => (
                                                <Select
                                                    field={field}
                                                    form={form}
                                                    placeholder="Selecione o usuário responsável"
                                                    options={usuarios}
                                                    value={usuarios.find(
                                                        (option) => option.value === values.responsavel
                                                    )}
                                                    onChange={(option) =>
                                                        form.setFieldValue(
                                                            field.name,
                                                            option?.value
                                                        )
                                                    }
                                                    isDisabled={!isEditing}
                                                />
                                            )}
                                        </Field>
                                    ) : (
                                        <div>{usuarios.find(option => option.value === values.responsavel)?.label || 'Selecione o usuário responsável'}</div>
                                    )}
                                </FormItem>

                                <FormItem
                                    label="Descrição"
                                    invalid={errors.descricao && touched.descricao}
                                    errorMessage={errors.descricao}
                                >
                                    {isEditing ? (
                                        <Field name="descricao">
                                            {({ field }: FieldProps) => (
                                                <Input
                                                    {...field}
                                                    textArea
                                                    placeholder="Descrição"
                                                    className="form-textarea mt-1 block w-full"
                                                />
                                            )}
                                        </Field>
                                    ) : (
                                        <div>{values.descricao}</div>
                                    )}
                                </FormItem>

                                <FormItem
                                    label="Data Prevista"
                                    invalid={errors.dataPrevista && touched.dataPrevista}
                                    errorMessage={errors.dataPrevista}
                                >
                                    {isEditing ? (
                                        <Field
                                            name="dataPrevista"
                                            component={DatePicker}
                                            placeholder="Data Prevista"
                                            onChange={(date: Date) => setFieldValue('dataPrevista', date)}
                                            value={values.dataPrevista ? moment(values.dataPrevista).toDate() : null}
                                        />
                                    ) : (
                                        <div>{values.dataPrevista ? moment(values.dataPrevista).format('DD/MM/YYYY') : '-'}</div>
                                    )}
                                </FormItem>

                                <FormItem
                                    label="Nova Data Prevista"
                                    invalid={errors.novaDataPrevista && touched.novaDataPrevista}
                                    errorMessage={errors.novaDataPrevista}
                                >
                                    {isEditing ? (
                                        <Field
                                            name="novaDataPrevista"
                                            component={DatePicker}
                                            placeholder="Nova Data Prevista"
                                            onChange={(date: Date) => setFieldValue('novaDataPrevista', date)}
                                            value={values.novaDataPrevista ? moment(values.novaDataPrevista).toDate() : null}
                                        />
                                    ) : (
                                        <div>{values.novaDataPrevista ? moment(values.novaDataPrevista).format('DD/MM/YYYY') : '-'}</div>
                                    )}
                                </FormItem>

                                <FormItem
                                    label="Data de Encerramento"
                                    invalid={errors.dataEncerramento && touched.dataEncerramento}
                                    errorMessage={errors.dataEncerramento}
                                >
                                    {isEditing ? (
                                        <Field
                                            name="dataEncerramento"
                                            component={DatePicker}
                                            placeholder="Data de Encerramento"
                                            onChange={(date: Date) => setFieldValue('dataEncerramento', date)}
                                            value={values.dataEncerramento ? moment(values.dataEncerramento).toDate() : null}
                                        />
                                    ) : (
                                        <div>{values.dataEncerramento ? moment(values.dataEncerramento).format('DD/MM/YYYY') : '-'}</div>
                                    )}
                                </FormItem>

                                <FormItem
                                    label="Nova Data de Encerramento"
                                    invalid={errors.novaDataEncerramento && touched.novaDataEncerramento}
                                    errorMessage={errors.novaDataEncerramento}
                                >
                                    {isEditing ? (
                                        <Field
                                            name="novaDataEncerramento"
                                            component={DatePicker}
                                            placeholder="Nova Data de Encerramento"
                                            onChange={(date: Date) => setFieldValue('novaDataEncerramento', date)}
                                            value={values.novaDataEncerramento ? moment(values.novaDataEncerramento).toDate() : null}
                                        />
                                    ) : (
                                        <div>{values.novaDataEncerramento ? moment(values.novaDataEncerramento).format('DD/MM/YYYY') : '-'}</div>
                                    )}
                                </FormItem>
                            </div>
                        {/* </div> */}
                        <Field name="entidadeId" type="hidden" />

                        {!isEditing &&
                            <div className="my-4">
                                <h6 className="mb-2">Anexos Existentes</h6>
                                <ul>
                                    {anexosExistentes.map(anexo => (
                                        <li key={anexo.id} className="mb-2">
                                            <a href={`${import.meta.env.VITE_PHP_URL}/sistema/anexo/download-anexo/aid/${btoa(String(anexo.id))}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                {anexo.nome_arquivo}
                                            </a> - {anexo.descricao}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }

                        <div className="flex justify-end">
                            <Button type="button" onClick={onClose} className="mt-4 mr-2">
                                Cancelar
                            </Button>
                            <Button
                                type={isEditing ? "submit" : "button"}
                                onClick={isEditing ? undefined : toggleEdit}
                                className="mt-4"
                                variant='solid'
                            >
                                {isEditing ? 'Salvar' : 'Editar'}
                            </Button>
                        </div>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
};

export default EditMarcoCriticoForm;
