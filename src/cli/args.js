const parseArgs = () => {
    const res = [];
    const searchKey = '--';
    const cliArguments = process.argv.slice(2);

    cliArguments.forEach((item, i) => {
        if (item.startsWith(searchKey)) {
            const prop = item.replace(searchKey, '');
            const value = cliArguments[i + 1];
            res.push(`${prop} is ${value}`);
        }
    })
    console.log(res.join(', '));
};

parseArgs();
