/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Online Groceries' });
    };
    module.exports = {
        index
    };