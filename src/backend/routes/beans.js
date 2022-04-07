const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');
const { db } = require('../utils/db')

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});

/* router.get('/:id', async (req, res) => {
    console.log("get menu item with id")
    let id = req.params.id;
    
    let m = require('../data/menu.json');

    let selected = m.menu.filter(item => item.id === parseInt(id));

    res.send(selected[0])
}); */

//gå in med ditt uuid i url, skicka med items i posten
router.post('/order/:uuid', async (req, res) => {
    console.log("post order")
    //go through all items in cart and calculate total price from item.price and item.quantity

    let totalPrice = 0;
    for (let i = 0; i < req.body.items.length; i++) {
        totalPrice += Number(req.body.items[i].price * req.body.items[i].quantity);
    }

    const order = {
        eta: 2,
        orderNr: generateOrderNr(),
        items: [...req.body.items],
        total: totalPrice,
        timeStamp: Date.now()
    }
    console.log(order);

     // använd UUID och uppdatera databasen
    let user =  await db.get(`users`)
        .find({ id : req.params.uuid })
        .value();
    
    //post är vår historik och nu pushar vi in order
    user.orderHistory.push(order);
   
    await db.get(`users`)
        .find({ id : req.params.uuid })
        .assign({ orderHistory: user.orderHistory })
        .write();
   
    res.send(order);
});


router.post('/profile/:uuid', async (req, res) => {
    console.log(req.body)
    //skapa profile?
    let users = await db.get('users').find({ email : req.body.email }).value()
    console.log("users", users)
    // Skapa dokument med ID uuid
    await db.get('users')
    .push({ id: req.params.uuid, name: req.body.name, email: req.body.email, orderHistory: [] })
    .write()

    res.sendStatus(200)
})

/* 
router.get('/profile/:uuid', async (req, res) => {
    //hämta profile
    // 1. Hämta dokumentet med nyckeln uuid i datbasen
    let profile = await db.get('posts')
    .find({ id: req.params.uuid })
    .value()

    // 2. skicka tillbaka till frontend
    res.send({ profile: profile.profile, orderHistory: profile.orderHistory })
}) */

router.post('/profileFind/', async (req, res) => {
    //hämta profile
    // 1. Hämta dokumentet med nyckeln uuid i datbasen
    let profile = await db.get('users')
    .find({ email: req.body.email })
    .value()

    // 2. skicka tillbaka till frontend
    console.log("profile", profile)
    res.send({profile: profile})
})

router.get('/profileFind/:uuid', async (req, res) => {
    //hämta profile
    let profile = await db.get('users')
    .find({ id: req.params.uuid })
    .value()

    res.send({profile: profile})
})


router.get('/key', (req, res) => {
    //get random key
    console.log('requesting key')

    const key = {
        key: uuid()
    }

    console.log(key)
    
    res.send(JSON.stringify(key));
})



module.exports = router