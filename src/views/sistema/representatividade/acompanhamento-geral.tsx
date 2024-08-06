/* eslint-disable @typescript-eslint/no-explicit-any */
import '@inovua/reactdatagrid-community/index.css'

import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import DateFilter from '@inovua/reactdatagrid-community/DateFilter'
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'

import { AdaptableCard } from '@/components/shared'
import 'moment/locale/pt-br'
import CustomReactDataGrid from '@/components/shared/CustomReactDataGrid'
import { LancamentosCard } from '@/components/shared/TableCards/LancamentosCard'
import { Button, Dialog, Tooltip } from '@/components/ui'
import { useEffect, useState } from 'react'
import { FaClipboardCheck, FaEye, FaFileSignature, FaHistory, FaPaperclip } from 'react-icons/fa'
import ApiService from '@/services/ApiService'
import EditMarcoCriticoForm from './editMarcoCriticoForm'
import AnexoMarcoCriticoForm from './anexoMarcoCriticoForm'
import StatusChangeModal from './statusChangeModal'
import HistoryMarcoCriticoModal from './historyMarcoCriticoModal'
import AnalysisModal from './analysisMarcoCriticoModal'

moment.locale('pt-br')

const tarefaStatusStyles: any = {
    'Em análise': { label: 'Em Análise', class: 'bg-blue-500 text-white' },
    'Atingido': { label: 'Atingido', class: 'bg-green-500 text-white' },
    'Não atingido': { label: 'Não Atingido', class: 'bg-red-500 text-white' },
};

export const TarefaStatusTag: React.FC<{ statusKey: string }> = ({ statusKey }) => {
    const statusInfo = tarefaStatusStyles[statusKey] || { label: 'Indefinido', class: 'bg-gray-200 text-black' }
    return (
        <div style={statusInfo.style} className={`border-0 rounded-md text-center px-2 py-1 ${statusInfo.class}`}>
            {statusInfo.label}
        </div>
    )
}

const tarefaStatusValue = [
    { name: 'Em Análise', value: 'Em análise' },
    { name: 'Atingido', value: 'Atingido' },
    { name: 'Não Atingido', value: 'Não atingido' },
];


const AcompanhamentoGeralMarcosCriticos = () => {
    const columns = [
        {
            name: 'id_acompanhamento',
            header: 'Id',
            columnName: 'id_acompanhamento',
            type: 'string',
            defaultFlex: 0.5,
            operator: 'contains',
            value: '',
        },
        {
            name: 'nmrazao',
            header: 'Entidade',
            columnName: 'nmrazao',
            type: 'string',
            defaultFlex: 0.5,
            operator: 'contains',
            value: '',
            render: ({ data }: any) => (
                <div>
                    <Link to={`/sistema/representatividade/acompanhamento/${data.idassociacao}`}>
                        {data.sigla ?? data.nmrazao}
                    </Link>
                </div>
            ),
        },
        {
            name: 'iduf',
            header: 'UF',
            columnName: 'iduf',
            type: 'string',
            defaultFlex: 0.5,
            operator: 'contains',
            value: '',
        },
        {
            name: 'nmcidade',
            header: 'Cidade',
            columnName: 'nmcidade',
            type: 'string',
            defaultFlex: 0.7,
            operator: 'contains',
            value: '',
        },
        {
            name: 'marco_nome',
            header: 'Nome',
            columnName: 'marco_nome',
            type: 'string',
            defaultFlex: 1,
            operator: 'contains',
            value: '',
        },
        {
            name: 'data_prevista',
            header: 'Previsão',
            columnName: 'data_prevista',
            defaultFlex: 0.6,
            dateFormat: 'DD/MM/YYYY',
            type: 'date',
            operator: 'after',
            value: '',
            filterEditor: DateFilter,
            filterEditorProps: ({ index }: any) => {
                return {
                    dateFormat: 'DD/MM/YYYY',
                    placeholder: index === 1 ? 'A data é anterior à...' : 'A data é posterior à',
                }
            },
            render: ({ value, cellProps: { dateFormat } }: any) =>
                moment(value).format(dateFormat) === 'Invalid date'
                    ? '-'
                    : moment(value).format(dateFormat),
        },
        {
            name: 'nova_data_prevista',
            header: 'Nova Previsão',
            columnName: 'nova_data_prevista',
            defaultFlex: 0.6,
            dateFormat: 'DD/MM/YYYY',
            type: 'date',
            operator: 'after',
            value: '',
            filterEditor: DateFilter,
            filterEditorProps: ({ index }: any) => {
                return {
                    dateFormat: 'DD/MM/YYYY',
                    placeholder: index === 1 ? 'A data é anterior à...' : 'A data é posterior à',
                }
            },
            render: ({ value, cellProps: { dateFormat } }: any) =>
                moment(value).format(dateFormat) === 'Invalid date'
                    ? '-'
                    : moment(value).format(dateFormat),
        },
        {
            name: 'data_encerramento',
            header: 'Término',
            columnName: 'data_encerramento',
            defaultFlex: 0.6,
            dateFormat: 'DD/MM/YYYY',
            type: 'date',
            operator: 'after',
            value: '',
            filterEditor: DateFilter,
            filterEditorProps: ({ index }: any) => {
                return {
                    dateFormat: 'DD/MM/YYYY',
                    placeholder: index === 1 ? 'A data é anterior à...' : 'A data é posterior à',
                }
            },
            render: ({ value, cellProps: { dateFormat } }: any) =>
                moment(value).format(dateFormat) === 'Invalid date'
                    ? '-'
                    : moment(value).format(dateFormat),
        },
        {
            name: 'status',
            header: 'Status',
            columnName: 'status',
            defaultFlex: 0.6,
            type: 'select',
            operator: 'equals',
            value: '',
            filterEditor: SelectFilter,
            filterEditorProps: {
                dataSource: tarefaStatusValue.map((option) => {
                    return { id: option.value, label: option.name }
                }),
            },
            render: ({ data }: any) => <TarefaStatusTag statusKey={data.status} />,
        },
        {
            name: 'actions',
            header: 'Ações',
            defaultFlex: 0.6,
            columnName: 'actions',
            type: 'string',
            render: ({ data }: any) => renderButtons(data),
        }
    ];

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedMarcoId, setSelectedMarcoId] = useState(null);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [isAnexoModalOpen, setIsAnexoModalOpen] = useState(false);
    const [isHistoricoModalOpen, setIsHistoricoModalOpen] = useState(false);
    const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

    const [reload, setReload] = useState(false);

    const handleOpenEditModal = (marcoId: any) => {
        setSelectedMarcoId(marcoId);
        setIsEditModalOpen(true);
    };

    const handleOpenAnalysisModal = (marcoId: any) => {
        setSelectedMarcoId(marcoId);
        setIsAnalysisModalOpen(true);
    };

    const handleCloseAnalysisModal = () => setIsAnalysisModalOpen(false);

    const handleCloseEditModal = () => setIsEditModalOpen(false);
    const handleCloseStatusModal = () => setIsStatusModalOpen(false);
    const handleOpenAnexoModal = (marcoId: any) => {
        setSelectedMarcoId(marcoId);
        setIsAnexoModalOpen(true);
    };

    const handleCloseAnexoModal = () => setIsAnexoModalOpen(false);


    const handleUpdate = async () => {
        setReload(!reload);
    };

    const handleSaveStatusChange = async (status: string, comentario: string) => {
        try {
            await ApiService.fetchData({
                url: `/representatividade/alterar-status-marco-critico/${selectedMarcoId}`,
                method: 'put',
                data: { status, comentario }
            });
            handleCloseStatusModal();
            handleUpdate();
        } catch (error) {
            console.error('Erro ao alterar o status:', error);
        }
    };

    const handleOpenHistoricoModal = (marcoId: any) => {
        setSelectedMarcoId(marcoId);
        setIsHistoricoModalOpen(true);
    };

    const handleCloseHistoricoModal = () => setIsHistoricoModalOpen(false);

    // Função para renderizar os botões
    const renderButtons = (data: any) => {
        const isConsultor = data.consultorAssociacoes.includes(String(data.idassociacao));
        const isGestor = data.userAssociacoes.includes(String(data.idassociacao));

        return (
            <div className="flex space-x-2">
                <Tooltip title="Ver">
                    <Button
                        variant="solid"
                        size="xs"
                        icon={<FaEye />}
                        onClick={() => handleOpenEditModal(data.id_acompanhamento)}
                    />
                </Tooltip>

                {data.status == "Em análise" && isConsultor &&
                    <Tooltip title="Analisar">
                        <Button
                            variant="solid"
                            size="xs"
                            icon={<FaFileSignature />}
                            onClick={() => handleStatusChange(data.id_acompanhamento)}
                        />
                    </Tooltip>
                }

                {data.status == "Não atingido" && isGestor &&
                    <Tooltip title="Remeter para análise">
                        <Button
                            variant="solid"
                            size="xs"
                            icon={<FaClipboardCheck />}
                            onClick={() => handleOpenAnalysisModal(data.id_acompanhamento)}
                        />
                    </Tooltip>
                }

                {isGestor &&
                    <Tooltip title="Anexar/retirar documentos">
                        <Button
                            variant="solid"
                            size="xs"
                            icon={<FaPaperclip />}
                            onClick={() => handleOpenAnexoModal(data.id_acompanhamento)}
                        />
                    </Tooltip>
                }

                <Tooltip title="Histórico">
                    <Button
                        variant="solid"
                        size="xs"
                        icon={<FaHistory />}
                        onClick={() => handleOpenHistoricoModal(data.id_acompanhamento)}
                    />
                </Tooltip>
            </div>
        )
    };

    // Funções de handler para os botões
    const handleStatusChange = (id: any) => {
        setSelectedMarcoId(id);
        setIsStatusModalOpen(true);
    };

    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <div>
                    <h3 className="mb-4 lg:mb-0">Acompanhamento Geral - Marcos Críticos</h3>
                </div>
            </div>

            <CustomReactDataGrid
                filename="Marcos_Criticos"
                columns={columns}
                url={`${import.meta.env.VITE_API_URL}/representatividade/acompanhamento-geral?reload=${reload}`}
                CardLayout={LancamentosCard}
                defaultSortInfo={{ dir: 1, id: 'nova_data_prevista', name: 'nova_data_prevista', columnName: 'nova_data_prevista', type: 'date' }}
            />

            {selectedMarcoId && (
                <>
                    <Dialog isOpen={isEditModalOpen} onClose={handleCloseEditModal} width={1000}>
                        <EditMarcoCriticoForm isGestor={true} marcoId={selectedMarcoId} onClose={handleCloseEditModal} onUpdate={handleUpdate} />
                    </Dialog>
                    <Dialog isOpen={isAnalysisModalOpen} onClose={handleCloseAnalysisModal} width={500}>
                        <AnalysisModal isOpen={isAnalysisModalOpen} onClose={handleCloseAnalysisModal} onSave={handleSaveStatusChange} />
                    </Dialog>
                    <Dialog isOpen={isAnexoModalOpen} onClose={handleCloseAnexoModal} width={500}>
                        <AnexoMarcoCriticoForm marcoId={selectedMarcoId} onClose={handleCloseAnexoModal} onUpdate={handleUpdate} />
                    </Dialog>
                    <StatusChangeModal
                        isOpen={isStatusModalOpen}
                        onClose={handleCloseStatusModal}
                        onSave={handleSaveStatusChange}
                    />
                    <HistoryMarcoCriticoModal isOpen={isHistoricoModalOpen} onClose={handleCloseHistoricoModal} marcoId={selectedMarcoId} />
                </>
            )}
        </AdaptableCard>
    )
}

export default AcompanhamentoGeralMarcosCriticos
