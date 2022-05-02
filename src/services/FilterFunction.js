const dataMock = {
    "id": "2f2a7cd0-25c5-49ba-b874-4da253f17fcf",
    "owner": {
        "name": "bancopanconsignadoalpha",
        "domain": "msging.net"
    },
    "flowId": "b6dbca8e-aea6-4afa-aab9-84553c418d7d",
    "user": "cd520be4-aa01-4ebb-9bc0-304837f6635d.bancopanrouteralpha@0mn.io",
    "input": "pdf",
    "states": [
        {
            "id": "7c7c87e4-d396-4f7e-b125-c2734eca0943",
            "inputActions": [],
            "outputActions": [
                {
                    "order": 0,
                    "type": "TrackEvent",
                    "parsedSettings": {
                        "extras": {
                            "cpfUsuario": "46945642852",
                            "blocoOrigem": "[EC.1.4.1] Paycheck request",
                            "#stateName": "[EC.1.4.1] Paycheck request",
                            "#stateId": "7c7c87e4-d396-4f7e-b125-c2734eca0943",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "81a3a0ea-9b03-411f-9115-cf819604acb1",
                            "#previousStateName": "[EC.1.3.0] Governo de SP"
                        },
                        "category": "Usuario enviou o contracheque validacao",
                        "action": "sim"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.5878523+00:00",
                    "elapsedMilliseconds": 4,
                    "warning": null,
                    "error": null
                }
            ],
            "outputs": [
                {
                    "stateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                    "conditionsCount": 1,
                    "timestamp": "2022-04-29T19:10:47.5925837+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                }
            ],
            "extensionData": {
                "name": "[EC.1.4.1] Paycheck request"
            },
            "timestamp": "2022-04-29T19:10:47.5832971+00:00",
            "elapsedMilliseconds": 13,
            "warning": null,
            "error": null
        },
        {
            "id": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
            "inputActions": [
                {
                    "order": 0,
                    "type": "TrackContactsJourney",
                    "parsedSettings": {
                        "previousStateId": "7c7c87e4-d396-4f7e-b125-c2734eca0943",
                        "previousStateName": "7c7c87e4-d396-4f7e-b125-c2734eca0943",
                        "stateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                        "stateName": "[EC.1.4.1] Request validate"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6000512+00:00",
                    "elapsedMilliseconds": 2,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "ExecuteScript",
                    "parsedSettings": {
                        "function": "run",
                        "source": "const run = (inputContent, inputType) => {\n\n    const expectedText = 'continuar';\n    const expectedFormat = 'application/pdf';\n    let result = false;\n\n    if (inputType !== 'text/plain') {\n        const userInput = JSON.parse(inputContent);\n        const inputType = userInput.type;\n        if (inputType === expectedFormat) result = true;\n    } else if (inputType === 'text/plain') {\n        if (inputContent.toLowerCase() === expectedText) result = true;\n    };\n\n    return result;\n};\n",
                        "inputVariables": [
                            "input.content",
                            "input.type"
                        ],
                        "outputVariable": "paycheckRequestInput",
                        "LocalTimeZoneEnabled": false
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6021391+00:00",
                    "elapsedMilliseconds": 5,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "TrackEvent",
                    "parsedSettings": {
                        "extras": {
                            "cpfUsuario": "46945642852",
                            "blocoOrigem": "[EC.1.4.1] Request validate",
                            "#stateName": "[EC.1.4.1] Request validate",
                            "#stateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "7c7c87e4-d396-4f7e-b125-c2734eca0943",
                            "#previousStateName": "[EC.1.4.1] Paycheck request"
                        },
                        "category": "Usuario enviou o contracheque validacao",
                        "action": "sim"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6072786+00:00",
                    "elapsedMilliseconds": 2,
                    "warning": null,
                    "error": null
                }
            ],
            "outputActions": [],
            "outputs": [
                {
                    "stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                    "conditionsCount": 1,
                    "timestamp": "2022-04-29T19:10:47.6097743+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                }
            ],
            "extensionData": {
                "name": "[EC.1.4.1] Request validate"
            },
            "timestamp": "2022-04-29T19:10:47.5965952+00:00",
            "elapsedMilliseconds": 16,
            "warning": null,
            "error": null
        },
        {
            "id": "bd47ad87-d6fc-4183-adfc-3213c195d699",
            "inputActions": [
                {
                    "order": 0,
                    "type": "TrackContactsJourney",
                    "parsedSettings": {
                        "previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                        "previousStateName": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                        "stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                        "stateName": "[E.C.1.4.2] Already have an account"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6166847+00:00",
                    "elapsedMilliseconds": 2,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "ExecuteScript",
                    "parsedSettings": {
                        "function": "run",
                        "source": "const MenuWhatsapp = {    \n    \"recipient_type\": \"individual\",\n    \"type\": \"interactive\",\n    \"interactive\": {\n        \"type\": \"button\",     \n        \"body\": {\n            \"text\": 'Posso fazer isso agora?'\n        },\n        \"action\": {\n            \"buttons\":[\n                {\n                    \"type\": \"reply\",\n                    \"reply\": {\n                        \"id\": \"unique-postback-id\",\n                        \"title\": \"Sim\" \n                    }\n                },\n                {\n                    \"type\": \"reply\",\n                    \"reply\": {\n                        \"id\": \"unique-id\",\n                        \"title\": \"Não\" \n                    }\n                }\n        ] \n        }\n    }\n};\n\nconst MenuBlipChat = {\n    \n    \"scope\":\"immediate\", // (create a quickreply instead menu)\n    \"text\": 'Posso fazer isso agora?',\n    \"options\":[\n        {\n            \"text\":\"Sim\",\n            \"type\":\"text/plain\",\n            \"value\": \"Sim\"\n        },\n        {\n            \"text\":\"Não\",\n            \"type\":\"text/plain\",\n            \"value\": \"Não\"\n        }                                          \n    ]\n};\n\nfunction run(platform) {    \n    const menuChannels = {\n        \"blipchat\": MenuBlipChat,\n        \"whatsapp\": MenuWhatsapp\n    }\n\n    for(let channel in menuChannels){\n        if(platform.indexOf(channel) != -1){\n            return menuChannels[channel];\n        }\n    }\n    \n    return MenuWhatsapp;\n}",
                        "inputVariables": [
                            "channel"
                        ],
                        "outputVariable": "accountQuery",
                        "LocalTimeZoneEnabled": false
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6191453+00:00",
                    "elapsedMilliseconds": 7,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "TrackEvent",
                    "parsedSettings": {
                        "extras": {
                            "cpfUsuario": "46945642852",
                            "blocoOrigem": "[E.C.1.4.2] Already have an account",
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        },
                        "category": "Ec menu transferencia exibicao",
                        "action": "exibicao"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6265823+00:00",
                    "elapsedMilliseconds": 5,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "TrackEvent",
                    "parsedSettings": {
                        "extras": {
                            "cpfUsuario": "46945642852",
                            "blocoOrigem": "[E.C.1.4.2] Already have an account",
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        },
                        "category": "Link incentivo conta origem",
                        "action": "[EC.1.4.1] Paycheck request"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.6325171+00:00",
                    "elapsedMilliseconds": 6,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "1c497006-f14b-4c86-a402-0bfdde0f1dd4",
                        "type": "application/vnd.lime.chatstate+json",
                        "content": {
                            "state": "composing",
                            "interval": 1000
                        },
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:47.639083+00:00",
                    "elapsedMilliseconds": 1000,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "2735b1be-4b48-48d8-882d-3f80fc7da0c8",
                        "type": "text/plain",
                        "content": "Já tem conta no Banco PAN? Aproveite e baixe o app: <i>https://bancopan.onelink.me/zIun/fb6c45c4</i>",
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:48.6399603+00:00",
                    "elapsedMilliseconds": 3,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "946e4eaf-109f-49bb-b44d-5aff0bab073f",
                        "type": "application/vnd.lime.chatstate+json",
                        "content": {
                            "state": "composing",
                            "interval": 1000
                        },
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:48.6438425+00:00",
                    "elapsedMilliseconds": 996,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "52202acf-9e81-43ab-949e-2a030395c714",
                        "type": "text/plain",
                        "content": "Para ajudar da melhor forma, precisarei te transferir para um de nossos consultores. 😊",
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:49.6401305+00:00",
                    "elapsedMilliseconds": 3,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "e2ad7ae9-0e3c-48f8-9a74-ef6d4309db38",
                        "type": "application/vnd.lime.chatstate+json",
                        "content": {
                            "state": "composing",
                            "interval": 1000
                        },
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:49.6438064+00:00",
                    "elapsedMilliseconds": 997,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendRawMessage",
                    "parsedSettings": {
                        "metadata": {
                            "#stateName": "[E.C.1.4.2] Already have an account",
                            "#stateId": "bd47ad87-d6fc-4183-adfc-3213c195d699",
                            "#messageId": "0aaf7cca-e523-415a-ae01-83d63539df32",
                            "#previousStateId": "cea24441-e3d1-404d-ab19-1e8d0f49ab7f",
                            "#previousStateName": "[EC.1.4.1] Request validate"
                        },
                        "type": "application/vnd.lime.select+json",
                        "rawContent": "{\"scope\":\"immediate\",\"text\":\"Posso fazer isso agora?\",\"options\":[{\"text\":\"Sim\",\"type\":\"text/plain\",\"value\":\"Sim\"},{\"text\":\"Não\",\"type\":\"text/plain\",\"value\":\"Não\"}]}"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-04-29T19:10:50.6411311+00:00",
                    "elapsedMilliseconds": 3,
                    "warning": null,
                    "error": null
                }
            ],
            "outputActions": [],
            "outputs": [],
            "extensionData": {
                "name": "[E.C.1.4.2] Already have an account"
            },
            "timestamp": "2022-04-29T19:10:47.6133111+00:00",
            "elapsedMilliseconds": 3031,
            "warning": null,
            "error": null
        }
    ],
    "inputActions": [
        {
            "order": 0,
            "type": "SetVariable",
            "parsedSettings": {
                "variable": "origem",
                "value": "[EC.1.4.1] Paycheck request"
            },
            "continueOrError": false,
            "timestamp": "2022-04-29T19:10:47.5833115+00:00",
            "elapsedMilliseconds": 4,
            "warning": null,
            "error": null
        }
    ],
    "outputActions": [],
    "timestamp": "2022-04-29T19:10:50.6489894+00:00",
    "elapsedMilliseconds": 3113,
    "warning": null,
    "error": null
}

const filterTrackEvent = (json) => {
  const data = json.states;

  const onlyActions = data.map((statesArray) => {
      const inputActions = statesArray.inputActions;
      const outputActions = statesArray.outputActions;
      const actions = [...inputActions, ...outputActions];
      
      return actions;
  }); 

  const flatActions = onlyActions.flat(Infinity);

  const onlyTrackEvents = flatActions.filter((action) => {
        return action.type === "TrackEvent";
  });

  return onlyTrackEvents;
};

console.log(filterTrackEvent(dataMock));
