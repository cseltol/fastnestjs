import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModel } from './products/products.module';

@Module({
  imports: [
    ProductsModel, 
    MongooseModule.forRoot(`mongodb+srv://cseltol:cseltol1337@cluster0.6rrlv.mongodb.net/productsdb?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
