/* eslint-disable no-console */

// @ts-nocheck
import React from 'react';
import  SulaQueryTable from '@/components/businessComponent/SulaQueryTable';

export default () => {
  const config = {
    "type": 3,
    "remoteDataSource": {
      "url": "/goldjet-ops-platform/airPanel",
      "method": "GET",
      "convertParams": "tableConvertParamsType",
      "converter": "tableConvertType",
      "init": false
    },
    "actionsRender": [
      {
        "type": "tableRowSelect",
        "visible": "#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}"
      },
      {
        "type": "button",
        "visible": "#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}",
        "props": {
          "children": "批量删除",
          "type": "primary"
        },
        "action": [
          function (ctx) {
            console.log(ctx.table.getSelectedRowKeys(), '批量删除');
          }
        ]
      },
      {
        "type": "button",
        "visible": "#{table.getSelectedRowKeys() ? table.getSelectedRowKeys().length : 0}",
        "props": {
          "children": "批量发布",
          "type": "primary"
        },
        "action": [
          function (ctx) {
            console.log(ctx.table.getSelectedRowKeys(), '批量发布');
          }
        ]
      }
    ],
    "fields": [
      {
        "name": "id",
        "label": "订单号",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入订单号"
          }
        }
      },
      {
        "name": "senderName",
        "label": "提单号",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入提单号"
          }
        }
      },
      {
        "name": "recipientName",
        "label": "航司",
        "field": {
          "type": "select",
          "props": {
            "placeholder": "请选择接航司"
          }
        },
        "initialSource": [
          {
            "text": "水果",
            "value": "fruit"
          },
          {
            "text": "蔬菜",
            "value": "vegetables"
          }
        ]
      },
      {
        "name": "senderName1",
        "label": "客服",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入客服姓名"
          }
        }
      },
      {
        "name": "senderName2",
        "label": "客户",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入客户姓名"
          }
        }
      },
      {
        "name": "senderName3",
        "label": "航班号",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入航班号"
          }
        }
      },
      {
        "name": "recipientName",
        "label": "始发港",
        "field": {
          "type": "select",
          "props": {
            "placeholder": "请选择始发港"
          }
        },
        "initialSource": [
          {
            "text": "水果",
            "value": "fruit"
          },
          {
            "text": "蔬菜",
            "value": "vegetables"
          }
        ]
      },
      {
        "name": "recipientName",
        "label": "目的港",
        "field": {
          "type": "select",
          "props": {
            "placeholder": "请选择目的港"
          }
        },
        "initialSource": [
          {
            "text": "水果",
            "value": "fruit"
          },
          {
            "text": "蔬菜",
            "value": "vegetables"
          }
        ]
      },
      {
        "name": "senderName",
        "label": "业务员",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入业务员姓名"
          }
        }
      },
      {
        "name": "time",
        "label": "出港日期",
        "field": {
          "type": "rangepicker",
          "props": {
            "style": {
              "width": "100%"
            },
            "placeholder": [
              "开始时间",
              "结束时间"
            ]
          }
        }
      },
      {
        "name": "time",
        "label": "创建日期",
        "field": {
          "type": "rangepicker",
          "props": {
            "style": {
              "width": "100%"
            },
            "placeholder": [
              "开始时间",
              "结束时间"
            ]
          }
        }
      },
      {
        "name": "statu",
        "label": "货物状态",
        "itemLayout": {
          "span": 23
        },
        "initialSource": [
          {
            "text": "全部",
            "value": "全部"
          },
          {
            "text": "已派车",
            "value": "celery"
          },
          {
            "text": "已提货",
            "value": "cabbage"
          },
          {
            "text": "已入仓库",
            "value": "celery"
          },
          {
            "text": "已出仓库",
            "value": "cabbage"
          },
          {
            "text": "到货站",
            "value": "celery"
          },
          {
            "text": "已过安检",
            "value": "cabbage"
          },
          {
            "text": "已打板",
            "value": "celery"
          },
          {
            "text": "已出运",
            "value": "cabbage"
          },
          {
            "text": "已中转",
            "value": "celery"
          },
          {
            "text": "已达到",
            "value": "cabbage"
          },
          {
            "text": "目的地提货",
            "value": "celery"
          },
          {
            "text": "已清关到达",
            "value": "cabbage"
          }
        ],
        "field": {
          "type": "checkboxgroup"
        }
      },
      {
        "name": "订单状态",
        "label": "订单状态",
        "itemLayout": {
          "span": 23
        },
        "initialSource": [
          {
            "text": "全部",
            "value": "全部"
          },
          {
            "text": "待订仓",
            "value": "celery"
          },
          {
            "text": "待补录",
            "value": "cabbage"
          },
          {
            "text": "待出提单",
            "value": "celery"
          },
          {
            "text": "已出提单",
            "value": "cabbage"
          },
          {
            "text": "已交单",
            "value": "celery"
          },
          {
            "text": "待审核",
            "value": "cabbage"
          },
          {
            "text": "已作废",
            "value": "celery"
          },
          {
            "text": "异常作废",
            "value": "cabbage"
          }
        ],
        "field": {
          "type": "checkboxgroup"
        }
      },
      {
        "name": "baoguan",
        "label": "报关状态",
        "itemLayout": {
          "span": 23
        },
        "initialSource": [
          {
            "text": "全部",
            "value": "全部"
          },
          {
            "text": "报关审结",
            "value": "celery"
          },
          {
            "text": "海关查验",
            "value": "cabbage"
          },
          {
            "text": "放行",
            "value": "celery"
          },
          {
            "text": "已结关",
            "value": "cabbage"
          }
        ],
        "field": {
          "type": "checkboxgroup"
        }
      }
    ],
    "columns": [
      {
        "key": "id",
        "title": "订单号"
      },
      {
        "key": "email",
        "title": "提单号"
      },
      {
        "key": "nat",
        "title": "分单号"
      },
      {
        "key": "airCompanyCode",
        "title": "建单日期",
        "render": {
          "type": "text",
          "props": {
            "children": "#{text === 'male' ? '男' : '女'}"
          }
        }
      },
      {
        "key": "email",
        "title": "头程航班"
      },
      {
        "key": "email",
        "title": "出港日期"
      },
      {
        "key": "email",
        "title": "订单类型"
      },
      {
        "key": "email",
        "title": "始发港"
      },
      {
        "key": "email",
        "title": "目的港"
      },
      {
        "key": "email",
        "title": "货物数据"
      },
      {
        "key": "email",
        "title": "货物状态"
      },
      {
        "key": "email",
        "title": "订单状态"
      },
      {
        "key": "email",
        "title": "报关状态"
      },
      {
        "key": "email",
        "title": "业务人员"
      },
      {
        "key": "operator",
        "title": "操作",
        "render": [
          {
            "type": "link",
            "props": {
              "type": "primary",
              "children": "查看"
            },
            "action": {
              "type": "route",
              "path": "/item-demo/Detail/#{record.id}?name=rod"
            }
          }
        ]
      }
    ],
    "rowKey": "id"
  };

  return (
    <SulaQueryTable {...config} />
  );
};