const filterTrackEvent = (json) => {
  const data = json.states;

  const onlyActions = data.map((statesArray) => {
    const { inputActions } = statesArray;
    const { outputActions } = statesArray;
    const actions = [...inputActions, ...outputActions];

    return actions;
  });

  const flatActions = onlyActions.flat(Infinity);

  const onlyTrackEvents = flatActions.filter((action) => action.type === 'TrackEvent');

  return onlyTrackEvents;
};

console.log(filterTrackEvent(dataMock));
