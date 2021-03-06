/* eslint-disable no-console */

// @ts-nocheck
import React from 'react';
import  SulaQueryTable from '@/components/businessComponent/SulaQueryTable';
import { EnumTableTypeMenu } from '@/common/menu'

export default () => {
  const config = {
    type: EnumTableTypeMenu.ADD_ROWS_ACTION,
    remoteDataSource: {
      url: '/goldjet-ops-platform/airPanel',
      method: 'GET',
      convertParams: 'tableConvertParamsType',
      converter: 'tableConvertType',
    },
    actionsRender: [
      {
        type: 'button',
        props: {
          children: '新建',
          type: 'primary',
        },
        action: [
          (ctx: any) => {
            console.log(ctx.table.getSelectedRowKeys(), '批量删除');
          },
        ],
      },
      {
        type: 'tableRowSelect',
        visible: '#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}',
      },
      {
        type: 'button',
        visible: '#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}',
        props: {
          children: '批量删除',
          type: 'primary',
        },
        action: [
          (ctx) => {
            console.log(ctx.table.getSelectedRowKeys(), '批量删除');
          },
        ],
      },
      {
        type: 'button',
        visible: '#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}',
        props: {
          children: '批量发布',
          type: 'primary',
        },
        action: [
          (ctx) => {
            console.log(ctx.table.getSelectedRowKeys(), '批量发布');
          },
        ],
      },
    ],
    fields: [
      {
        name: 'id',
        label: '发送姓名',
        field: {
          type: 'input',
          props: {
            placeholder: '搜索Id'
          }
        }
      }, {
        name: 'senderName',
        label: '发送姓名',
        field: {
          type: 'input',
          props: {
            placeholder: '请输入发送人姓名'
          }
        }
      }, {
        name: 'recipientName',
        label: '接收姓名',
        field: {
          type: 'select',
          props: {
            placeholder: '请选择接收人姓名'
          }
        },
        initialSource: [
          {
            text: '水果',
            value: 'fruit',
          },
          {
            text: '蔬菜',
            value: 'vegetables',
          },
        ]
      }, {
        name: 'time',
        label: '送货时间',
        field: {
          type: 'rangepicker',
          props: {
            style: {
              width: '100%'
            },
            placeholder: ['开始时间', '结束时间']
          }
        }
      }, {
        name: 'status',
        label: '状态',
        field: {
          type: 'select',
          props: {
            placeholder: '搜索状态'
          }
        },
        initalSource: [
          {
            text: '水果',
            value: 'fruit',
          },
          {
            text: '蔬菜',
            value: 'vegetables',
          }
        ],
      }, {
        name: 'description',
        label: '其他信息',
        field: {
          type: 'input',
          props: {
            placeholder: '请输入其他信息'
          }
        }
      }, {
        name: 'senderAddress',
        label: '发送地址',
        field: {
          type: 'input',
          props: {
            placeholder: '请输入发送人地址'
          }
        },
        initalSource: [
          {
            text: '水果',
            value: 'fruit',
          },
          {
            text: '蔬菜',
            value: 'vegetables',
          }
        ],
      },{
        name: 'statu',
        label: '基础',
        itemLayout: {
          span: 23, // 栅格占位格数
        },
        initialSource: [
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
        ],
        field: {
          type: 'checkboxgroup',
        },
      }, {
        name: '订单状态',
        label: '基础12',
        itemLayout: {
          span: 23, // 栅格占位格数
        },
        initialSource: [
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
          {
            text: '芹菜',
            value: 'celery',
          },
          {
            text: '大白菜',
            value: 'cabbage',
          },
        ],
        field: {
          type: 'checkboxgroup',
        },
      }]
    ,
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'email',
        title: '邮箱',
      },
      {
        key: 'nat',
        title: '国家',
      },
      {
        key: 'airCompanyCode',
        title: '性别',
        render: {
          type: 'text',
          props: {
            children: '#{text === \'male\' ? \'男\' : \'女\'}'
          }
        },
      },
      {
        key: 'email',
        title: '邮箱',
      },
      {
        "key": "operator",
        "title": "操作",
        "render": [
          {
            "type": "link",
            "props": {
              type: 'primary',
              children: '查看'
            },
            "action": {
              "type": "route",
              "path": "/item-demo/Detail/#{record.id}?name=rod"
            }
          }
        ]
      }
    ],
    rowKey: 'id',
  };
  return (
    <SulaQueryTable {...config} />
  );
};