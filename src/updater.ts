export default function updater(array: any[]) {
  const add = (obj: any) => [...array, obj];

  const remove = () => {
    const where = (key: string, value: string | number | boolean) =>
      array.filter(item => item[key] != value);

    return {
      where,
    };
  };

  const update = (toUpdate: any) => {
    const where = (key: string, value: string | number | boolean) =>
      array.map(item => {
        if (item[key] == value) {
          const entries = Object.entries(toUpdate);

          for (let entry of entries) {
            const key = entry[0];
            const value = entry[1];
            item[key] = value;
          }
        }
        return item;
      });

    return {
      where,
    };
  };

  return {
    add,
    remove,
    update,
  };
}
