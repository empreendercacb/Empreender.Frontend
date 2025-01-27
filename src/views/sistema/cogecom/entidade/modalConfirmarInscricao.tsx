import React, { useState } from 'react'; 
import { Dialog, Button } from '@/components/ui';
import ApiService from '@/services/ApiService';

interface ConfirmarInscricaoProps {
    isOpen: boolean;
    idEntidade: string | undefined;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmarInscricao: React.FC<ConfirmarInscricaoProps> = ({ isOpen, idEntidade, onClose, onConfirm }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = async () => {
        try {
            await ApiService.fetchData({
                url: `cogecom/status/${idEntidade}`,
                method: 'put',
                data: { status: 'Solicitada' },
            });
            setIsConfirmed(true);
            onConfirm();
            onClose();
        } catch (error) {
            console.error('Erro ao atualizar status da adesão:', error);
        }
    };

    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <div className="p-4">
                <h5 className="text-lg font-bold mb-4">{isConfirmed ? 'Adesão Solicitada' : 'Adesão COGECOM'}</h5>

                {isConfirmed ? (
                    <p className="my-4 text-green-700">
                        Sua adesão foi solicitada com sucesso! Acompanhe o status no portal.
                    </p>
                ) : (
                    <>
                        <p className="my-4">
                            As entidades elegíveis podem indicar seu interesse e solicitar sua adesão ao COGECOM.
                        </p>
                        <div className="w-full flex justify-between">
                            <Button type="button" onClick={onClose} variant="default">
                                Cancelar
                            </Button>
                            <Button type="button" onClick={handleConfirm} color="green-600" variant="solid">
                                Confirmar adesão
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </Dialog>
    );
};

export default ConfirmarInscricao;
