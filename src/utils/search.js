export function parseSearchResult(response) {
  const res = {
    list: response.records,
    pagination: {
      current: response.current,
      pageSize: response.size,
      total: response.total,
    },
  };

  return res;
}

export function formatFormValues(formValues) {
  return Object.keys(formValues).reduce((result, key) => {
    const nextResult = { ...result };
    const value = formValues[key];

    if (value != null) {
      if (Array.isArray(value) || typeof value === 'string') {
        if (value.length) {
          nextResult[key] = value;
        }
      } else {
        nextResult[key] = value;
      }
    }

    return nextResult;
  }, {});
}

export function serializeSearchParam(pagination = {}, query = {}, filters = {}, sorter = {}) {
  const { current: pageIndex = 1, pageSize = 10 } = pagination;
  const filterValues = Object.keys(filters).reduce((result, key) => {
    const nextResult = { ...result };
    const filterValue = filters[key] || [];

    if (filterValue.length) {
      nextResult[`IN_${key}`] = filterValue;
    }
    return nextResult;
  }, {});
  const result = {
    pageIndex,
    pageSize,
    ...query,
    ...filterValues
  }
  return result;
  // const filter = {
  //   ...query,
  //   ...filterValues,
  // };
  // const page = {
  //   pageNo,
  //   pageSize,
  // };
  //
  // if (sorter.field) {
  //   page.orderBy = sorter.field;
  //   page.order = sorter.order === 'descend' ? 'desc' : 'asc';
  // }
  // return {
  //   page,
  //   filter
  // };

  // return {
  //   page: JSON.stringify(page),
  //   filter: JSON.stringify(filter),
  // };
}
