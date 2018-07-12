import Promise from 'bluebird';

    const dumpRaw = () => {
      return AsyncStorage.getAllKeys().then(keys => {
        return Promise.reduce(keys, (result, key) => {
          return AsyncStorage.getItem(key).then(value => {
            result[key] = value;
            return result;
          });
        }, {});
      });
    };

    dumpRaw().then(data => console.log('EVERYTING IN ASYNC ', data));