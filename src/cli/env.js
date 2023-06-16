const parseEnv = () => {
    const res = [];
    const searchKey = 'RSS_';
    const variables = process.env;

    Object.keys(variables).forEach((item) => {
        if (item.startsWith(searchKey)) {
           res.push(`${item}=${variables[item]}`);
        }
    });

    if (res.length) {
        console.log(res.join('; '));
    }
};

parseEnv();
