import React from 'react';
import  SulaForm from '@/components/businessComponent/SulaForm';

export default ({formatMessage}: any) => {
  const config = {
    "mode": "edit",
    "fields": [
      {
        "name": "sender",
        "container": {
          "type": "card",
          "props": {
            "title": "订单信息",
            "type": "inner"
          }
        },
        "fields": [
          {
            "name": "senderName",
            "label": "订单号",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "text",
              "props": {
                "text": "000019871634"
              }
            }
          },
          {
            "name": "senderName1",
            "label": "组织名称",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "text",
              "props": {
                "text": "空运事业部"
              }
            }
          },
          {
            "name": "senderName2",
            "label": "业务类型",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "text",
              "props": {
                "text": "出口空运"
              }
            }
          },
          {
            "name": "kfu",
            "label": "客服",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "text",
              "props": {
                "text": "高圆圆"
              }
            }
          },
          {
            "name": "recipientName3",
            "label": "客户",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择客户"
              }
            },
            "initialSource": [
              {
                "text": "广州货运代理",
                "value": "广州货运代理"
              },
              {
                "text": "深圳货运代理",
                "value": "深圳货运代理"
              }
            ],
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "yewuyuan",
            "label": "业务员",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择业务员"
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
            ],
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "lianxiren",
            "label": "联系人",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择联系人"
              }
            },
            "initialSource": [
              {
                "text": "张三",
                "value": "fruit"
              },
              {
                "text": "李四",
                "value": "vegetables"
              }
            ],
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "订单流转",
            "label": "订单流转",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择订单流转"
              }
            },
            "initialSource": [
              {
                "text": "子公司",
                "value": "fruit"
              },
              {
                "text": "子公司2",
                "value": "vegetables"
              }
            ],
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          }
        ]
      },
      {
        "name": "recipient111",
        "container": {
          "type": "card",
          "props": {
            "title": "货物信息",
            "type": "inner"
          }
        },
        "fields": [
          {
            "name": "name",
            "label": "中文名称",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入中文姓名",
                "style": {
                  "width": "80%"
                }
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          }
        ]
      },
      {
        "name": "basic",
        "container": {
          "type": "card",
          "props": {
            "title": "选择服务类型",
            "type": "inner",
            "style": {
              "margin-top": "20px",
              "padding-bottom": "200px"
            }
          }
        },
        "fields": [
          {
            "name": "time",
            "label": "送货时间",
            "itemLayout": {
              "span": 6
            },
            "field": {
              "type": "rangepicker",
              "props": {
                "placeholder": [
                  "开始时间",
                  "结束时间"
                ]
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          }
        ]
      }
    ],
    "submit": {
      "url": "/api/manage/add.json",
      "method": "post"
    },
    "remoteValues": {
      "url": "/api/manage/detail.json",
      "method": "post",
      "params": {
        "id": 19
      }
    }
  }

  return (
    <SulaForm {...config} />
  );
}
