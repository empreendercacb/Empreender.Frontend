import Avatar from '@/components/ui/Avatar'
import Dropdown from '@/components/ui/Dropdown'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import { HiChatAlt } from 'react-icons/hi' // Adicionei o ícone de ajuda para representar o menu.
import type { CommonProps } from '@//@types/common'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import HorizontalMenuDropdownItem from './HorizontalMenuContent/HorizontalMenuDropdownItem'
import DocumentosAjudaAtendimento from './DocumentosAjudaAtendimento'

type DropdownList = {
    label: string
    path: string
    recurso?: string
}

const ajudaDropdownItemList: DropdownList[] = [
    {
        label: 'Aviso aos Navegantes',
        path: '/sistema/faq/blog',
    },
    {
        label: 'Fale Conosco',
        path: 'mailto:suportepde@cacb.org.br?subject=Fale%20Conosco',
    },
    {
        label: 'FAQ',
        path: '/sistema/faq/index',
    },
    {
        label: 'Liberações',
        path: '/sistema/liberacoes/',
    },
    {
        label: 'Painel Covid',
        path: '/sistema/faq/paineis-zoho/painel/covid',
    },
    {
        label: 'Painel Empreender',
        path: '/sistema/faq/paineis-zoho/painel/empreender',
        recurso: 'paineis_zoho',
    },
]

const _AjudaAtendimento = ({ className }: CommonProps) => {
    const { recursos } = useAppSelector((state) => state.auth.user)

    const filteredItems = ajudaDropdownItemList.filter(
        (item) => !item.recurso || recursos.includes(item.recurso)
    )

    const AjudaAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <span className="text-xl opacity-50">
                <HiChatAlt />
            </span>
            <div className="hidden md:block">
                <div className="font-bold">Ajuda e Atendimento</div>
            </div>
        </div>
    )

    return (
        <div>
            <Dropdown
                menuStyle={{ minWidth: 240 }}
                renderTitle={AjudaAvatar}
                placement="bottom-end"
            >
                {filteredItems.map((item) => (
                    <Dropdown.Item
                        key={item.label}
                        eventKey={item.label}
                        className="mb-1 px-0"
                    >
                        <Link
                            className="flex h-full w-full px-2"
                            to={item.path}
                        >
                            <span className="flex gap-2 items-center w-full">
                                <span>{item.label}</span>
                            </span>
                        </Link>
                    </Dropdown.Item>
                ))}
                <DocumentosAjudaAtendimento />
            </Dropdown>
        </div>
    )
}

const AjudaAtendimento = withHeaderItem(_AjudaAtendimento)

export default AjudaAtendimento
