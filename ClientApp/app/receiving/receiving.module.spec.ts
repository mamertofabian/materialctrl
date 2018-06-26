import { ReceivingModule } from './receiving.module';

describe('ReceivingModule', () => {
  let receivingModule: ReceivingModule;

  beforeEach(() => {
    receivingModule = new ReceivingModule();
  });

  it('should create an instance', () => {
    expect(receivingModule).toBeTruthy();
  });
});
