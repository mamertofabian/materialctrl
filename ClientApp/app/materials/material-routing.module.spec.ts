import { MaterialRoutingModule } from './material-routing.module';

describe('MaterialRoutingModule', () => {
  let materialRoutingModule: MaterialRoutingModule;

  beforeEach(() => {
    materialRoutingModule = new MaterialRoutingModule();
  });

  it('should create an instance', () => {
    expect(materialRoutingModule).toBeTruthy();
  });
});
