import { useEffect, useState } from 'react'
import Dropdown from '@/components/ui/Dropdown'
import { Link } from 'react-router-dom'
import { Documento, GrupoDocumento } from '@/@types/navigation'
import { apiGetDocumentos } from '@/services/MenuService'

const DocumentosAjudaAtendimento = () => {
    const [documentosData, setDocumentosData] = useState<GrupoDocumento[]>([])

    useEffect(() => {
        const fetchDocumentos = async () => {
            try {
                const response = await apiGetDocumentos()
                setDocumentosData(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchDocumentos()
    }, [])

    return (
        <Dropdown.Menu title={'Documentos'}>
            {documentosData.map((grupo) => (
                <Dropdown.Menu
                    key={grupo.grupo}
                    openLeft
                    title={grupo.grupo + (grupo.temNovidade ? ' * ' : '')}
                    style={grupo.temNovidade ? { color: 'red !important' } : {}}
                >
                    {grupo.subMenu.map((sub: Documento) => (
                        <Dropdown.Item key={sub.id} className="mb-1 px-0">
                            <Link className="flex h-full w-full px-2" to={'#'}>
                                <span className="flex gap-2 items-center w-full">
                                    <span
                                        className={
                                            sub.temNovidade
                                                ? 'text-red-600'
                                                : ''
                                        }
                                    >
                                        {sub.nome}
                                    </span>
                                </span>
                            </Link>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            ))}
        </Dropdown.Menu>
    )
}

export default DocumentosAjudaAtendimento
