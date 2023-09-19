/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback, FC } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import axios from 'axios'
import { Button } from '../ui'
import { HiDownload, HiFilter } from 'react-icons/hi'
import { useAppSelector } from '@/store'
import PaginationToolbar from '@inovua/reactdatagrid-community/packages/PaginationToolbar'

interface CustomReactDataGridProps {
    columns: any[];
    defaultFilterValue: any;
    url: string;
    options?: React.ReactNode;
}

type SortInfo = {
    field: string;
    order: 'ASC' | 'DESC';
};

type FilterValue = {
    [key: string]: any;
};

type LoadDataParams = {
    skip: number;
    limit: number;
    sortInfo: SortInfo;
    groupBy?: string;
    filterValue: FilterValue;
    exportOption?: boolean ;
};


const i18n = Object.assign({}, ReactDataGrid.defaultProps.i18n, {
    pageText: 'Página ',
    ofText: ' de ',
    perPageText: 'Resultados por página',
    showingText: 'Mostrando ',
    clearAll: 'Limpar tudo',
    inList: 'Na lista',
    notInList:"Fora da lista",
    clear: 'Limpar',
    showFilteringRow: 'Mostrar linha de filtragem',
    hideFilteringRow: 'Esconder linha de filtragem',
    dragHeaderToGroup: 'Arraste o cabeçalho para agrupar',
    disable: 'Desabilitar',
    enable: 'Habilitar',
    sortAsc: 'Ordenar em ordem ascendente',
    sortDesc: 'Ordenar em ordem descendente',
    unsort: 'Remover ordenação',
    group: 'Agrupar',
    ungroup: 'Desagrupar',
    lockStart: 'Fixar início',
    lockEnd: 'Fixar fim',
    unlock: 'Desafixar',
    columns: 'Colunas',
    contains: 'Contém',
    startsWith: 'Começa com',
    endsWith: 'Termina com',
    notContains: 'Não contém',
    neq: 'Diferente',
    eq: 'Igual',
    notEmpty: 'Não vazio',
    before:" Antes",
    beforeOrOn: 'Antes de ou em',
    afterOrOn: 'A partir de',
    after: 'Após',
    empty: 'Vazio',
    inlist: 'Na lista',
    notinlist: 'Fora da lista',
    noRecords: 'Nenhum dado disponível',
    inrange: 'No intervalo',
    notinrange: 'Fora do intervalo',
    lt: 'Menor que',
    lte: 'Menor ou igual a',
    gt: 'Maior que',
    gte: 'Maior ou igual a',
    'calendar.todayButtonText': 'Hoje',
    calendar: {
        todayButtonText: 'Hoje',
        clearButtonText: 'Limpar',
        okButtonText: 'OK',
        cancelButtonText: 'Cancelar',
    },
})


const footerRows = [
    {
      render: {
        name: <b>Nothing to render here</b>
      }
    }
  ]


const CustomReactDataGrid: FC<CustomReactDataGridProps> = ({ columns, defaultFilterValue, url, options   }) => {

    const { preferencias } = useAppSelector(
      (state) => state.auth.user
  )

  const itemsPerPage = preferencias && preferencias.lista_geral !== undefined ? preferencias.lista_geral : 20;

    const [gridRef, setGridRef] = useState(null)
    const [queryParams, setQueryParams] = useState<LoadDataParams>({
        skip: 0,
        limit: 10,
        sortInfo: {
            field: '', 
            order: 'ASC'
          },
        groupBy: '',
        filterValue: {},
      });
      
    const loadData = async (params: any, exportExcel=false) => {
        try {
            const { skip, limit, sortInfo, groupBy, filterValue } = params;
    
            if(exportExcel){
                const response = await axios.get(url, {
                    params: {
                        skip: skip,
                        limit: limit,
                        exportExcel:true,
                        groupBy: groupBy && groupBy.length ? groupBy : undefined,
                        sortInfo: JSON.stringify(sortInfo),
                        filterBy: JSON.stringify(filterValue)
                    }
                });  

                const relativeUrl = response.data;
                const cleanedRelativeUrl = relativeUrl.replace(/^public\//, '');
    
                const baseUrl = 'https://api.cacbempreenderapp.org.br'; // Remove the trailing slash
                const absoluteUrl = `${baseUrl}/${cleanedRelativeUrl}`;

                window.open(absoluteUrl, '_blank');
                return absoluteUrl

            }
            const response = await axios.get(url, {
                params: {
                    skip: skip,
                    limit: limit,
                    groupBy: groupBy && groupBy.length ? groupBy : undefined,
                    sortInfo: JSON.stringify(sortInfo),
                    filterBy: JSON.stringify(filterValue)
                }
            });


    
            const totalCount = response.headers['x-total-count'];
            const data = response.data.data;
            const count = response.data.meta.total;
    
            return { data, count, totalCount };
    
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            throw error;
        }
    }

    const gridStyle = { minHeight: 750, width: '100%' };

    const handleFilterValueChange = (newFilterValue: any) => {
        setQueryParams((prevParams) => ({
          ...prevParams,
          filterValue: newFilterValue,
        }));
      };

    return (
        <div>
            {options}
            <div style={{ marginBottom: 20 }}>
        <Button icon={<HiFilter />}  size='sm' onClick={()=> {
          gridRef.current.clearAllFilters()
        }}>
          Limpar filtros
        </Button>
        <Button icon={<HiDownload />} className='mx-2' size='sm' onClick={()=> {
          loadData(queryParams,true)
        }}>
          Exportar
        </Button>
      </div>
      {/* <pre>{JSON.stringify(queryParams, null, 2)}</pre> */}
      {/* <pre>{columns.header}</pre> */}
      

            <ReactDataGrid
                onReady={setGridRef}
                i18n={i18n}
                onFilterValueChange={handleFilterValueChange}
                idProperty="id"
                defaultFilterValue={defaultFilterValue}
                columns={columns}
                theme="blue-light"
                dataSource={loadData}
                defaultLimit={itemsPerPage}
                enableFiltering={true}
                pagination
                style={gridStyle}
                enableColumnAutosize ={false}
                loadingText = "Carregando ... "
                emptyText = "Não há dados para serem exibidos"
                disableGroupByToolbar = {true}
            />
        </div>
    )
}

export default CustomReactDataGrid;
