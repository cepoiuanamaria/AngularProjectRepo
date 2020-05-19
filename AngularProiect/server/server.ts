import express from 'express'; 
import { resolveSoa } from 'dns';
import { routes } from './routes';


const app = express();

app.use((req,res,next) => {
   res.header('Acces-Control-Allow-Origin','*');
   res.header('Acces-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
   res.header('Acces-Control-Allow-Methods','OPTIONS, GET, POST, PUT, DELETE');
   if('OPTIONS' == req.method) {
       res.sendStatus(200);
   } else {
       console.log(`${req.ip} ${req.method} ${req.url}`);
       next();
   }

});

app.use(express.json());

app.use('/', routes);

app.listen(4200, '127.0.0.1', function() {
    console.log('Server now listening on 4200');

})
