/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'

import { useParams } from 'react-router-dom'
import LayoutDetailSimple from '@/components/layouts/LayoutDetailSimple'

import isEmpty from 'lodash/isEmpty'
import { HiOutlinePencil } from 'react-icons/hi'
import LayoutWithMenus from '@/components/layouts/LayoutWithMenus'
import { Nucleo } from '@/@types/generalTypes'
import { noEmpty } from '@/utils/noEmpty'
import Detalhes from './detalhes'
import ListaReunioes from './lista-reunioes'

const { TabNav, TabList, TabContent } = Tabs

const NucleoDetalhes = () => {
    const { idnucleo } = useParams()

    const [nucleo, setNucleo] = useState<Nucleo | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchEmpresa() {
            const response = await fetch(
                `http://localhost:3333/nucleos/${idnucleo}`
            )

            if (response.ok) {
                const data = await response.json()
                setNucleo(data)
                setLoading(false)
            } else {
                console.error(
                    'Erro na requisição:',
                    response.status,
                    response.statusText
                )
            }
        }

        fetchEmpresa()
    }, [])

    const optionsList = [
        {
            value: 'detalhes',
            label: 'Detalhes',
            isActive: !['reunioes', 'acoes', 'documentos', 'anotacoes'].some(
                (route) => location.pathname.includes(route)
            ),
            href: '#',
        },
        {
            value: 'reunioes',
            label: 'Lista de Reuniões',
            isActive: location.pathname.includes('reunioes'),
            href: '#',
        },
        {
            value: 'acoes',
            label: 'Lista de Planos de Ação',
            isActive: location.pathname.includes('acoes'),
            href: '#',
        },
        {
            value: 'documentos',
            label: 'Documentos',
            isActive: location.pathname.includes('documentos'),
            href: '#',
        },
        {
            value: 'anotacoes',
            label: 'Anotações',
            isActive: location.pathname.includes('anotacoes'),
            href: '#',
        },
    ]

    const OptionsButton = (
        <Button size="sm" variant="solid" icon={<HiOutlinePencil />}>
            Opções do Núcleo
        </Button>
    )

    return (
        <Loading loading={loading}>
            {!isEmpty(nucleo) && (
                <LayoutWithMenus
                    title={nucleo.nmnucleo}
                    groupList={optionsList}
                >
                    <LayoutDetailSimple
                        title={nucleo.nmnucleo}
                        status={nucleo.flativo}
                        subtitle={`Cód. ${nucleo.idnucleo}`}
                        paymentStatus={{
                            S: {
                                label: 'Ativo',
                                class: 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-100',
                            },
                            N: {
                                label: 'Inativo',
                                class: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-100',
                            },
                        }}
                        actions={
                            <div className="flex-wrap inline-flex xl:flex items-center gap-2">
                                <Dropdown renderTitle={OptionsButton}>
                                    <Dropdown.Item eventKey="a">
                                        Alterar dados
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="b">
                                        Adicionar Empresa
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="d">
                                        Adicionar Reunião
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="c">
                                        Adicionar Plano de Ação
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="d">
                                        Adicionar Reunião
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="e">
                                        Vincular Empresa
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="f">
                                        Vincular Projeto
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        }
                    >
                        {/* Aqui o conteúdo específico de cada página, pode ser qualquer coisa */}
                        <Tabs defaultValue="tab1">
                            <TabList>
                                <TabNav value="tab1">Detalhes</TabNav>
                                <TabNav value="tab2">
                                    Empresas Vinculadas
                                </TabNav>
                                <TabNav value="tab4">
                                    Projetos Vinculados
                                </TabNav>
                            </TabList>
                            <div className="p-4">
                                <TabContent value="tab1">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            {nucleo.nmnucleo}
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            {noEmpty(
                                                nucleo.associacao.cidade
                                                    .nmcidade
                                            ) +
                                                ' - ' +
                                                noEmpty(
                                                    nucleo.associacao.cidade
                                                        .iduf
                                                )}
                                        </p>
                                    </div>
                                    <Detalhes nucleo={nucleo} />
                                </TabContent>
                                <TabContent value="tab2">
                                    <ListaReunioes idnucleo={nucleo.idnucleo} />
                                </TabContent>
                                <TabContent value="tab3"></TabContent>
                            </div>
                        </Tabs>
                    </LayoutDetailSimple>
                </LayoutWithMenus>
            )}
        </Loading>
    )
}

export default NucleoDetalhes
