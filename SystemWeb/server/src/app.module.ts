import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [MqttModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
