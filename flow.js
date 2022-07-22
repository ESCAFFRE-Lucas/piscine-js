const flow = (functions) => (a, b) => functions.splice(1).reduce((acc, curr) => curr(acc), functions[0](a, b));
