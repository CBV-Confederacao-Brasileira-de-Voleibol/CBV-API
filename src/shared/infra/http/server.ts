import app from './app';
import '../typeorm'


app.listen(3333, () =>{
    console.log(`🚀 Server is running on port ${process.env.APP_PORT}`)
});