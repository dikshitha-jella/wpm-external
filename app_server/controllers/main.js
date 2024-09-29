/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'AMS' });
    };
    module.exports = {
        index
    };