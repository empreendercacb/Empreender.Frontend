import { useEffect, useState } from 'react';
import { Button, Tag } from '@/components/ui';
import Dialog from '@/components/ui/Dialog';
import ApiService from '@/services/ApiService';
import moment from 'moment';
import CustomReactDataGrid from '@/components/shared/CustomReactDataGrid';

const situacaoDivulgada = 'di';

const situacaoLabels: Record<string, string> = {
    ec: 'Em Cadastramento',
    di: 'Divulgada',
};

const privacidadeLabels: Record<string, string> = {
    si: 'Sem Indicação',
    pr: 'Próprio',
    ep: 'Empresários',
    ge: 'Gestores',
    na: 'Nacional',
};

interface AnotacaoModalProps {
    idAnotacao: number;
    onClose: () => void;
    isOpen: boolean;
}

const AnotacaoModal: React.FC<AnotacaoModalProps> = ({ idAnotacao, onClose, isOpen }) => {
    const [anotacao, setAnotacao] = useState<any>(null);
    const [isAuthor, setIsAuthor] = useState(false);
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        if (isOpen && idAnotacao) {
            fetchAnotacao();
        }
    }, [idAnotacao, isOpen]);

    const fetchAnotacao = async () => {
        try {
            const response = await ApiService.fetchData({
                url: `/anotacoes/fetchAnotacao/${idAnotacao}`,
                method: 'get',
            });
            setAnotacao(response.data);
            setIsAuthor(response.data.autor === response.data.usuarioAtual);
            setIsRead(response.data.isRead);
        } catch (error) {
            console.error('Erro ao buscar anotação:', error);
        }
    };

    const handleMarkAsRead = async () => {
        try {
            await ApiService.fetchData({
                url: `/anotacoes/marcar-como-lido/${idAnotacao}`,
                method: 'post',
            });
            setIsRead(true);
        } catch (error) {
            console.error('Erro ao marcar como lida:', error);
        }
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose} width={1200} height={600}>
            {anotacao && (
                <section className="p-6 bg-white rounded-lg shadow-lg max-w-full">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl font-bold text-gray-800">Anotação ID: {anotacao.id}</h2>
                            <span className="text-gray-600">
                                {anotacao.situacao === situacaoDivulgada
                                    ? `Criado em ${moment(anotacao.data_inclusao).format('DD/MM/YYYY HH:mm')}`
                                    : situacaoLabels[anotacao.situacao]}
                            </span>
                        </div>
                        <div className="flex space-x-4">
                            <div>
                                <strong>Privacidade:</strong>
                                <span className="ml-2">{privacidadeLabels[anotacao.privacidade] || 'Indisponível'}</span>
                            </div>
                            {isAuthor && (
                                <div className="flex space-x-2">
                                    <Button variant="solid" color="blue" onClick={() => { }}>
                                        Editar
                                    </Button>
                                    <Button variant="solid" color="red" onClick={() => { }}>
                                        Excluir
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-700">{anotacao.descricao}</p>
                    </div>

                    <div className="flex justify-end space-x-2 mt-4">
                        {!isRead && anotacao.situacao === situacaoDivulgada && !isAuthor && (
                            <Button variant="solid" color="green" onClick={handleMarkAsRead}>
                                Marcar como lida
                            </Button>
                        )}

                        <Button
                            variant="solid"
                            color="blue"
                            onClick={() =>
                                window.open(
                                    `${import.meta.env.VITE_PHP_URL}/sistema/anexo/adicionar/t/anotacao/id/${btoa(anotacao.id)}`,
                                    '_blank'
                                )
                            }
                        >
                            Anexar Arquivo
                        </Button>
                    </div>

                    <div className="mt-4">
                        {/* <CustomReactDataGrid
                            filename="Anexos"
                            columns={[
                                { name: 'id', header: 'ID', defaultFlex: 0.6 },
                                { name: 'nome', header: 'Nome do Arquivo', defaultFlex: 1.5 },
                                { name: 'data_inclusao', header: 'Data', dateFormat: 'DD-MM-YYYY', defaultFlex: 1 },
                            ]}
                            url={`${import.meta.env.VITE_API_URL}/anexos/anotacao/${idAnotacao}`}
                        /> */}
                    </div>
                </section>
            )}
        </Dialog>
    );
};

export default AnotacaoModal;
