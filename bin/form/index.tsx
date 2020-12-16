import React from 'react';
import  SulaForm from '@/components/businessComponent/SulaForm';

export default ({formatMessage}: any) => {
  const config = {
    mode: "edit",
    "fields": [
      {
        "name": "sender",
        "container": {
          "type": "card",
          "props": {
            "title": "发送",
            "type": "inner",
          }
        },
        "fields": [
          {
            "name": "senderName",
            "label": formatMessage({id: 'itemAdd.senderLabel'}),
            itemLayout: { span: 6},
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入发送人姓名"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "secrecy",
            "label": "是否保密",
            itemLayout: { span: 6},
            "field": {
              "type": "switch",
              "props": {
                "checkedChildren": "on",
                "unCheckedChildren": "off"
              }
            },
            "valuePropName": "checked"
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderName1",
            "label": "发送人姓名",
            itemLayout: { span: 6},
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入发送人姓名"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "secrecy",
            "label": "是否保密",
            itemLayout: { span: 6},
            "field": {
              "type": "switch",
              "props": {
                "checkedChildren": "on",
                "unCheckedChildren": "off"
              }
            },
            "valuePropName": "checked"
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
        ]
      },
      {
        "name": "recipient",
        "container": {
          "type": "card",
          "props": {
            "title": "接收",
            "type": "inner",
          }
        },
        "fields": [
          {
            "name": "recipientName",
            "label": "接收人姓名",
            itemLayout: { span: 6},
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择接收人姓名"
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
            ],
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "recipientTime",
            "label": "接收时间",
            itemLayout: { span: 6},
            "field": {
              "type": "checkboxgroup"
            },
            "initialSource": [
              {
                "text": "Morning",
                "value": "morning"
              },
              {
                "text": "Afternoon",
                "value": "afternoon"
              },
            ]
          },
          {
            "name": "recipientNumber",
            "label": "接收人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入接收人号码",
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
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderName",
            "label": "发送人姓名",
            itemLayout: { span: 6},
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入发送人姓名"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "secrecy",
            "label": "是否保密",
            itemLayout: { span: 6},
            "field": {
              "type": "switch",
              "props": {
                "checkedChildren": "on",
                "unCheckedChildren": "off"
              }
            },
            "valuePropName": "checked"
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
        ]
      },
      {
        "name": "basic",
        "container": {
          "type": "card",
          "props": {
            "title": "基础",
            "type": "inner",
            style: {
              'margin-top': '20px',
              'padding-bottom': '200px'
            },
          }
        },
        "fields": [
          {
            "name": "time",
            "label": "送货时间",
            itemLayout: { span: 6},
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
          },
          {
            "name": "priceProject",
            "label": "价格保护",
            itemLayout: { span: 6},
            "field": {
              "type": "slider",
              "props": {
                "min": 0,
                "max": 1000,
                "step": 100,
                "dots": true
              }
            },
            "remoteSource": {
              "url": "/api/manage/priceList.json"
            }
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderName",
            "label": "发送人姓名",
            itemLayout: { span: 6},
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入发送人姓名"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "secrecy",
            "label": "是否保密",
            itemLayout: { span: 6},
            "field": {
              "type": "switch",
              "props": {
                "checkedChildren": "on",
                "unCheckedChildren": "off"
              }
            },
            "valuePropName": "checked"
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            itemLayout: { span: 6},
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
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
          },
        ]
      },
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

