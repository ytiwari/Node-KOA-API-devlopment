const Koa = require('koa');
const app = new Koa();
const PORT = 4000;

const Router = require('koa-router');
const router = new Router();

const bodyParser = require('koa-parser');
app.use(bodyParser());

router.get('/', (ctx) => {
    ctx.body = "123Welcome to Koa application";
    
});

const posts = [
    {
        "id": 1,
        "name": "Nodejs developer",
        "content": "This is about nodejs deverloper"
    },
    {
        "id": 2,
        "name": "Viewjs dev",
        "content": "Thsi is about view js developement"
    },
    {
        "id": 3,
        "name": "Angular dev",
        "content": "Thsi is about angular js developement"
    }
]

router.get('/posts', (ctx) =>{
    ctx.body = post;
});

router.post('/posts', (ctx) =>{
    console.log(ctx.request.body);
    let {id, name, content} = ctx.request.body;
    
    if(!id){
       ctx.throw(400, "Id is required field");
    }

    if(!name){
        ctx.throw(400, "Name is required field");
    }

    if(!content){
        ctx.throw(400, "content is required field");
    }

    posts.push({id, name, content});
    ctx.body = posts
});

app.use(router.routes());

app.listen(PORT);
console.log(`Server is listenning on PORT ${PORT}`);