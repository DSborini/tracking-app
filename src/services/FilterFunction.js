const dataMock = {
    "id": "795108d6-7af8-4c1e-bc6d-fb5b37d3dfd9",
    "owner": {
        "name": "bancopanantecfgtsalpha",
        "domain": "msging.net"
    },
    "flowId": "ec25793b-7c6a-493c-84d1-33b17837b564",
    "user": "85bfcec6-0b4e-4eec-a2e6-93d2f7f2b78d.bancopanrouteralpha@0mn.io",
    "input": "ok",
    "states": [
        {
            "id": "64a0db14-e999-41dc-8fba-b1187c46530c",
            "inputActions": [],
            "outputActions": [],
            "outputs": [
                {
                    "stateId": "af39cf7f-d69a-4ff7-9bf3-c009d9967e7e",
                    "conditionsCount": 1,
                    "timestamp": "2022-05-02T13:50:28.4481296+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                },
                {
                    "stateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                    "conditionsCount": 2,
                    "timestamp": "2022-05-02T13:50:28.4488678+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                },
                {
                    "stateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                    "conditionsCount": 2,
                    "timestamp": "2022-05-02T13:50:28.448872+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                },
                {
                    "stateId": "d75906c6-578e-4037-a4b8-d72fb80553fb",
                    "conditionsCount": 1,
                    "timestamp": "2022-05-02T13:50:28.4488727+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                },
                {
                    "stateId": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                    "conditionsCount": 1,
                    "timestamp": "2022-05-02T13:50:28.4496045+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                }
            ],
            "extensionData": {
                "name": "[Requesting fgts] Waiting fgts be saved"
            },
            "timestamp": "2022-05-02T13:50:28.4481181+00:00",
            "elapsedMilliseconds": 6,
            "warning": null,
            "error": null
        },
        {
            "id": "9afc5652-0993-4a71-b03c-8c6bf157249b",
            "inputActions": [
                {
                    "order": 0,
                    "type": "TrackContactsJourney",
                    "parsedSettings": {
                        "previousStateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                        "previousStateName": "64a0db14-e999-41dc-8fba-b1187c46530c",
                        "stateId": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                        "stateName": "[Requesting fgts] User input message"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-05-02T13:50:28.4597326+00:00",
                    "elapsedMilliseconds": 2,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "5f91dc56-9030-4247-aa61-d50c3ee7811e",
                        "type": "application/vnd.lime.chatstate+json",
                        "content": {
                            "state": "composing",
                            "interval": 1000
                        },
                        "metadata": {
                            "#stateName": "[Requesting fgts] User input message",
                            "#stateId": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                            "#messageId": "096d1bef-0142-4a93-86c1-6f7898f5224e",
                            "#previousStateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                            "#previousStateName": "[Requesting fgts] Waiting fgts be saved"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-05-02T13:50:28.4622783+00:00",
                    "elapsedMilliseconds": 1007,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "SendMessage",
                    "parsedSettings": {
                        "id": "46cca0cd-ac74-48e9-a11b-630d303a94e5",
                        "type": "text/plain",
                        "content": "<b>Desculpe!</b> Ainda estamos procurando os seus dados, por favor espere mais um pouco!  ⏳",
                        "metadata": {
                            "#stateName": "[Requesting fgts] User input message",
                            "#stateId": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                            "#messageId": "096d1bef-0142-4a93-86c1-6f7898f5224e",
                            "#previousStateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                            "#previousStateName": "[Requesting fgts] Waiting fgts be saved"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-05-02T13:50:29.4698011+00:00",
                    "elapsedMilliseconds": 3,
                    "warning": null,
                    "error": null
                }
            ],
            "outputActions": [],
            "outputs": [
                {
                    "stateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                    "conditionsCount": 0,
                    "timestamp": "2022-05-02T13:50:29.4733935+00:00",
                    "elapsedMilliseconds": 0,
                    "warning": null,
                    "error": null
                }
            ],
            "extensionData": {
                "name": "[Requesting fgts] User input message"
            },
            "timestamp": "2022-05-02T13:50:28.4541747+00:00",
            "elapsedMilliseconds": 1023,
            "warning": null,
            "error": null
        },
        {
            "id": "64a0db14-e999-41dc-8fba-b1187c46530c",
            "inputActions": [
                {
                    "order": 0,
                    "type": "TrackContactsJourney",
                    "parsedSettings": {
                        "previousStateId": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                        "previousStateName": "9afc5652-0993-4a71-b03c-8c6bf157249b",
                        "stateId": "64a0db14-e999-41dc-8fba-b1187c46530c",
                        "stateName": "[Requesting fgts] Waiting fgts be saved"
                    },
                    "continueOrError": false,
                    "timestamp": "2022-05-02T13:50:29.4827226+00:00",
                    "elapsedMilliseconds": 2,
                    "warning": null,
                    "error": null
                },
                {
                    "order": 0,
                    "type": "MergeContact",
                    "parsedSettings": {
                        "extras": {
                            "apiRequest": "code: 0 | message: [\"Sequence contains no matching element\"]"
                        }
                    },
                    "continueOrError": false,
                    "timestamp": "2022-05-02T13:50:29.4893015+00:00",
                    "elapsedMilliseconds": 49,
                    "warning": null,
                    "error": null
                }
            ],
            "outputActions": [],
            "outputs": [],
            "extensionData": {
                "name": "[Requesting fgts] Waiting fgts be saved"
            },
            "timestamp": "2022-05-02T13:50:29.4778862+00:00",
            "elapsedMilliseconds": 65,
            "warning": null,
            "error": null
        }
    ],
    "inputActions": [],
    "outputActions": [],
    "timestamp": "2022-05-02T13:50:29.5903554+00:00",
    "elapsedMilliseconds": 1272,
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
