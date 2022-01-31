module.exports = function filtersMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        column: '_id',
        order: 1
    }

    // sort and order: _sort & _order
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            column: req.query._sort,
        })

        if (req.query.hasOwnProperty('_order')) {
            const order = ['asc', 'desc', 1, -1].includes(req.query._order) ? req.query._order : 1
            Object.assign(res.locals._sort, {
                order: order
            })
        }
    }

    res.locals._pagination = {
        enabled: false,
    }

    //pagination: _page & _limit
    if (req.query.hasOwnProperty('_limit')) {
        Object.assign(res.locals._pagination, {
            enabled: true,
            limit: req.query._limit,
            page: 1,
        })

        if (req.query.hasOwnProperty('_page')) {
            Object.assign(res.locals._pagination, {
                page: req.query._page,
            })
        }
    }

    res.locals._search = {
        enabled: false,
    }

    // search params: param_like = value
    // get all object key 
    const paramKeys = Object.keys(req.query)

    // find search param
    const searchKey = paramKeys.find(param => param.endsWith('_like'))

    // assign key value if search param found
    if (searchKey) {
        Object.assign(res.locals._search, {
            enabled: true,
            column: searchKey.split('_')[0],
            value: req.query[searchKey]
        })
    }

    //search value in a range:
    res.locals._compare = {
        enabled: false,
    }

    

    /**
    * TODO: filter
    * //search all by value
    * _q={value}
    */

    next();
};