import { ReceivingRoutingModule } from './receiving-routing.module';

describe('ReceivingRoutingModule', () => {
  let receivingRoutingModule: ReceivingRoutingModule;

  beforeEach(() => {
    receivingRoutingModule = new ReceivingRoutingModule();
  });

  it('should create an instance', () => {
    expect(receivingRoutingModule).toBeTruthy();
  });
});
