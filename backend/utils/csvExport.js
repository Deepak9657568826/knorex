const { parse } = require('json2csv');

const exportToCSV = (users) => {
    const fields = ['_id', 'email', 'firstName', 'lastName'];
    return parse(users, { fields });
};

module.exports = { exportToCSV };
