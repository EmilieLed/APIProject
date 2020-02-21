const express = require('express');
const has = require('has-value');
const router = express.Router();

function validateJSONHeaders(req, res, next)
{
    if(req.get('Content-Type') === 'application/json')
    {
        next();
    }
    else
    {
        const err = new Error('Bad Request - Missing Headers');
        err.status = 400;
        next(err);
    }
}

//  Some fixed example data of items
let itemData = {
    items: [{
        id: 1,
        title: "A Lamp",
        description: "An electric lamp",
        price:"2€",
        location:"Oulu",
        image: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif"
    },
    {
        id: 1,
        title: "An other Lamp",
        description: "An other electric lamp",
        price:"4€",
        location:"Oulu",
        image: "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif"
    },
    ]
}

//  Return all item information
router.get('/', (req, res) => { res.json(itemData)});

//  Return information of a single item
router.get('/:itemId', (req, res) => {
    const resultItem = itemData.items.find(d => {
        if (d.id == req.params.itemId) {
            return true;
        }
        else {
            return false;
        }
    });
    if(resultItem === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultItem);
    }
})

/* Middleware to validate new item creation */
function validateNewItem(req, res, next)
{
    // prepare error object
    const err = new Error();
    err.name = "Bad Request";
    err.status = 400;
    if(has(req.body, 'title') == false)
    {
        err.message = "Missing or empty title";
        next(err);
    }
    if(has(req.body, 'description') == false)
    {
        err.message = "Missing or empty description";
        next(err);
    }
    if(has(req.body, 'price') == false)
    {
        err.message = "Missing or empty price";
        next(err);
    }
    if(has(req.body, 'location') == false)
    {
        err.message = "Missing or empty location";
        next(err);
    }
    if(has(req.body, 'image') == false)
    {
        err.message = "Missing or empty image";
        next(err);
    }
    next(); // no validation errors, so pass to the next
}

/* Create a new item to sell
    Expects the following data format
    {
        title: string,
        description: string,
        location: string,
        price: string,

        image: string - whole url to image
    }
*/
router.post('/',
    [
      validateJSONHeaders,
      validateNewItem
    ],
    (req, res) => {
        const newItem = {
            id: ItemData.items.length + 1,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            price: req.body.price,
            image: req.body.image
        }
        ItemData.items.push(newItem);

        res.status(201);
        res.json(newItem);
});

router.delete('/:id', (req, res) => {
    ItemData.items = itemData.items.filter(item => item.id != req.params.id);
    res.sendStatus(200);
})

module.exports = router;